import React, { useState } from 'react'; // ✅ Импортируем useState
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ViewReports from './pages/ViewReports';
import CreateReport from './pages/CreateReport/CreateReport';
import EditReport from './pages/EditReport';
import ViewSingleReport from './pages/ViewSingleReport';

function AppContent() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white p-4 shadow">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/view-reports"
              onClick={() => setActiveRoute("/view-reports")}
              className={activeRoute === "/view-reports" ? "text-gray-800 font-bold bg-gray-200 px-2 py-1 rounded" : "text-blue-500 hover:text-blue-700"}
            >
              Просмотр отчётов
            </Link>
          </li>
          <li>
            <Link
              to="/create-report"
              onClick={() => setActiveRoute("/create-report")}
              className={activeRoute === "/create-report" ? "text-gray-800 font-bold bg-gray-200 px-2 py-1 rounded" : "text-blue-500 hover:text-blue-700"}
            >
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
          <Route path="/edit-report/:id" element={<EditReport />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;