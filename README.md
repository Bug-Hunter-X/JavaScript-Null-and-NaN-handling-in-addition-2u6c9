# JavaScript Null and NaN handling in addition

This repository demonstrates a common error in JavaScript when handling null values and potential NaN results in addition. The `bug.js` file contains the buggy code, while `bugSolution.js` offers a corrected version.

The original code handles null values correctly, returning 0 when either input is null. However, it does not explicitly address the possibility of adding a number to a non-number (such as undefined), which can result in NaN (Not a Number). 

The solution improves the code to handle undefined and non-numeric values, ensuring robust behavior.