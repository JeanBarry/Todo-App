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
      <p className={styles.todo__text}>{content}</p>
      <div className={styles.todo__subcontainer}>
        <p className={styles.todo__text}>
          {done
            ? getTimeCompleted(createdAt, completedAt)
            : getTimeElapsed(createdAt)}
        </p>
        {done ? (
          <Button
            backgroundColor="#bf4437"
            fontColor="#FFFFFF"
            label={buttonLabel}
            fontSize={fontSize}
            stylingType="secondary"
            onClick={buttonOnClick}
          />
        ) : (
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
