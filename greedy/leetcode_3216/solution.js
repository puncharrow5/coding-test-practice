/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    let result = s;
    const arr = s.split('');

    const checkSameParity = (num1, num2) => {
        return Number(num1) % 2 === Number(num2) % 2
    }

    for (let i=0; i<arr.length - 1; i++) {
        const isSameParity = checkSameParity(arr[i], arr[i+1]);

        if(isSameParity && arr[i] > arr[i+1]) {
            const currentArr = [...arr];

            currentArr[i] = arr[i+1];
            currentArr[i+1] = arr[i];

            const currentString = currentArr.join("");

            if(currentString < result) {
                result = currentString
            }
        }
    }

    return result;
};