# MERIDIAN Portfolio (ЛР10, a11y)

## Стек

- Next.js 14 (Pages Router)
- React
- CSS Modules
- PropTypes

## Доступность (ЛР10, вариант 1)

Исправлены ключевые нарушения WCAG на главной, в форме контактов и карточках проектов:

1. Структура заголовков: `h1` → `h2` (секции) → `h3` (карточка проекта)
2. Метки формы связаны с полями через `htmlFor` / `id`
3. Осмысленные `alt` у изображений проектов
4. Улучшен цветовой контраст (теги, ссылки, placeholder, ошибки) и видимый `:focus-visible`

## Запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

Для аудита: расширение Axe DevTools и/или Lighthouse → Accessibility.
