// src/pages/EditReport.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getReports, updateReport } from "../utils/localStorage";

const EditReport = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    author: "",
    status: "",
    createdAt: "",
  });

  useEffect(() => {
    const reports = getReports();
    const currentReport = reports.find((r) => r.id === parseInt(id));
    if (currentReport) {
      setFormData(currentReport);
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateReport(formData);
    navigate("/view-reports");
  };

  return (
    <div className="container mx-auto p-4 bg-white m-10 pr-10 pl-10 pb-10">
      <h1 className="text-2xl font-bold mb-4">Редактировать отчёт</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Наименование:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Описание:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Автор:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Статус:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Выберите статус</option>
            <option value="Черновик">Черновик</option>
            <option value="На проверке">На проверке</option>
            <option value="Одобрен">Одобрен</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Дата создания:</label>
          <input
            type="date"
            name="createdAt"
            value={formData.createdAt.split("T")[0]}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Сохранить изменения
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReport;