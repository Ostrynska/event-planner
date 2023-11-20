export const validateTitle = value => {
  const startsWithLetter = /^[A-Za-zА-Яа-яЁё]/.test(value);

  const trimmedValue = value.trim();

  if (trimmedValue === '') {
    return 'Title cannot be empty field';
  }
  if (!startsWithLetter) {
    return 'Invalid input';
  }

  return null;
};

export const validateDesctiption = value => {
  const startsWithLetter = /^[A-Za-zА-Яа-яЁё]/.test(value);
  const trimmedValue = value.trim();

  if (trimmedValue === '') {
    return 'Desctiption cannot be empty field';
  }

  if (!startsWithLetter) {
    return 'Invalid input';
  }

  return null;
};

export const validateLocation = value => {
  const words = value.split(' ');
  const trimmedValue = value.trim();

  if (trimmedValue === '') {
    return 'Location cannot be empty field';
  }

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
