import React from 'react';
import { useParams } from 'react-router-dom';

const ViewSingleReport = () => {
  const { id } = useParams();

  // Получаем данные из localStorage
  const reportsData = JSON.parse(localStorage.getItem('reports') || '[]');
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return <div className="p-4 text-red-500">Некорректный идентификатор отчета</div>;
  }

  const report = reportsData.find(report => report.id === parsedId);

  if (!report) {
    return <div className="p-4 text-red-500">Отчёт не найден</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Просмотр отчёта</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">{report.title || 'Без названия'}</h2>

      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">Описание</h3>
        <p className="text-gray-600">{report.description || 'Описание отсутствует'}</p>
      </div>

      <div className="mb-8 bg-gray-100 p-4 rounded-md">
        <h3 className="text-xl font-medium text-gray-700 mb-3">SQL</h3>
        <div className="bg-white p-3 rounded border border-gray-300 font-mono text-gray-800">
          <p>SELECT plane</p>
          <p>FROM Trip</p>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 my-6" />

      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-gray-700"><strong>Статус:</strong> <span className="text-green-600">{report.status || 'Неизвестен'}</span></p>
          <p className="text-gray-700"><strong>Дата создания:</strong> {new Date(report.createdAt).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-gray-700"><strong>Автор:</strong> {report.author || '-'}</p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200">
          Скачать отчёт
        </button>
      </div>
    </div>
  );
};

export default ViewSingleReport;