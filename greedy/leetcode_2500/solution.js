/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let result = 0;

    const m = grid.length;
    const n = grid[0].length;

    for(let i=0; i<m; i++) {
        grid[i].sort((a, b) => b - a);
    }

    for (let j=0; j<n; j++) {
        let maxValue = 0;

        for (let i=0; i<m; i++) {
            maxValue = Math.max(maxValue, grid[i][j])
        }

        result += maxValue
    }

    return result;
};