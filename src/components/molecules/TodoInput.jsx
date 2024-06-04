import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoInput.module.css';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import validators from '../../utils/validators';

function TodoInput({
  backgroundColor,
  height,
  width,
  fontSize,
  inputWidth,
  inputPlaceholder,
  onButtonClick,
  buttonLabel,
  buttonWidth,
  border,
}) {
  const [inputValue, setInputValue] = useState('');

  const disableButton = inputValue === '';

  const submitTodo = () => {
    if (!validators.inputIsValid(inputValue)) {
      return;
    }
    onButtonClick(inputValue);
  };

  return (
    <div
      className={`${styles.todoInput}`}
      style={{
        backgroundColor,
        height,
        width,
        border: border ? '1px solid #000000' : null,
      }}
    >
      <Input
        onChange={setInputValue}
        placeholder={inputPlaceholder}
        fontSize={fontSize}
        width={inputWidth}
        value={inputValue}
      />
      <Button
        backgroundColor="#7765e3"
        fontColor="#ffffff"
        label={buttonLabel}
        onClick={(value) => {
          submitTodo(value);
          setInputValue('');
        }}
        fontSize={fontSize}
        disabled={disableButton}
        width={buttonWidth}
      />
    </div>
  );
}

TodoInput.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputWidth: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  buttonWidth: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  border: PropTypes.bool,
};

TodoInput.defaultProps = {
  backgroundColor: null,
  height: null,
  width: null,
  buttonWidth: null,
  inputPlaceholder: null,
  border: false,
  fontSize: '16px',
};

export default TodoInput;
