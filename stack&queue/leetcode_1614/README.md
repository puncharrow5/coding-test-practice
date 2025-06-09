# Maximum Nesting Depth of the Parentheses (LeetCode 1614)

Given a **valid parentheses string** ```s```, return the **nesting depth** of ```s```. The nesting depth is the **maximum** number of nested parentheses.

- ```0 <= i <= s.length - 2```
- ```s[i]``` is a lower-case letter and ```s[i + 1]``` is the same letter but in upper-case or vice-versa.

To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.

### Example 1

Input: s = "(1+(2*3)+((8)/4))+1"<br>
Output: 3<br>
Explanation:<br>
Digit 8 is inside of 3 nested parentheses in the string.

### Example 2

Input: s = "(1)+((2))+(((3)))"<br>
Output: 3<br>
Explanation:<br>
Digit 3 is inside of 3 nested parentheses in the string.

### Example 3

Input: s = "()(())((()()))"<br>
Output: 3

### Constraints:

- ```1 <= s.length <= 100```
- ```s``` consists of digits ```0-9``` and characters ```'+'```, ```'-'```, ```'*'```, ```'/'```, ```'('```, and ```')'```.
- It is guaranteed that parentheses expression ```s``` is a VPS.