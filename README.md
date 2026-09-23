# MERIDIAN Portfolio (ЛР11, security)

## Full-stack

- Фронт: этот репозиторий (`lab11/security`)
- API: `meridian-portfolio-api` (`lab11/security`) на порту `5001`

## XSS-демо (вариант 1)

Поле «Сообщение» сохраняется в API и выводится в блоке «Последние сообщения» через `dangerouslySetInnerHTML`.

1. **До защиты** (в API `.env`: `SANITIZE_INPUT=false`, перезапуск API):  
   в сообщение вставьте `<img src=x onerror=alert('XSS PoC')>` → alert сработает.
2. **После защиты** (`SANITIZE_INPUT=true`): тот же payload → скрипт не выполняется, опасные теги удалены.

## Запуск

Терминал 1 (API):

```bash
cd ../meridian-portfolio-api
npm run dev
```

Терминал 2 (фронт):

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`, форма контактов внизу страницы.

Заголовки Helmet/CSP смотрите в DevTools → Network → запрос к `http://localhost:5001/api/projects` → Response Headers.
