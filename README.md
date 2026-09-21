# MERIDIAN Portfolio (ЛР2 + ЛР5)

## Стек

- React (Vite)
- CSS Modules
- PropTypes
- Redux Toolkit + react-redux (глобальный state)

## Компоненты

- `Button` — primary / secondary, текст и обработчик через props
- `InputField` — хранит значение в `useState`, сообщает родителю через `onValueChange`
- `ProjectCard` — получает `title`, `description`, `image` (и опционально `tags`) через props
- `ContactForm` — форма заявки; статус отправки меняет через Redux (`useDispatch`)
- `Notification` — показывает сообщение по статусу из store (`useSelector`)

## Store (ЛР5, вариант 1)

- `src/store/feedbackSlice.js` — срез состояния формы: `status` (`idle` | `loading` | `success` | `error`)
- `src/store/index.js` — `configureStore`
- Корневой компонент обёрнут в `<Provider store={store}>` в `src/main.jsx`

Синхронизация: `ContactForm` и `Notification` не общаются напрямую — только через store.

## Интерактивность

1. Введите email в поле формы «Связаться».
2. Нажмите «Написать мне».
3. Статус в store сменится на `loading` → `success` (валидный email) или `error` (невалидный/пустой).
4. `Notification` отобразит соответствующее сообщение.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно `http://localhost:5173`).

## Сборка

```bash
npm run build
npm run preview
```
