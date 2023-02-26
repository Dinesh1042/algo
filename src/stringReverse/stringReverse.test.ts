import stringReverse from './stringReverse';

describe('String Reverse', () => {
  test('Abc should Be cbA', () => {
    expect(stringReverse('Abc')).toBe('cbA');
  });

  test('Hello World! should Be !dlroW olleH', () => {
    expect(stringReverse('Hello World!')).toBe('!dlroW olleH');
  });

  test('String Reverse should Be esreveR gnirtS', () => {
    expect(stringReverse('String Reverse')).toBe('esreveR gnirtS');
  });
});
