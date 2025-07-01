// src/pages/ViewReports.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReports, deleteReport } from "../utils/localStorage";

const ViewReports = () => {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortByDate, setSortByDate] = useState("desc");

  useEffect(() => {
    const data = getReports();
    setReports(data);
  }, []);

  const filteredReports = reports
    .filter((report) => {
      const matchesSearch = report.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus = !statusFilter || report.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (sortByDate === "asc") return dateA - dateB;
      return dateB - dateA;
    });

  const handleDelete = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот отчёт?")) {
      deleteReport(id);
      setReports(getReports()); // Обновляем список
    }
  };

  const uniqueStatuses = [...new Set(reports.map((r) => r.status))];

  return (
    <div className="container mx-auto p-4 bg-white m-10 pr-10 pl-10 pb-10">
      <h1 className="text-2xl font-bold mt-6 mb-4">Просмотр отчётов</h1>

      {/* Поиск и фильтры */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="w-full md:w-[50%]">
          <input
            type="text"
            placeholder="Поиск по описанию..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">Все статусы</option>
            {uniqueStatuses.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
          <select
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
            className="border rounded p-2"
          >
            <option value="desc">Сначала новые</option>
            <option value="asc">Сначала старые</option>
          </select>
          <Link
            to="/create-report"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Создать отчёт
          </Link>
        </div>
      </div>

      {/* Таблица отчетов */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="border-b p-3 text-left">ID</th>
              <th className="border-b p-3 text-left">Наименование</th>
              <th className="border-b p-3 text-left">Описание</th>
              <th className="border-b p-3 text-left">Автор</th>
              <th className="border-b p-3 text-left">Статус</th>
              <th className="border-b p-3 text-left">Дата создания</th>
              <th className="border-b p-3 text-left">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 border-b">
                    <Link
                      to={`/view-reports/${report.id}`}
                      className="text-indigo-500 hover:text-indigo-700"
                    >
                      {report.id}
                    </Link>
                  </td>
                  <td className="p-3 border-b">{report.name}</td>
                  <td className="p-3 border-b">
                    <div className="line-clamp-2">{report.description}</div>
                  </td>
                  <td className="p-3 border-b">{report.author}</td>
                  <td className="p-3 border-b">{report.status}</td>
                  <td className="p-3 border-b">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 border-b space-y-2">
                    <Link
                      to={`/edit-report/${report.id}`}
                      className="block text-green-500 hover:text-green-700"
                    >
                      Редактировать
                    </Link>
                    <button
                      onClick={() => handleDelete(report.id)}
                      className="text-red-500 hover:text-red-700 w-full text-left"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-8 text-gray-500">
                  Нет подходящих отчётов
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewReports;