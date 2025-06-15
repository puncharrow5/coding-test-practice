/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSet = Array.from({length: 9}, () => new Set())
    const colSet = Array.from({length: 9}, () => new Set())
    const boxSet = Array.from({length: 9}, () => new Set())

    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            const cell = board[i][j];

            if (cell === '.') {
                continue;
            }

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if(rowSet[i].has(cell)) {
                return false;
            } else {
                rowSet[i].add(cell)
            }

            if(colSet[j].has(cell)) {
                return false;
            } else {
                colSet[j].add(cell);
            }

            if(boxSet[boxIndex].has(cell)) {
                return false;
            } else {
                boxSet[boxIndex].add(cell);
            }
        }
    }

    return true;
};