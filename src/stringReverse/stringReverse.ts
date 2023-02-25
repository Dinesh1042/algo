// ## 1
// Straight Forward
// const stringReverse = (text: string) => {
//   return text.split('').reverse().join('');
// };

// ## 2
// Reversed For Loop
// const stringReverse = (text: string) => {
//   let reversedString = '';

//   for (let i = text.length - 1; i >= 0; i--) reversedString += text[i];

//   return reversedString;
// };

// ## 3
// Array Reduce
const stringReverse = (text: string) => {
  return text.split('').reduce((acc, val) => val + acc, '');
};

export default stringReverse;
