function solution(S) {
    // Split the string into words
    const words = S.split(' ');
    
    let maxLength = -1;
    
    // Check each word
    for (const word of words) {
      if (isValidPassword(word)) {
        maxLength = Math.max(maxLength, word.length);
      }
    }
    
    return maxLength;
  }
  
  function isValidPassword(word) {
    // Check if the word contains only alphanumeric characters
    if (!/^[a-zA-Z0-9]+$/.test(word)) {
      return false;
    }
    
    // Count letters and digits
    let letterCount = 0;
    let digitCount = 0;
    
    for (const char of word) {
      if (/[a-zA-Z]/.test(char)) {
        letterCount++;
      } else if (/[0-9]/.test(char)) {
        digitCount++;
      }
    }
    
    // Check if letters count is even and digits count is odd
    return letterCount % 2 === 0 && digitCount % 2 === 1;
  }
  
  // Test with the example
  console.log(solution("test 5 a0A pass007 ?xy1")); // Should return 7

    // Additional test cases
  console.log("Test 1 result:", solution("test 5 a0A pass007 ?xy1")); // Should return 7
  console.log("Test 2 result:", solution("no valid passwords here!")); // Should return -1
  console.log("Test 3 result:", solution("aa1 bbb2")); // Should return 3 (aa1)
  console.log("Test 4 result:", solution("a1b2c3")); // Should return -1 (odd letters)
  console.log("Test 5 result:", solution("abcd123 xy12")); // Should return 7 (abcd123)