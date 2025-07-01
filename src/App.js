// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ViewReports from "./pages/ViewReports";
import CreateReport from "./pages/CreateReport/CreateReport";
import EditReport from "./pages/EditReport"; // новая страница
import ViewSingleReport from "./pages/ViewSingleReport";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white p-4 shadow">
          <ul className="flex space-x-4">
            <li>
              <Link to="/view-reports" className="text-blue-500 hover:text-blue-700">
                Просмотр отчётов
              </Link>
            </li>
            <li>
              <Link to="/create-report" className="text-blue-500 hover:text-blue-700">
                Создать отчёт
              </Link>
            </li>
          </ul>
        </nav>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ViewReports />} />
            <Route path="/view-reports" element={<ViewReports />} />
            <Route path="/view-reports/:id" element={<ViewSingleReport />} />
            <Route path="/create-report" element={<CreateReport />} />
            <Route path="/edit-report/:id" element={<EditReport />} /> {/* маршрут для редактирования */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;