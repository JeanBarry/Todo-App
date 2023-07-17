const inputIsValid = (input) => {
  return input.length > 0;
};

const inputIsEmail = (input) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(input);
};

const validators = {
  inputIsValid,
  inputIsEmail,
};

export default validators;
