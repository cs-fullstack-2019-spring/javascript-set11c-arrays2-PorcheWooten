//Create an array with 5 numbers.
// Ask the user for the length of the array you want to print.
// Alert the user of the array from 0 to their input.

var nums = [1, 2, 3, 4, 5];
var  arrayLen =parseInt(prompt("What is the length of the array you want to input?"));
for (var i = 0; i <= arrayLen; i++)
{
   console.log(nums[i]);
   var n1 = nums[i];
   alert(n1);
}