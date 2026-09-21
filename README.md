# MERIDIAN Portfolio (ЛР7, Next.js)

## Стек

- Next.js 14 (Pages Router)
- React
- CSS Modules
- PropTypes

## Страницы (вариант 1)

- `/` — SSR через `getServerSideProps`: статус `Open to work` и текущее время сервера
- `/about` — SSG через `getStaticProps`: текст «Обо мне» и время сборки

Навигация между страницами — через `next/link`.

## Запуск (разработка)

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Сборка и production

```bash
npm run build
npm run start
```

Проверка SSR/SSG: в браузере «Просмотр кода страницы» (View Page Source) — HTML с контентом приходит с сервера.
