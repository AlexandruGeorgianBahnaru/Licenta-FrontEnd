import { InvoiceModel } from "@/app/_models/InvoiceModel";
import React from "react";
import styles from "./tableInvoices.module.css";

const TableInvoices = ({ invoices }: { invoices: InvoiceModel[] }) => {
  let sorted_invoices = [...invoices];
  return (
    <table className={styles["table-invoices"]}>
      <thead>
        <tr>
          <th className={styles["th-name"]}>Nume Factura</th>
          <th className={styles["th-row"]}>Data Incarcarii</th>
          <th className={styles["th-billing-date"]}>Perioada Facturata</th>
          <th className={styles["th-outstanding-balance"]}>Sold de plata</th>
          <th className={styles["th-billed-quantity"]}>Cantitate facturata</th>
        </tr>
      </thead>
      <tbody>
        {sorted_invoices.map((invoice, i) => (
          <tr key={i * 6} className={styles["tr"]}>
            <td className={styles["td-name"]} key={i * 6 + 1}>
              {invoice.invoice_name}
            </td>
            <td className={styles["td-row"]} key={i * 6 + 2}>
              {invoice.upload_date.slice(0, 10)}
            </td>
            <td className={styles["td-billing-date"]} key={i * 6 + 3}>
              {invoice.billing_period}
            </td>
            <td className={styles["td-outstanding-balance"]} key={i * 6 + 4}>
              {invoice.outstanding_balance + " Lei"}
            </td>
            <td className={styles["td-billed-quantity"]} key={i * 6 + 5}>
              {invoice.billed_quantity + " kWh"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInvoices;
