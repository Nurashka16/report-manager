// src/pages/CreateReport/ReportForm.jsx
import React, { useState } from 'react';

const ReportForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reportText, setReportText] = useState('');
  const [author, setAuthor] = useState(''); // новое состояние

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      reportText,
      author,              // добавляем автора
      status: 'На проверке', // статус по умолчанию
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-16 mb-4">
      {/* Название */}
<div className="mb-4">
  <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
    Наименование
  </label>
  <input
    type="text"
    id="title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Введите наименование отчёта"
    className="w-full border rounded p-2"
    required
  />
</div>

      {/* Описание */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Описание
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите описание отчёта"
          className="w-full border rounded p-2"
          rows="3"
          required
        />
      </div>

      {/* Текст отчёта */}
      <div className="mb-4">
        <label htmlFor="reportText" className="block text-gray-700 font-bold mb-2">
          Создание отчёта через описание
        </label>
        <textarea
          id="reportText"
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
          className="w-full border rounded p-2"
          rows="5"
          required
        />
      </div>

      {/* Автор (необязательное поле) */}
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">
          Автор (необязательно)
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Введите имя автора"
          className="w-full border rounded p-2"
        />
      </div>

      {/* Кнопка отправки */}
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded float-right"
      >
        Создать
      </button>
    </form>
  );
};

export default ReportForm;