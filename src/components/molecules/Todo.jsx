import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';
import { getTimeElapsed, getTimeCompleted } from '../../utils/time';
import Button from '../atoms/Button';

function Todo({
  content,
  done,
  createdAt,
  completedAt,
  backgroundColor,
  fontColor,
  padding,
  buttonBackgroundColor,
  buttonFontColor,
  buttonLabel,
  buttonOnClick,
  buttonDisabled,
  buttonWidth,
  fontSize,
  height,
  width,
}) {
  return (
    <div
      className={`${styles.todo}`}
      style={{
        backgroundColor,
        color: fontColor,
        height,
        width,
        fontSize,
        padding,
      }}
    >
      <p
        className={`${styles.todo__text} ${
          done
            ? styles.todo__content_text_done
            : styles.todo__content_text_pending
        }`}
      >
        {content}
      </p>
      <p className={styles.todo__text}>
        {done
          ? `Time: ${getTimeCompleted(createdAt, completedAt)}`
          : `Time: ${getTimeElapsed(createdAt)}`}
      </p>
      {done ? null : (
        <Button
          backgroundColor={buttonBackgroundColor}
          fontColor={buttonFontColor}
          label={buttonLabel}
          onClick={buttonOnClick}
          fontSize={fontSize}
          stylingType="primary"
          disabled={buttonDisabled}
          width={buttonWidth}
        />
      )}
    </div>
  );
}

Todo.propTypes = {
  content: PropTypes.string.isRequired,
  done: PropTypes.bool,
  createdAt: PropTypes.string.isRequired,
  completedAt: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool,
  buttonWidth: PropTypes.string,
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Todo.defaultProps = {
  done: false,
  completedAt: null,
  backgroundColor: null,
  buttonBackgroundColor: '#7765e3',
  buttonFontColor: '#ffffff',
  buttonDisabled: false,
  buttonWidth: null,
  fontColor: null,
  padding: '1rem',
  fontSize: '16px',
  height: null,
  width: null,
};

export default Todo;
