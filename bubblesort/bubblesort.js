/**
 * Bubble Sort
 *
 * Idea: 
        Imagine bubbles rising to the surface. In each pass, 
        the largest unsorted element "bubbles up" to its correct position.
 *
 * Implementation:
        Compare adjacent elements in the list.
        If they are in the wrong order, swap them.
        Repeat until no more swaps are needed.
 */

function bubbleSort(array){
    // first we look for the length of the array
    let n = array.length

    // the first loop will loop through the whole length of the array
    for(let i = 0; i < n -1; i++){
        // the second loop will traverse the list from index zero in decreasing index
       for(let j = 0; j < n - i - i; j++){
        // we compare the two adjacent values
        if(array[j] > array[j+1]){
            // we swap the values
            [array[j], array[j+1]] = [array[j+1], array[j]]
        }
       }
    }
    return array
}

console.log(bubbleSort([1,3,5,7,965,24]))