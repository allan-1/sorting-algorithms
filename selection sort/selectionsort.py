def insertionSort(array: list) -> list:
    n = len(array)

    for i in range(n - 1):
        minIndex = i
        for j in range(i + 1, n):
            if array[j] < array[minIndex]:
                minIndex = j
            array[i], array[minIndex] = array[minIndex], array[i]
    return array
                
print(insertionSort([3,8,2,5,9,4,10]))