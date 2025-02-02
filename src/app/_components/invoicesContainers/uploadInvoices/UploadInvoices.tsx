import React from "react";
import DropBox from "../../dropBox/DropBox";
import InvoiceService from "@/app/_services/Invoice/InvoiceService"

const UploadInvoices = () => {
    const invoiceData = InvoiceService.getUploadResponseMock();
    return(
        <div className="container-main">
        <div className="d-flex">
        <h3>Furnizor factura:</h3>
        <select className="form-select form-select-sm m-3">
            <option value="EON">EON</option>
            <option value="Enel">Enel</option>
            <option value="Gas">Gas</option>
           
        </select>

        <button className="btn btn-outline-secondary m-3">Selecteaza factura</button>
        </div>
        <h4>Upload Factura (PDF only):</h4>
        <DropBox/>
        <div className="container">
          <p>Id: {invoiceData.id}</p>
          <p>Valoare Facturata: {invoiceData.billing_value}</p>
          <p>Perioada Facturata: {invoiceData.start_billing_date} - {invoiceData.end_billing_date}</p>
          <p>Data Incarcarii: {invoiceData.upload_date}</p>
          <p>Numar kw: {invoiceData.num_kw}</p>
          <p>Valoare kwh: {invoiceData.value_kwh}</p>

        </div>
        
    </div>
    )
}

export default UploadInvoices;