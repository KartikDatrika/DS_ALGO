// import { linkedListExample, reverseAlinkedList } from "./ExampleProblems/ReverseALinkedList";
import { bubbleSort } from "./ExampleProblems/SortingAlgos";
import { askAndGet } from "./Utility";

const test = async () => {
    let input: any = "s";
    while (input === "s") {
        console.log(await bubbleSort(true));
        input = await askAndGet("Enter s to repeat\n");
    }
}

const main = () => {
    console.log("Ippatikaina DS and Algo Nerchukoni Baagupadu !")
    // example();
    // linkedListExample();
    test()
}

main();