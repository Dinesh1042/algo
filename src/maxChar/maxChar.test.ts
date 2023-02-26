import maxChar from './maxChar';

describe('Max Char', () => {
  test('Hello Max Char Is l', () => {
    expect(maxChar('Hello')).toBe('l');
  });
  test('Javascript is a', () => {
    expect(maxChar('Javascript')).toBe('a');
  });
  test('some other word is o', () => {
    expect(maxChar('some other word')).toBe('o');
  });
});
