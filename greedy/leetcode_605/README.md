# Can Place Flowers (LeetCode 605)

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

### Example 1

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

### Example 2

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

### Constraints:

- ```1 <= g.length <= 3 * 10^4```
- ```0 <= s.length <= 3 * 10^4```
- ```1 <= g[i], s[j] <= 2^31 - 1```

***Note***: This question is the same as ***2410: Maximum Matching of Players With Trainers.***