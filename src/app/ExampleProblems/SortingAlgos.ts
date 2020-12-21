import { LinkedListNode, PayLoad } from "../DataStructures/LinkedList";
import { askAndGet } from "../Utility";


export const getNumbers = async () => {
    const n = await askAndGet("How many numbers do you want to enter ? : ");
    let input: any;
    let numbers: number[] = [];

    for (let index = 0; index < n; index++) {
        input = await askAndGet("enter the " + (index + 1).toString() + " number : ");
        numbers.push(+input);
    }
    return numbers;
}

// get the max / min of the numbers as a bubble to right
// in each iteration therefore at N^2 we get a sorted array

export const bubbleSort = async (desc?:boolean) => {

    let numbers = await getNumbers();
    let size = numbers.length;

    const isLesser = (num1: number, num2: number) => num1 < num2;
    const isGreater = (num1: number, num2: number) => num1 > num2;

    let compareFunction:Function = isLesser;

    let consideredIndex = 0;
    
    desc && desc == true ? compareFunction = isGreater : compareFunction = isLesser;

    const compareWithRestOfThemAndReplace = () => {
        numbers.slice(consideredIndex+1).forEach((number, index) => {
            if(compareFunction(number, numbers[consideredIndex])){
                [numbers[consideredIndex], numbers[consideredIndex + index + 1]] =
                    [numbers[consideredIndex + index + 1], numbers[consideredIndex]]
            }
        })
    }

    while(consideredIndex < size){
        compareWithRestOfThemAndReplace();
        consideredIndex++;
    }
    
    return numbers;
}