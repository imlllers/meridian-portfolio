import { useEffect, useState } from 'react';
import Button from './Button/Button';
import InputField from './InputField/InputField';
import inputStyles from './InputField/InputField.module.css';
import { validateEmail } from '../lib/validateEmail';
import styles from '../styles/Home.module.css';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/projects';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      const contactMessages = data.filter((item) =>
        String(item.title || '').startsWith('Сообщение от'),
      );
      setMessages(contactMessages.slice(0, 5));
    } catch (err) {
      // API может быть выключен — форма всё равно работает локально по ошибке submit
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

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
      setMessage('');
      await loadMessages();
    } catch (err) {
      setStatus('idle');
      setError('Не удалось отправить сообщение');
    }
  };

  const messageFieldClass = isMessageFocused
    ? `${inputStyles.field} ${inputStyles.textarea} ${inputStyles.focused}`
    : `${inputStyles.field} ${inputStyles.textarea}`;

  return (
    <section
      className={styles.panel}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className={styles.panelTitle}>
        Контакты
      </h2>

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

      <div className={inputStyles.root}>
        <label className={inputStyles.label} htmlFor="contact-message">
          Сообщение
        </label>
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
      </div>

      <div className={styles.actions}>
        <Button variant="primary" onClick={handleSubmit}>
          Отправить
        </Button>
      </div>

      {error ? (
        <p className={styles.panelText} role="alert">
          {error}
        </p>
      ) : null}
      {status === 'success' ? (
        <p role="status" className={styles.success} aria-live="polite">
          Сообщение успешно отправлено
        </p>
      ) : null}

      {messages.length > 0 ? (
        <div className={styles.messagesBlock}>
          <h3 className={styles.messagesTitle}>Последние сообщения</h3>
          <ul className={styles.messagesList}>
            {messages.map((item) => (
              <li key={item._id} className={styles.messageItem}>
                <strong>{item.title}</strong>
                <div
                  className={styles.messageBody}
                  dangerouslySetInnerHTML={{ __html: item.description || '' }}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default ContactForm;
