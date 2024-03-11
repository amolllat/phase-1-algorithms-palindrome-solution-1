function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }

  }

/* 
  Add your pseudocode here

  1. Split the input word into an array of characters
  2. Reverse the array of characters
  3. Join the reversed array back into a string
  4. Compare the original word with the reversed word
  5. If they are equal, return true; otherwise, return false
*/

/*
  Add written explanation of your solution here

  This implementation first splits the input word into an array of characters, then reverses the array, and finally joins the reversed array back into a string. After that, it compares the original word with the reversed word. If they are equal, it returns true, indicating that the input word is a palindrome; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
}

module.exports = isPalindrome;
