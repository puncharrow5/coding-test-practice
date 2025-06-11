/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const uniqueNumbers = new Set();
    const counts = {};
    const evenDigits = [0, 2, 4, 6, 8];

    for(const digit of digits) {
        counts[digit] = (counts[digit] || 0) + 1;
    }

    for(let i=0; i<10; i++) {
        if(!counts[i] || !i) continue;

        counts[i] --;

        for(let j=0; j<10; j++) {
            if(!counts[j]) continue;

            counts[j] --;

            for (let k=0; k<10; k++) {
                if(!counts[k] || !evenDigits.includes(k)) continue;

                const num = i * 100 + j * 10 + k;
                uniqueNumbers.add(num);
            }

            counts[j]++;
        }

        counts[i]++;
    }

    return uniqueNumbers.size;
};