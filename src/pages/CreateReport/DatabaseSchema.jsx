// src/pages/CreateReport/DatabaseSchema.jsx
import React from 'react';

const TableSchema = ({ name, fields }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full max-w-sm">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{name}</h3>
        <div className="mt-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Имя
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Тип
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fields.map((field, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{field.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{field.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const RelationshipArrow = () => {
  return (
    <div className="flex items-center mx-4 w-32 self-center">
      <div className="text-gray-500 text-sm mr-2">1</div>
      <div className="relative flex-grow h-0.5 bg-gray-400">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-gray-400 border-b-4 border-b-transparent"></div>
      </div>
      <div className="text-gray-500 text-sm ml-2">∞</div>
    </div>
  );
};

const DatabaseSchema = () => {
  const tripFields = [
    { name: 'id', type: 'INT' },
    { name: 'company', type: 'INT' },
    { name: 'plane', type: 'VARCHAR' },
    { name: 'town_from', type: 'VARCHAR' },
    { name: 'town_to', type: 'VARCHAR' },
    { name: 'time_out', type: 'DATETIME' },
    { name: 'time_in', type: 'DATETIME' },
  ];

  const passInTripFields = [
    { name: 'id', type: 'INT' },
    { name: 'trip', type: 'INT' },
    { name: 'passenger', type: 'INT' },
    { name: 'place', type: 'VARCHAR' },
  ];

  const passengerFields = [
    { name: 'id', type: 'INT' },
    { name: 'name', type: 'VARCHAR' },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mt-14 mb-6">Структура базы данных</h2>
      <div className="flex justify-between items-center">
        <TableSchema name="Trip" fields={tripFields} />
        <RelationshipArrow />
        <TableSchema name="Pass_in_trip" fields={passInTripFields} />
        <RelationshipArrow />
        <TableSchema name="Passenger" fields={passengerFields} />
      </div>
    </div>
  );
};

export default DatabaseSchema;