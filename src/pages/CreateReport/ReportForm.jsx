import React, { useState } from 'react';
import DatabaseSchema from './DatabaseSchema';

const ReportForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reportInput, setReportInput] = useState(''); // Описание для генерации таблицы
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Заглушка для генерации таблицы
  const generateMockTable = (input) => {
    if (input.toLowerCase().includes("продажи")) {
      return {
        tableName: "sales",
        columns: ["id", "product", "quantity", "price", "date"],
        rows: [
          [1, "Ноутбук", 5, 45000, "2025-01-15"],
          [2, "Смартфон", 10, 20000, "2025-01-20"]
        ]
      };
    }

    if (input.toLowerCase().includes("сотрудники")) {
      return {
        tableName: "employees",
        columns: ["id", "name", "position", "salary", "department"],
        rows: [
          [1, "Иван Петров", "Менеджер", 80000, "Продажи"],
          [2, "Ольга Иванова", "Разработчик", 120000, "IT"]
        ]
      };
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reportInput.trim()) {
      setError('Введите описание для генерации таблицы');
      return;
    }

    setLoading(true);

    try {
      const tableStructure = generateMockTable(reportInput);

      onSubmit({
        title,
        description,
        reportText: reportInput,
        table: tableStructure,
        author,
        status: 'На проверке',
        createdAt: new Date().toISOString()
      });

      setLoading(false);
    } catch (err) {
      setError('Ошибка при создании таблицы');
      setLoading(false);
    }
  };

  return (
   <div> <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-16 mb-4">
      {/* Наименование */}
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
          placeholder="Введите краткое описание отчёта"
          className="w-full border rounded p-2"
          rows="3"
        />
      </div>

      {/* Создание отчёта через описание */}
      <div className="mb-4">
        <label htmlFor="reportInput" className="block text-gray-700 font-bold mb-2">
          Создание отчёта через описание
        </label>
        <textarea
          id="reportInput"
          value={reportInput}
          onChange={(e) => setReportInput(e.target.value)}
          placeholder="Введите краткое описание для генерации таблицы"
          className="w-full border rounded p-2"
          rows="5"
          required
        />
      </div>

      {/* Автор */}
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

      {/* Кнопка создания */}
      <button
        type="submit"
        disabled={loading}
        className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded float-right ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Генерация...' : 'Создать'}
      </button>

      {loading && <p className="mt-4 text-gray-500">Идёт генерация таблицы...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </form><DatabaseSchema/></div>
  );
};

export default ReportForm;