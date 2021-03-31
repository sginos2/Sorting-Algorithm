function selectionSort(array) {
    let newArr = [];
    while (array.length !== 0) {
        let min = Math.min(...array);
        let index = array.indexOf(min);
        newArr.push(min);
        array.splice(index, 1);
    }
    return newArr;
}