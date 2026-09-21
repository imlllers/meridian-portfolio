import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

function InputField({
  label = 'Email',
  placeholder = 'you@studio.com',
  type = 'email',
  onValueChange,
}) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    setIsError(false);
    if (onValueChange) {
      onValueChange(nextValue);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (value && type === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setIsError(!isValid);
    }
  };

  let fieldClass = styles.field;
  if (isError) {
    fieldClass = `${styles.field} ${styles.error}`;
  } else if (isFocused) {
    fieldClass = `${styles.field} ${styles.focused}`;
  }

  return (
    <label className={styles.root}>
      <span className={styles.label}>{label}</span>
      <input
        className={fieldClass}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      {isError ? (
        <span className={styles.errorText}>Введите корректный email</span>
      ) : null}
    </label>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onValueChange: PropTypes.func,
};

export default InputField;
