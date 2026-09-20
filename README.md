# MERIDIAN Portfolio (ЛР2)

## Стек

- React (Vite)
- CSS Modules
- PropTypes
- useState / props

## Компоненты

- `Button` — primary / secondary, текст и обработчик через props
- `InputField` — хранит значение в `useState`, сообщает родителю через `onValueChange`
- `ProjectCard` — получает `title`, `description`, `image` (и опционально `tags`) через props

## Интерактивность

1. Введите email в поле ввода.
2. Нажмите кнопку «Смотреть проекты» или «Написать мне».
3. Значение поля будет выведено в консоль браузера (`console.log`).

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
