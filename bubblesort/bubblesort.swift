func bubbleSort(array: [Int]) -> [Int]{
    var n = array.count
    var swap = 0
    
    for i in 0 ... n - 1 {
        for j in 0 ...  n - i - 1{
            if array[j] > array[j+1]{
                swap = array[j]
                array[j] = array[j + 1]
                array[j + 1] = swap
            }
        }
    }
    return array
}