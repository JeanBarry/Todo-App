const inputIsValid = (input) => {
  return input.length > 0;
};

const inputIsEmail = (input) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(input);
};

const inputHasMinLength = (input, minLength) => {
  return input.length >= minLength;
};

const validators = {
  inputIsValid,
  inputIsEmail,
  inputHasMinLength,
};

export default validators;
