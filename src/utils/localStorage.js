// src/utils/localStorage.js
const REPORTS_KEY = 'reports';

export const getReports = () => {
  const data = localStorage.getItem(REPORTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveReports = (reports) => {
  localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
};

export const deleteReport = (id) => {
  const reports = getReports().filter(r => r.id !== id);
  saveReports(reports);
};

export const updateReport = (updatedReport) => {
  const reports = getReports().map(r =>
    r.id === updatedReport.id ? updatedReport : r
  );
  saveReports(reports);
};