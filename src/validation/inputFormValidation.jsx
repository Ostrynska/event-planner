export const validateTitle = value => {
  const startsWithLetter = /^[A-Za-zА-Яа-яЁё]/.test(value);
  if (!startsWithLetter) {
    return 'Invalid input';
  }

  return null;
};

export const validateLocation = value => {
  const words = value.split(' ');

  const startsWithLetter = /^[A-Za-zА-Яа-яЁё]/.test(value);
  if (!startsWithLetter) {
    return 'Invalid input';
  }

  if (words.length > 1) {
    const punctuationPattern = /[\p{P}\p{S}]/u;
    for (let i = 1; i < words.length; i++) {
      if (punctuationPattern.test(words[i])) {
        return 'Invalid input';
      }
    }
  }
  return null;
};
