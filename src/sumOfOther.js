module.exports = function sumOfOther(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i + 1) {
    const temp = [];
    for (let j = 0; j < arr.length; j + 1) {
      if (j !== i) {
        temp.push(arr[j]);
      }
    }
    newArr[i] = temp.reduce((acc, num) => acc += num);
  }

  return newArr;
};
