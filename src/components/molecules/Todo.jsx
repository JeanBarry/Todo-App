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
  buttonBackgroundColor,
  buttonFontColor,
  buttonLabel,
  buttonOnClick,
  buttonDisabled,
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
          ? `Completed in: ${getTimeCompleted(createdAt, completedAt)}`
          : `Elapsed: ${getTimeElapsed(createdAt)}`}
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
  fontColor: PropTypes.string,
  fontSize: PropTypes.string,
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
  fontColor: null,
  fontSize: '16px',
  height: null,
  width: null,
};

export default Todo;
