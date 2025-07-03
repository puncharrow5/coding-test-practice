/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let leftIndex = 0;
    let rightIndex = s.length - 1;

    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left ++;
            right --;
        }

        return true;
    }

    while (leftIndex < rightIndex) {
        if (s[leftIndex] !== s[rightIndex]) {
            return isPalindrome(s, leftIndex + 1, rightIndex) || isPalindrome(s, leftIndex, rightIndex - 1);
        }

        leftIndex ++;
        rightIndex --;
    }

    return true;
};