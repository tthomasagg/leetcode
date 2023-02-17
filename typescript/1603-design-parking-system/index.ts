/*
| #    | Title                                                                                                                                             | Solution                                                                                                                                        | Difficulty |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1603 | [Design Parking System](https://leetcode.com/problems/design-parking-system/) | [Typescript](https://github.com/tthomasagg/leetcode/blob/main/typescript/1603-design-parking-system/index.ts) | Easy |
* */

enum CarTypes {
    big = 1,
    medium = 2,
    small = 3
}

type ParkingSlotsSpaces = {
    [CarTypes.big]: number
    [CarTypes.medium]: number
    [CarTypes.small]: number
}

class ParkingSystem {
    private space: ParkingSlotsSpaces = {
        [CarTypes.big]: 0,
        [CarTypes.medium]: 0,
        [CarTypes.small]: 0,
    }
    constructor(big: number, medium: number, small: number) {
        this.setSpaceFor(CarTypes[CarTypes[CarTypes.big]], big)
        this.setSpaceFor(CarTypes[CarTypes[CarTypes.medium]], medium)
        this.setSpaceFor(CarTypes[CarTypes[CarTypes.small]], small)
    }

    addCar(carType: number): boolean {
        if (this.space[carType] > 0) {
            this.setSpaceFor(CarTypes[CarTypes[carType]], this.space[carType] - 1)
            return true
        }
        return false
    }

    setSpaceFor(carType: keyof typeof CarTypes, value: number) {
        this.space[carType] = value
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */