/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowGroup = new Set();
    const colGroup = new Set();

    const rowLength = matrix.length;
    const colLength = matrix[0].length;

    for(let i=0; i<rowLength; i++) {
        for(let j=0; j<colLength; j++) {
            if(matrix[i][j] === 0) {
                rowGroup.add(i);
                colGroup.add(j)
            }
        }
    }

    for(const row of rowGroup) {
        for(let i=0; i<colLength; i++) {
            matrix[row][i] = 0;
        }
    }

    for(const col of colGroup) {
        for(let i=0; i<rowLength; i++) {
            matrix[i][col] = 0;
        }
    }
};