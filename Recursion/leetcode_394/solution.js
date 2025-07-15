/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let index = 0;

    function decodeRecursive() {
        let currentString = [];
        let currentNumber = 0;

        while (index < s.length) {
            const char = s[index];

            if (char >= '0' && char <= '9') {
                currentNumber = currentNumber * 10 + Number(char);
            } else if (char === '[') {
                index++;
                
                const nestedDecodedString = decodeRecursive(); 

                for (let i = 0; i < currentNumber; i++) {
                    currentString.push(nestedDecodedString);
                }
                currentNumber = 0;
            } else if (char === ']') {
                return currentString.join('');
            } else {
                currentString.push(char);
            }

            index++; 
        }

        return currentString.join('');
    }

    return decodeRecursive();
};