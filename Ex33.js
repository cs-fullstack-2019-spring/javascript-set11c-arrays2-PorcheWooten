//Ask the user to enter a word to add to an array.
// Add the user input into the array.
// If the user enters a 'q', stop asking them to enter a word.




var array = [theirWord];

while (theirWord !== "q")
{
    var theirWord = prompt("Enter a word");
    array.push(theirWord);
    console.log(array);
}







