// ## 1
// Straight Forward
// const integerReverse = (num: number) => {
//   return (
//     +num.toString().replace('-', '').split('').reverse().join('') *
//     Math.sign(num)
//   );
// };

// ## 2
// Reversed For Loop
// const integerReverse = (num: number) => {
//   let reversedInt = '';
//   const stringNum = num.toString().replace('-', '');

//   for (let i = stringNum.length - 1; i >= 0; i--) reversedInt += stringNum[i];

//   return +reversedInt * Math.sign(num);
// };

// ## 3
// Array Reduce
const integerReverse = (num: number) => {
  return (
    +num
      .toString()
      .replace('-', '')
      .split('')
      .reduce((acc, val) => val + acc, '') * Math.sign(num)
  );
};

export default integerReverse;
