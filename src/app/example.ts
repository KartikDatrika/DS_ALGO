import { askAndGet } from "./Utility";

export const example = async () => {
    const n = await askAndGet("How many numbers do you want to enter ? : ");
    for (let index = 0; index < n; index++) {
        console.log(await askAndGet("enter the " + (index + 1).toString() + " number : "));
    }
}