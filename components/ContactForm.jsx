import { useState } from 'react';
import Button from './Button/Button';
import InputField from './InputField/InputField';
import inputStyles from './InputField/InputField.module.css';
import { validateEmail } from '../lib/validateEmail';
import styles from '../styles/Home.module.css';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/projects';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');

    if (!name.trim() || !message.trim()) {
      setError('Заполните все поля');
      return;
    }

    if (!validateEmail(email)) {
      setError('Введите корректный email');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Сообщение от ${name.trim()}`,
          description: message.trim(),
          imageUrl: '',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
    } catch (err) {
      setStatus('idle');
      setError('Не удалось отправить сообщение');
    }
  };

  const messageFieldClass = isMessageFocused
    ? `${inputStyles.field} ${inputStyles.textarea} ${inputStyles.focused}`
    : `${inputStyles.field} ${inputStyles.textarea}`;

  return (
    <div className={styles.panel} id="contact">
      <h2 className={styles.panelTitle}>Контакты</h2>

      <InputField
        label="Имя"
        placeholder="Ваше имя"
        type="text"
        onValueChange={setName}
      />
      <InputField
        label="Email"
        placeholder="you@studio.com"
        type="email"
        onValueChange={setEmail}
      />

      <label className={inputStyles.root} htmlFor="contact-message">
        <span className={inputStyles.label}>Сообщение</span>
        <textarea
          id="contact-message"
          className={messageFieldClass}
          placeholder="Текст сообщения"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onFocus={() => setIsMessageFocused(true)}
          onBlur={() => setIsMessageFocused(false)}
        />
      </label>

      <div className={styles.actions}>
        <Button variant="primary" onClick={handleSubmit}>
          Отправить
        </Button>
      </div>

      {error ? <p className={styles.panelText}>{error}</p> : null}
      {status === 'success' ? (
        <p role="status" className={styles.success}>
          Сообщение успешно отправлено
        </p>
      ) : null}
    </div>
  );
}

export default ContactForm;
