/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let greedIndex = 0;
    let cookieIndex = 0;

    g = new Uint32Array(g).sort();
    s = new Uint32Array(s).sort();

    while (greedIndex < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[greedIndex]) {
            greedIndex ++;
            cookieIndex ++;
        } else {
            cookieIndex ++;
        }
    }

    return greedIndex;
};