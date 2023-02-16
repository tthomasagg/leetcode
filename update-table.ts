import { remark } from "remark";
import remarkGfm from "remark-gfm";
import { readFileSync, writeFileSync, appendFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url';
import {Content, Link, Table, TableContent} from "mdast";
import { execSync } from 'child_process'
import { gfmTableToMarkdown } from 'mdast-util-gfm-table'
import { toMarkdown } from 'mdast-util-to-markdown'

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

enum TableCellsContent {
    PROBLEM_NUMBER= 0,
    PROBLEM_LINK = 1,
    PROBLEM_PATH = 2,
    PROBLEM_DIFFICULTY = 3
}

const TABLE_HEADER_INDEX: number = 0;

const CHALL_TABLE_PATH = 'CHALLTABLE.md'
const README_PATH = 'README.md'

// TODO: make it possible to add multiple languages (folders)

const languages = ['typescript']

const languagesSrc = languages.map((src) => join(__dirname, src));

const sortStagedFilesByDateDescCMD = `git diff --name-only --diff-filter=d --staged | sed "s|^$(basename "$(pwd)")/||g" | xargs stat --format="%Y %n" | awk '{print strftime("%Y-%m-%d %H:%M:%S +0000", $1), "|", $2}'`;
//credits to https://serverfault.com/a/1031956
const sortExistingFilesByDateDescCMD = `git ls-tree -r --name-only HEAD -z | TZ=UTC xargs -0n1 -I_ git --no-pager log -1 --date=iso-local --format="%ad | _" -- _`
const sortFilesByDateDescCMD = (directory: string) => `cd ${directory} && echo "$(${sortStagedFilesByDateDescCMD})" "\n$(${sortExistingFilesByDateDescCMD})" | sort --reverse`;

type RepoFilesType = {
    date: string
    filename: string
}

(async () => {
    const remarkedGfm = remark().use(remarkGfm)
    const challengeTableContent = readFileSync(CHALL_TABLE_PATH)
    const parsedTable = await remarkedGfm.parse(challengeTableContent)
    const table: Table = parsedTable.children.find((content: Content) => content.type === 'table') as Table

    const rowsWithoutHeader = table.children.filter((row: TableContent, rowIndex) => rowIndex !== TABLE_HEADER_INDEX)

    const solvedOnTable = (rowsWithoutHeader.map((row) => row.children[TableCellsContent.PROBLEM_PATH].children[0]) as Link[]).map((link: Link) => link.url)

    const solvedOnRepo: RepoFilesType[] = []
    for (let i = 0; i < languagesSrc.length; i++) {
        const solved = execSync(sortFilesByDateDescCMD(languagesSrc[i])).toString().split('\n').map(s => s.trimEnd()).filter(Boolean)
        if (solved) {
            solvedOnRepo.push(...solved.map((entry) => {
                const [date, filename] = entry.split(' | ')
                return {date, filename: `${languages[i]}/${filename.trimEnd()}`}
            }))
        }
    }

    // TODO: remove challenges absent from table
    const notAddedToTable = solvedOnRepo.filter(({ filename: repoFilename }: RepoFilesType) => !solvedOnTable.some(( solvedFile ) => solvedFile.includes(repoFilename)))

    if (notAddedToTable.length) {
        console.log(`Updating table with ${notAddedToTable.length} challenges`)
        for (let file of notAddedToTable) {
            const chal = readFileSync(file.filename)
            const { children } = await remarkedGfm.parse(chal)
            const infoTable: Table = children.filter((content) => content.type === 'table').shift() as Table
            if (infoTable !== undefined) {
                table.children.splice(1, 0, infoTable.children[1])
            }
        }

        const resultMarkdown = toMarkdown(table, { extensions: [gfmTableToMarkdown()] })

        // save to CHALLTABLE.md and append to readme.md

        writeFileSync(CHALL_TABLE_PATH, new TextEncoder().encode(resultMarkdown))
        appendFileSync(README_PATH, new TextEncoder().encode(`\n\n${resultMarkdown}`))
    } else {
        console.log('no new files found to update the table')
    }
})()