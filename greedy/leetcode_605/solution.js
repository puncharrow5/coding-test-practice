/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let result = 0;
    const paddedFlowerbed = [0, ...flowerbed, 0];
    const bedLength = paddedFlowerbed.length;

    for (let i=0; i<bedLength - 1; i++) {
        if (paddedFlowerbed[i] === 0 && 
            paddedFlowerbed[i - 1] === 0 && 
            paddedFlowerbed[i + 1] === 0) {
            
            paddedFlowerbed[i] = 1;
            result++;

            if (result >= n) {
                return true;
            }
        }
    }

    return result >= n;
};