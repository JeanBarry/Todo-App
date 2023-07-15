import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  label,
  onClick,
  backgroundColor,
  fontColor,
  height,
  width,
  fontSize,
  stylingType,
  disabled,
}) {
  return (
    <button
      type="button"
      className={`
        ${styles.button} 
        ${stylingType === 'primary' && !disabled ? styles.primary : ''} 
        ${stylingType === 'secondary' && !disabled ? styles.secondary : ''}
        ${disabled ? styles.disabled : ''}
      `}
      style={{
        backgroundColor: !disabled && backgroundColor ? backgroundColor : '',
        color: fontColor,
        height,
        width,
        fontSize,
        cursor: disabled ? 'default' : 'pointer',
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string.isRequired,
  stylingType: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  fontColor: null,
  stylingType: 'primary',
  width: null,
  height: null,
  disabled: false,
};

export default Button;
