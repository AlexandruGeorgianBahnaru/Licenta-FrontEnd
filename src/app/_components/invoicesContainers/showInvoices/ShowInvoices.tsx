import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TableInvoices from "@/app/_components/tableInvoices/TableInvoices";
import InvoiceService from "@/app/_services/Invoice/InvoiceService";
import {
  useAuth,
  useToggleAuth,
} from "@/app/_components/context/AuthenticationContext";
import styles from "./showInvoices.module.css";

const ContainerInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [sortedBy, setSortedBy] = useState("invoice_name");
  const [userUid, setUserUid] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { isLoggedIn, accessToken } = useAuth();
  const { toggleIsLoggedIn, setAccessToken } = useToggleAuth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }
  }, []);

  useEffect(() => {
    if (!accessToken) return;

    const fetchInvoices = async () => {
      try {
        const offset = (page - 1) * limit;
        console.log(sortedBy);
        const response = await InvoiceService.getInvoicesByUserPaginated(
          accessToken,
          limit,
          offset,
          sortedBy
        );
        console.log(response.data);
        setInvoices(response.data.invoices);
        setTotal(response.data.pagination.total);
      } catch (error: any) {
        console.error("Error fetching invoices:", error);
        if (error.response?.status === 401) {
          router.push("/middleware");
        }
      }
    };

    fetchInvoices();
  }, [userUid, page, limit, sortedBy]);

  return (
    <div className="container-main-column">
      <div className="container-select-invoices">
        <div className="container-header">
          <h5 className="d-inline-flex">Sortati dupa :</h5>
          <select
            className="form-select form-select-sm"
            value={sortedBy}
            onChange={(e) => {
              setSortedBy(e.target.value);
              setPage(1);
            }}
          >
            <option value="invoice_name">Nume</option>
            <option value="billed_quantity">Cantitate facturata</option>
            <option value="upload_date">Data incarcarii</option>
            <option value="outstanding_balance">Sold de plata</option>
          </select>
        </div>

        <div className="container-header">
          <h5>Furnizor :</h5>
          <select className="form-select form-select-sm">
            <option value="EON">EON</option>
          </select>
        </div>
      </div>

      <TableInvoices invoices={invoices} />

      <div className={styles["pagination-container"]}>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={styles["pagination-button"]}
        >
          Previous
        </button>

        <span className={styles["pagination-info"]}>
          Pagina {page} din {Math.ceil(total / limit)}
        </span>

        <button
          disabled={page >= Math.ceil(total / limit)}
          onClick={() => setPage((prev) => prev + 1)}
          className={styles["pagination-button"]}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContainerInvoices;
