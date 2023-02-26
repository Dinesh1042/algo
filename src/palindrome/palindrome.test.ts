import palindrome from './palindrome';

describe('Palindrome', () => {
  test('madam is a Palindrome', () => {
    expect(palindrome('madam')).toBe(true);
  });
  test('racecar is a Palindrome', () => {
    expect(palindrome('racecar')).toBe(true);
  });
  test('hello is not a Palindrome', () => {
    expect(palindrome('hello')).toBe(false);
  });
});
