// src/pages/CreateReport/CreateReport.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReportForm from './ReportForm';
import DatabaseSchema from './DatabaseSchema';

const CreateReport = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const reports = JSON.parse(localStorage.getItem('reports') || '[]');
      reports.push(formData);
      localStorage.setItem('reports', JSON.stringify(reports));
      alert('Отчёт успешно создан');
      navigate('/view-reports');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      alert('Ошибка при создании отчёта');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Создание отчёта</h1>
      <ReportForm onSubmit={handleSubmit} />
      <DatabaseSchema />
    </div>
  );
};

export default CreateReport;