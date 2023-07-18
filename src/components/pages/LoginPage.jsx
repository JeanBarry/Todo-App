import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import validators from '../../utils/validators';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const validateEmail = (emailInput) => {
    if (!validators.inputIsEmail(emailInput)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const validatePassword = (passwordInput) => {
    if (!validators.inputIsValid(passwordInput)) {
      setPasswordError('The password must not be empty');
      return false;
    }
    return true;
  };

  const login = () => {
    setIsLoggingIn(true);
  };

  const fontSize = '1.2rem';
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <h1 className={styles.form_title}>Sign in</h1>
        <div className={styles.input_group}>
          <p className={styles.input_label}>Email</p>
          <Input
            label="Email"
            type="email"
            onChange={(value) => {
              setEmail(value);
              setEmailError('');
            }}
            width="100%"
            fontSize={fontSize}
            disabled={isLoggingIn}
          />
          <p className={styles.input_error}>{emailError}</p>
        </div>
        <div className={styles.input_group}>
          <p className={styles.input_label}>Password</p>
          <Input
            label="Email"
            type="password"
            onChange={(value) => {
              setPassword(value);
              setPasswordError('');
            }}
            width="100%"
            fontSize={fontSize}
            disabled={isLoggingIn}
          />
          <p className={styles.input_error}>{passwordError}</p>
        </div>
        <div className={`${styles.input_group} ${styles.button_group}`}>
          <Button
            onClick={() => {
              if (validateEmail(email) && validatePassword(password)) {
                login();
              }
            }}
            label="Login"
            width="100%"
            backgroundColor="#000000"
            fontColor="#ffffff"
            fontSize={fontSize}
            stylingType="primary"
            disabled={isLoggingIn}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
