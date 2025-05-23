import { InvoiceModelUpload } from "@/app/_models/InvoiceUploadModel";
import React from "react";
import styles from "./uploadInvoices.module.css";

const UploadTableInvoices = ({ invoiceData = [] }) => {
  return (
    invoiceData && (
      <div className={styles["container-main"]}>
        <p>Nume factura: {invoiceData[0]}</p>
        <p>Cantitate facturata: {invoiceData[1]} kwH</p>
        <p>Sold de plata: {invoiceData[2]} Lei</p>
        <p>Sold anterior: {invoiceData[3]} Lei</p>
        <p>Perioada facturata: {invoiceData[4]}</p>
        <p>Pret kWh: {invoiceData[5]} Lei</p>
        <p>Data emitere: {invoiceData[6]}</p>
        <p>Data scadenta: {invoiceData[7]}</p>
        <p>Data incarcarii: {invoiceData[8]}</p>
      </div>
    )
  );
};

export default UploadTableInvoices;
