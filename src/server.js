// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'report_db',
});

// Создание отчета
app.post('/api/reports', async (req, res) => {
  const { description } = req.body;
  const [result] = await pool.query(
    'INSERT INTO reports (description, author, status, created_at) VALUES (?, ?, ?, NOW())',
    [description, 'User', 'Created']
  );
  res.json({ id: result.insertId, ...req.body });
});

// Получение списка отчетов
app.get('/api/reports', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM reports');
  res.json(rows);
});

// Получение отчета по ID
app.get('/api/reports/:id', async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query('SELECT * FROM reports WHERE id = ?', [id]);
  res.json(rows[0]);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// server.js
app.post('/api/reports', async (req, res) => {
  const { title, description, reportText } = req.body;
  // Сохранение данных в базу данных
  try {
    const result = await pool.query(
      'INSERT INTO reports (title, description, report_text) VALUES (?, ?, ?)',
      [title, description, reportText]
    );
    res.json({ id: result.insertId, ...req.body });
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: 'Не удалось создать отчёт' });
  }
});