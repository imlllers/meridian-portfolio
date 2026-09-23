import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import { validateEmail } from '../../lib/validateEmail';
import styles from './InputField.module.css';

function InputField({
  label = 'Email',
  placeholder = 'you@studio.com',
  type = 'email',
  onValueChange,
}) {
  const generatedId = useId();
  const inputId = `field-${generatedId}`;
  const errorId = `error-${generatedId}`;
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
      setIsError(!validateEmail(value));
    }
  };

  let fieldClass = styles.field;
  if (isError) {
    fieldClass = `${styles.field} ${styles.error}`;
  } else if (isFocused) {
    fieldClass = `${styles.field} ${styles.focused}`;
  }

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={fieldClass}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={isError}
        aria-describedby={isError ? errorId : undefined}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      {isError ? (
        <span id={errorId} className={styles.errorText} role="alert">
          Введите корректный email
        </span>
      ) : null}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onValueChange: PropTypes.func,
};

export default InputField;
