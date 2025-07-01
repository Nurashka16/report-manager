// src/components/DatabaseSchemaCard.jsx
import React from "react";

export default function DatabaseSchemaCard({ name, fields }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <table className="min-w-full divide-y divide-gray-200 mt-2">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Имя</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Тип</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {fields.map((field, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-sm">{field.name}</td>
              <td className="px-4 py-2 text-sm">{field.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}