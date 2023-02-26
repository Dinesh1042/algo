import integerReverse from './integerReverse';

describe('Integer Reverse', () => {
  test('512 should Be 215', () => {
    expect(integerReverse(512)).toBe(215);
  });
  test('-512 should Be -215', () => {
    expect(integerReverse(-512)).toBe(-215);
  });
  test('6789 should Be 9876', () => {
    expect(integerReverse(6789)).toBe(9876);
  });
});
