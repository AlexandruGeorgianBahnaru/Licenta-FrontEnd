import React from "react";

import ShowInvoices from "../invoicesContainers/showInvoices/ShowInvoices";
import UploadInvoices from "../invoicesContainers/uploadInvoices/UploadInvoices";
import StatisticsInvoices from "../invoicesContainers/statisticsInvoices/StatisticsInvoices";

const MainContainer = ({ shownContainer }: { shownContainer: string }) => {
  return (
    <div className="container-main ">
      {shownContainer === "show-invoices" && <ShowInvoices />}
      {shownContainer === "upload-invoices" && <UploadInvoices />}
      {shownContainer === "info-invoices" && <StatisticsInvoices />}
    </div>
  );
};

export default MainContainer;
