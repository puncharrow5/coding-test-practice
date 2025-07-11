# Power of Three (LeetCode 326)

Given an integer ```n```, return ```true``` if it is a power of three. Otherwise, return ```false```.

An integer ```n``` is a power of three, if there exists an integer ```x``` such that ```n == 3^x```.

### Example 1

Input: n = 27<br>
Output: true<br>
Explanation: 27 = 3^3

### Example 2

Input: n = 0<br>
Output: false<br>
Explanation: There is no x where 3^x = 0.

### Example 3

Input: n = -1<br>
Output: false<br>
Explanation: There is no x where 3^x = (-1).

### Constraints:

- ```-2^31 <= n <= 2^31 - 1```

***Follow up***: Could you solve it without loops/recursion?