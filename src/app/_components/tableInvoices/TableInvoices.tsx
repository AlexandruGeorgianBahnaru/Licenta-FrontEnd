import { InvoiceModel } from "@/app/_models/InvoiceModel";
import React from "react"
import styles from "./tableInvoices.module.css"

 
const TableInvoices = ({invoices} : {invoices: InvoiceModel[]}) => {
    return (
        <table className={styles["table-invoices"]}>
            <thead>
                <tr>
                    <th className={styles["th-row"]}>Nume Factura</th>
                    <th className={styles["th-billing-date"]}>Perioada Facturata</th>
                    <th className={styles["th-row"]}>Data Incarcarii</th>
                    <th className={styles["th-provider"]}>Furnizor</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map((invoice) => (
                    <tr key={invoice.id}>
                        <td className={styles["td-row"]}>{invoice.name}</td>
                        <td className={styles["td-billing-date"]}>{invoice.start_billing_date} - {invoice.end_billing_date}</td>
                        <td className={styles["td-row"]}>{invoice.upload_date}</td>
                        <td className={styles["td-provider"]}>{invoice.provider}</td>
                    </tr>
                ))}
               
            </tbody>
        </table>
    )
}

export default TableInvoices;