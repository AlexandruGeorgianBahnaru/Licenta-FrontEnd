import React, { useState } from "react";
import ConsumptionChart from "@/app/_components/consumptionChart/ConsumptionChart";
import styles from "./statisticsInvoices.module.css"; // Import the CSS module

const StatisticsInvoices = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Statistici FACTURI</h1>

      <div className={styles.yearSelectContainer}>
        <label htmlFor="year-select" className={styles.yearSelectLabel}>
          Selectează anul:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className={styles.yearSelect}
        >
          {[2025, 2024, 2023].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.chartContainer}>
        <ConsumptionChart selectedYear={selectedYear} />
      </div>
    </div>
  );
};

export default StatisticsInvoices;
