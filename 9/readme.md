# 9. Palindrome Number
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?

===

Solution:

- [x] solve using converting to string
- [x] solve without converting to string


## even
123321
len=6
half=3


s[0] === s[len-1]
s[1] === s[len-2]
s[2] === s[len-3]
s[i] === s[len-(i+1)]

for (from 0 to 2) {
}


## odd;

12321
len=5
half=2.5 (round towards zero)

s[0] === s[len-1]
s[1] === s[len-2]






