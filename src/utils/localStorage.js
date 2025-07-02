export const getReports = () => {
  const reports = localStorage.getItem("reports");
  return reports ? JSON.parse(reports) : [];
};

export const updateReport = (updatedReport) => {
  const reports = getReports();
  const updated = reports.map((r) =>
    r.id === updatedReport.id ? updatedReport : r
  );
  localStorage.setItem("reports", JSON.stringify(updated));
};

export const deleteReport = (id) => {
  const reports = getReports();
  const filtered = reports.filter((r) => r.id !== id);
  localStorage.setItem("reports", JSON.stringify(filtered));
};