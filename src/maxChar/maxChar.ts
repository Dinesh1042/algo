const maxChar = (text: string) => {
  const charCountMap = text.split('').reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {} as { [char: string]: number });

  return Object.entries(charCountMap).reduce((acc, val) => {
    if (!acc || val[1] > charCountMap[acc]) acc = val[0];
    return acc;
  }, '');
};

export default maxChar;
