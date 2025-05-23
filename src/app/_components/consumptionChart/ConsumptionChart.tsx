import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import InvoiceService from "@/app/_services/Invoice/InvoiceService";
import {
  useAuth,
  useToggleAuth,
} from "@/app/_components/context/AuthenticationContext";
import { useRouter } from "next/navigation";
import styles from "./consumptionChart.module.css"; // Import the CSS module

type ConsumptionChartProps = {
  selectedYear: number;
};

function ConsumptionChart({ selectedYear }: ConsumptionChartProps) {
  const [chartData, setChartData] = useState<{ month: string; kw: number }[]>(
    []
  );
  const { isLoggedIn, accessToken } = useAuth();
  const { toggleIsLoggedIn, setAccessToken } = useToggleAuth();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !isLoggedIn) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchChartData = async () => {
      try {
        const response = await InvoiceService.getMonthlyQuantities(
          accessToken,
          selectedYear
        );

        const formatted = response.data.data.map((item: any) => ({
          month: item.billing_month_name,
          kw: parseFloat(item.billed_quantity),
        }));

        setChartData(formatted);
      } catch (error: any) {
        console.error("Error fetching chart data:", error);
        if (error.response?.status === 401) {
          router.push("/middleware");
        }
      }
    };

    fetchChartData();
  }, [accessToken, selectedYear]);

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.title}>Consumul kW pe Luni - {selectedYear}</h2>
      <ResponsiveContainer
        className={styles.chartWrapper}
        width="100%"
        height="90%"
      >
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: "#555", fontSize: 12 }} />
          <YAxis
            label={{ value: "kW", angle: -90, position: "insideLeft" }}
            tick={{ fill: "#555", fontSize: 12 }}
          />
          <Tooltip />
          <Line className={styles.lineChartLine} type="monotone" dataKey="kw" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ConsumptionChart;
