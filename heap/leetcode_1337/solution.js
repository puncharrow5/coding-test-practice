/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const rows = [];

    const countSoldiers = (row) => {
        let low = 0, high = row.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (row[mid] === 1) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    };

    for (let i = 0; i < mat.length; i++) {
        const count = countSoldiers(mat[i]);
        rows.push([count, i]);
    }

    rows.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    return rows.slice(0, k).map(pair => pair[1]);
};