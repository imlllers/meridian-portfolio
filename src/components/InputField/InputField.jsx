import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function InputField({
  label = 'Email',
  placeholder = 'you@studio.com',
  type = 'email',
  onValueChange,
}) {
  const [value, setValue] = useState('');
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
    if (value && type === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setIsError(!isValid);
    }
  };

  return (
    <Form.Group className="mb-3" controlId={`input-${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        placeholder={placeholder}
        isInvalid={isError}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Form.Control.Feedback type="invalid">
        Введите корректный email
      </Form.Control.Feedback>
    </Form.Group>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onValueChange: PropTypes.func,
};

export default InputField;
