Это приложение - инструмент для получения данных из базы данных через API и выдаче ее в произвольное количество google-таблиц.
Сервис получает доступ к API через авторизацию ранее созданного пользователя, при желании он может быть заменен в файле get-token.ts

Для использования сервиса необходимо выполнить следующие шаги:

- сохранить в корень проекта файл 'credentials.json'
- создать новые таблицы, дать им доступ и дать названия листам
- создать в корне файл .env по аналогии с .env.example с массивом айди листов и названием листов
- запустить локально командой npm run start (node 20.18) или из докер файла 



