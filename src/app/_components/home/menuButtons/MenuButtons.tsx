import React from "react";
import "@/app/_shared/css/style.css";
interface MenuButtonsProps {
  showInvoices: (arg: string) => void; // Explicitly define the type for the function
}

const MenuButtons: React.FC<MenuButtonsProps> = ({ showInvoices }) => {

    return (
      <nav className="navbar-manual">
      <button className="btn btn-primary btn-lg m-2" onClick={() => showInvoices("show-invoices")}>Facturi</button>
      <button className="btn btn-primary btn-lg m-2" onClick={() => showInvoices("upload-invoices")}>Incarca Factura</button>
      <button className="btn btn-primary btn-lg m-2" onClick={() => showInvoices("info-invoices")}>Informatii</button>
    </nav>
    );
}

export default MenuButtons;