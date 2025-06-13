/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = (digits) => {
  if (digits == null || digits.length === 0) return [];

  const map = ['','','abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ]
  const result = [];

  const backtrack = (index, value) => {
    if (index === digits.length) {
      result.push(value);
      return;
    }

    for (const char of map[digits[index]]) {
      backtrack(index + 1, value + char);
    }
  };

  backtrack(0, '');

  return result;
};