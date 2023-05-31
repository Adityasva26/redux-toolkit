import Chance from "chance";

const chance = Chance()

export const fakedata = () => {
    return chance.name({middle:true})
}