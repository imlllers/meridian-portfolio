# MERIDIAN Portfolio (ЛР9)

## Стек

- Next.js 14 (Pages Router)
- React
- CSS Modules
- PropTypes
- Jest + React Testing Library (unit)
- Playwright (E2E)

## Тесты (вариант 1)

### Unit (Jest)

- `validateEmail` — проверка валидации email
- `ProjectCard` — отображение `title` и `description` из props

```bash
npm test
```

### E2E (Playwright)

Сценарий «Отправка сообщения»: переход к `#contact`, заполнение имени/email/сообщения, клик «Отправить», проверка успеха. Запрос к API ЛР8 (`/api/projects`) перехватывается через `page.route()`.

```bash
npx playwright install chromium
npm run test:e2e
```

## Запуск приложения

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.
