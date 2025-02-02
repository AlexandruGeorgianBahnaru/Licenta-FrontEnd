import React from "react";

import ShowInvoices from "../invoicesContainers/showInvoices/ShowInvoices"
import UploadInvoices from "../invoicesContainers/uploadInvoices/UploadInvoices";
import InfoInvoices from "../invoicesContainers/infoInvoices/InfoInvoices"; 

const MainContainer = ({shownContainer} : {shownContainer: string}) => {
    return(
        <div className="container-main ">
            {shownContainer === "show-invoices" && <ShowInvoices/>}
            {shownContainer === "upload-invoices" && <UploadInvoices/>}
            {shownContainer === "info-invoices" && <InfoInvoices/>}
        </div>
    )


}



export default MainContainer;