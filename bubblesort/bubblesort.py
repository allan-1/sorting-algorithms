def bubbleSort(array: list) -> list:
    """
    Bubble Sort

    Idea: 
        Imagine bubbles rising to the surface. In each pass, 
        the largest unsorted element "bubbles up" to its correct position.

        Implementation:
            Compare adjacent elements in the list.
            If they are in the wrong order, swap them.
            Repeat until no more swaps are needed.
    """

    # first we look for the length of the array
    n = len(array)

    # the first loop will loop through the whole length of the array
    for i in range(n - 1):
        # the second loop will traverse the list from index zero in decreasing index
        for j in range(0, n - i -1):
            # we compare the two adjacent values
            if array[j] > array[j + 1]:
                # we swap the values
                array[j], array[j + 1] = array[j + 1], array[j]
    return array

print(bubbleSort([2,5,3,1,8,9]))