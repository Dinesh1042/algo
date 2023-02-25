import stringReverse from './stringReverse';

describe('String Reverse', () => {
  test('Abc should Be cbA', () => {
    expect(stringReverse('Abc')).toBe('cbA');
  });
});
