import React from 'react';

const DatabaseSchema = ({ table }) => {
  if (!table) return null;

  return (
    <div className="mt-8 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Таблица: `{table.tableName}`</h2>
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            {table.columns.map((col, index) => (
              <th key={index} className="border px-4 py-2 bg-gray-100">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseSchema;