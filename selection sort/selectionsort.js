function selectionSort(array){
    n = array.length

    for (let i = 0; i < n - 1; i++){
        minIndex = i
        for(let j = i + 1; j < n; j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
            [array[minIndex], array[i]] = [array[i], array[minIndex]]
        }
    }
    console.log(array)
}

selectionSort([3,4,2,7,6,1,19,45])