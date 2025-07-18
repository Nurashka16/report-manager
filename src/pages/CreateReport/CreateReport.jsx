import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateReport = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    try {
      const reports = JSON.parse(localStorage.getItem('reports') || '[]');
      const newId = Date.now();

      const newReport = {
        id: newId,
        ...formData
      };

      reports.push(newReport);
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
    </div>
  );
};

export default CreateReport;