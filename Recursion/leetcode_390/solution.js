/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  if(n === 1) {
    return 1
  }  

  function solve(remain, head, step, isLeftToRight) {
    if (remain === 1) {
        return head;
    }

    if (isLeftToRight || remain % 2 === 1) {
        head += step;
    }

    return solve(Math.floor(remain / 2), head, step * 2, !isLeftToRight)
  }

  return solve(n, 1, 1, true);
};