/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const scoreWithIndex = [];
    const scoreLength = score.length;
    const result = new Array(scoreLength);

    for(let i=0; i<scoreLength; i++) {
        scoreWithIndex.push([score[i], i]);
    }

    scoreWithIndex.sort((a, b) => b[0] - a[0]); 

    for (let i=0; i<scoreLength; i++) {
        const index = scoreWithIndex[i][1];
        const rank = i + 1;

        switch(rank) {
            case 1:
                result[index] = "Gold Medal";
                break;
            case 2:
                result[index] = "Silver Medal";
                break;
            case 3:
                result[index] = "Bronze Medal";
                break;
            default:
                result[index] = String(rank);
                break;
        }
    }

    return result;
};