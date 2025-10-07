- PUG використовується для маршрутів `/users` та `/users/:userId`;
- EJS використовується для маршрутів `/articles` та `/articles/:articleId`.

Запуск ссервера:
1. Склонувати репозиторый або створіть папки і файли згідно структури.

bash
npm install

2. Запусти сервер:

bash
npm start

або

npm run dev

3. Відкрити у браузері:
- `http://localhost:3000/users` — список користувачів (PUG)
- `http://localhost:3000/users/1` — приклад детального перегляду
- `http://localhost:3000/articles` — список статей (EJS)
- `http://localhost:3000/articles/1` — приклад детального перегляду

Залити у гіт:

Приклади команд для ініціалізації репозиторію та заливки:

bash
git init
git add .
git commit -m "Initial commit: express-pug-ejs demo"
git remote add origin git@github.com:<your-username>/express-pug-ejs-project.git
git branch -M main
git push -u origin main