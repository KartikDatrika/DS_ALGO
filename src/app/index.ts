// import { linkedListExample, reverseAlinkedList } from "./ExampleProblems/ReverseALinkedList";
import { delimiter } from "path";
import { bubbleSort } from "./ExampleProblems/SortingAlgos";
import { reachingPoints } from "./LeetCode/reachingPoints";
import { askAndGet } from "./Utility";

const test = async () => {

    let result = "X"// "Y"/ "T";

    let input: any = "s";
    while (input === "s") {
        console.log(await bubbleSort(true));
        input = await askAndGet("Enter s to repeat or q/* to exit\n");
    }
    console.log("come back soon for practice");
}

const main = async () => {
    console.log("Ippatikaina DS and Algo Nerchukoni Baagupadu !")
    // example();
    // linkedListExample();
    // console.log(rob([183, 219, 57, 193, 94, 233, 202, 154, 65, 240, 97, 234, 100, 249, 186, 66, 90, 238, 168, 128, 177, 235, 50, 81, 185, 165, 217, 207, 88, 80, 112, 78, 135, 62, 228, 247, 211]));
    console.log(reachingPoints(35, 13, 455955547, 420098884));
    return
}

main();