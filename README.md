# MERIDIAN Portfolio (ЛР6)

## Стек

- React (Vite)
- React Bootstrap + Bootstrap 5
- PropTypes
- useState / props

## Что сделано (ЛР6, вариант 1)

- Кастомные `Button`, `InputField`, `ProjectCard` заменены на аналоги React Bootstrap (`Button`, `Form.Control`, `Card`)
- Макет списка проектов построен на `Container` / `Row` / `Col`
- Адаптивная сетка карточек: 3 колонки на десктопе (`lg`), 2 на планшете (`md`), 1 на мобильном (`xs`)
- Стили в основном через утилиты Bootstrap, без смешивания с Material UI

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
