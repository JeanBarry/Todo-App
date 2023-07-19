import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({
  placeholder,
  type,
  onChange,
  onKeyDown,
  height,
  width,
  fontSize,
  border,
  disabled,
}) {
  return (
    <input
      type={type}
      className={`
        ${styles.input}
        ${border ? styles.border : ''}
        ${disabled ? styles.disabled : ''}
      `}
      style={{
        height,
        width,
        fontSize,
      }}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      onKeyDown={(event) => {
        onKeyDown(event);
      }}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: null,
  onKeyDown: () => {},
  height: null,
  border: false,
  disabled: false,
  type: 'text',
};

export default Input;
