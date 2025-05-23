import React, { useState } from "react";
import "@/app/_shared/css/style.css";
interface MenuButtonsProps {
  showInvoices: (arg: string) => void;
}

const MenuButtons: React.FC<MenuButtonsProps> = ({ showInvoices }) => {
  const [activeButton, setActiveButton] = useState<string>("info-invoices");

  const handleClick = (buttonType: string) => {
    setActiveButton(buttonType);
    showInvoices(buttonType);
  };

  return (
    <nav className="navbar-manual">
      <button
        className={`btn btn-lg m-2 ${
          activeButton === "show-invoices" ? "btn-success" : "btn-primary"
        }`}
        onClick={() => handleClick("show-invoices")}
      >
        Facturi
      </button>
      <button
        className={`btn btn-lg m-2 ${
          activeButton === "upload-invoices" ? "btn-success" : "btn-primary"
        }`}
        onClick={() => handleClick("upload-invoices")}
      >
        Incarca Factura
      </button>
      <button
        className={`btn btn-lg m-2 ${
          activeButton === "info-invoices" ? "btn-success" : "btn-primary"
        }`}
        onClick={() => handleClick("info-invoices")}
      >
        Statistics
      </button>
    </nav>
  );
};

export default MenuButtons;
