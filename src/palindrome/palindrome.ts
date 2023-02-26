// import stringReverse from '../stringReverse/stringReverse';

// Straight forward
// const palindrome = (text: string) => {
//   return text.split('').reverse().join('') === text;
// };

// String Reverse
// const palindrome = (text: string) => {
//   return stringReverse(text) === text;
// };

// Array Reduce
const palindrome = (text: string) => {
  return text.split('').reduce((acc, val) => val + acc, '') === text;
};

export default palindrome;
