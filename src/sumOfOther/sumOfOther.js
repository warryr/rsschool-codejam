function sumOfOther(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const temp = [];
        for (let j = 0; j < arr.length; j++) {
            if (j != i) {
                temp.push(arr[j]);
            }
        }
        console.log(temp);
        newArr[i] = temp.reduce((sum, num) => sum += num);
    }
    return newArr;
}