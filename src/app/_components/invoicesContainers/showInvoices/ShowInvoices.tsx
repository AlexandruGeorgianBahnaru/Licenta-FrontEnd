import React from "react";
import TableInvoices from "@/app/_components/tableInvoices/TableInvoices"
import InvoiceService from "@/app/_services/Invoice/InvoiceService"
const ContainerInvoices = () => {
    return(
        <div className="container-main">
            <div className="container-main">
                <div className="d-flex p-3">
                <h5>Sortati dupa :  </h5>
                <select className="form-select form-select-sm">
                    <option value="Nume">Nume</option>
                    <option value="Data incarcarii">Data incarcarii</option>
                    <option value="Perioada facturata">Perioada facturata</option>
                </select>
                </div>
                <div className="d-flex p-3">
                <h5>Provider factura : </h5>
                <select className="form-select form-select-sm">
                    <option value="EON">EON</option>
                </select>
                </div>
               
            </div>
            <TableInvoices invoices={InvoiceService.getInvoicesMock()}/>
        </div>
    )


}

export default ContainerInvoices;