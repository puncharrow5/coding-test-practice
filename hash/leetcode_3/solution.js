/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    const alphabetSet = new Set();
    let left = 0;
    let peak = 0;

    for (let right = 0; right < s.length; right++) {
        while (alphabetSet.has(s[right])) {
            alphabetSet.delete(s[left]);
            left++;
        }
        
        alphabetSet.add(s[right]);
        
        peak = Math.max(peak, right - left + 1);
    }

    return peak;
};
