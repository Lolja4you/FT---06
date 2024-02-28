const { default: axios } = require('axios');
const express = require('express');
const app = express();
const port = 3000;

// Разрешаем CORS для всех запросов
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Сервер будет служить файлы из текущей директории
app.use(express.static(__dirname));


function where_is_start(port){
    try {
        fetch(`http://localhost:${port}/main.html/`)
        return `http://localhost:${port}/main.html#/`
    }
    catch (error){
        console.error(error)
    }
}

// Запуск сервера
app.listen(port, () => {
    console.log(`The server is running at ${where_is_start(port)}`);
    console.log('Press CTRL+C to stop the server.');
});

