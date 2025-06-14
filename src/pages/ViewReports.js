// src/pages/ViewReports.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import reportsData from "../asserts/data.json";

const ViewReports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = reportsData.filter((report) =>
    report.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-white m-10 pr-10 pl-10 pb-10">
      <h1 className="text-2xl font-bold mt-6 mb-4">Просмотр отчётов</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="w-[70%] mr-4">
          <input
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex space-x-2">
          <button className="bg-purple-500 text-white px-4 py-2 rounded mr-4">
            Фильтры
          </button>
          <Link
            to="/create-report"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Создать отчёт
          </Link>
        </div>
      </div>

      <table className="w-full border-collapse mt-10 bg-white">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-50 border-b border-gray">ID</th>
            <th className="border p-2 bg-gray-50 border-b border-gray">
              Наименование
            </th>
            <th className="border p-2 bg-gray-50 border-b border-gray">
              Описание
            </th>
            <th className="border p-2 bg-gray-50 border-b border-gray">
              Автор
            </th>
            <th className="border p-2 bg-gray-50 border-b border-gray">
              Статус
            </th>
            <th className="border p-2 bg-gray-50 border-b border-gray">
              Дата создания
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report) => (
            <tr key={report.id}>
              <td className="border p-2">
                <Link
                  to={`/view-reports/${report.id}`}
                  className="text-indigo-500 hover:text-indigo-700"
                >
                  {report.id}
                </Link>
              </td>
              <td className="border p-2">{report.name}</td>
              <td className="border p-2">
                <div className=" overflow-hidden text-ellipsis line-clamp-3">
                  {report.description}
                </div>
              </td>
              <td className="border p-2">{report.author}</td>
              <td className="border p-2">{report.status}</td>
              <td className="border p-2">{report.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReports;