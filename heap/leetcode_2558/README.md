# Take Gifts From the Richest Pile (LeetCode 2558)

You are given an integer array ```gifts``` denoting the number of gifts in various piles. Every second, you do the following:

- Choose the pile with the maximum number of gifts.
- If there is more than one pile with the maximum number of gifts, choose any.
- Reduce the number of gifts in the pile to the floor of the square root of the original number of gifts in the pile.

Return the number of gifts remaining after ```k``` seconds.

### Example 1

Input: gifts = [25,64,9,4,100], k = 4<br>
Output: 29<br>
Explanation: <br>
The gifts are taken in the following way:<br>
- In the first second, the last pile is chosen and 10 gifts are left behind.<br>
- Then the second pile is chosen and 8 gifts are left behind.<br>
- After that the first pile is chosen and 5 gifts are left behind.<br>
- Finally, the last pile is chosen again and 3 gifts are left behind.<br>
The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.

### Example 2

Input: gifts = [1,1,1,1], k = 4<br>
Output: 4<br>
Explanation: <br>
In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile. <br>
That is, you can't take any pile with you. <br>
So, the total gifts remaining are 4.

### Constraints:

- ```1 <= gifts.length <= 10^3```
- ```1 <= gifts[i] <= 10^9```
- ```1 <= k <= 10^3```