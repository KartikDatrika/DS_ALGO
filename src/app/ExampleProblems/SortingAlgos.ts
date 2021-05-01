import { LinkedListNode, PayLoad } from "../DataStructures/LinkedList";
import { askAndGet, isGreater, isLesser } from "../Utility";

const swap = (numbers: number[], a:number, b:number) => {
    [numbers[a], numbers[b]] = [numbers[b], numbers[a]];
}

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
    let compareFunction: Function = isLesser;

    let consideredIndex = 0;
    
    desc && desc == true ? compareFunction = isGreater : compareFunction = isLesser;

    const compareWithRestOfThemAndReplace = () => {
        numbers.slice(consideredIndex+1).forEach((number, index) => {
            if(compareFunction(number, numbers[consideredIndex])){
                swap(numbers, consideredIndex, consideredIndex+index+1);
            }
        })
    }

    while(consideredIndex < size){
        compareWithRestOfThemAndReplace();
        consideredIndex++;
    }
    
    return numbers;
}


export const insertionSort = async (desc?: boolean) => {
    let numbers = await getNumbers();
    let size = numbers.length;
    let compareFunction: Function = isLesser;
    let divider = 0;
    let sorted = numbers.slice(0,divider);
    let unsorted = numbers.slice(divider);
    let consideredIndex = 0;

    desc && desc == true ? compareFunction = isGreater : compareFunction = isLesser;
    
    const insertThisNumberInSortedSectionOfOriginalArray = () => {
        for (let i = 0; i < consideredIndex; i++) {
            if(compareFunction(numbers[consideredIndex], numbers[i])){

            }
        }
    }

    while (consideredIndex < size) {
        insertThisNumberInSortedSectionOfOriginalArray();
        consideredIndex++;
    }
    
    return numbers;
}