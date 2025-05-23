import React, { ChangeEvent, useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import InvoiceService from "@/app/_services/Invoice/InvoiceService";
import styles from "./uploadInvoices.module.css";
import UploadTableInvoices from "./UploadInvoiceTable";
import {
  useAuth,
  useToggleAuth,
} from "@/app/_components/context/AuthenticationContext";

const UploadInvoices = () => {
  const [file, setFile] = useState<File | undefined>();
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userUid, setUserUid] = useState<string | null>(null);
  const { isLoggedIn, accessToken } = useAuth();
  const { toggleIsLoggedIn, setAccessToken } = useToggleAuth();
  const router = useRouter();
  const toggleAuth = useToggleAuth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isLoggedIn) {
        const user = localStorage.getItem("id");
        setUserUid(user);
      } else {
        router.push("/login");
      }
    }
  }, []);

  const handleOnChange = async (e: React.FormEvent<HTMLInputElement>) => {
    if (!isLoggedIn) {
      alert("Trebuie sa va logati!");
      router.push("/login");
    } else {
      const target = e.target as HTMLInputElement & {
        files: FileList;
      };
      if (target.files) {
        const selectedFile = target.files[0];
        setFile(selectedFile);
        await uploadInvoice(selectedFile);
      }
    }
  };

  const uploadInvoice = async (file: File) => {
    if (!file) {
      setError("Please select a PDF file.");
      return;
    }

    if (!accessToken) {
      setError("No accesstoken.");
      return;
    }

    try {
      setIsLoading(true);
      setInvoiceData(null);
      const response = await InvoiceService.uploadInvoice(
        accessToken,
        file,
        file.name
      );
      setInvoiceData(response.data[0]);

      setIsLoading(false);
      setError(null);
    } catch (error: any) {
      setIsLoading(false);
      if (error.response && error.response.status === 401) {
        router.push("/middleware");
      }
      setError("Incercati din nou.");
      if (error.response && error.response.status === 409) {
        setError(
          "Exista deja o factura salvata pentru luna si anul din factura pe care ati introdus-o."
        );
      }
      console.error("Upload Error:", error);
    }
  };

  return (
    <div className="container-main-column">
      {isLoading && (
        <div className={styles["overlay"]}>
          <div className={styles["loader"]}>Uploading...</div>
        </div>
      )}
      <div className="container-select-upload">
        <div className="container-header">
          <h5>Furnizor factura:</h5>
          <select className="form-select form-select-sm">
            <option value="EON">EON</option>
          </select>
          <input
            type="file"
            onChange={handleOnChange}
            accept="application/pdf"
          />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {invoiceData && <UploadTableInvoices invoiceData={invoiceData} />}
    </div>
  );
};

export default UploadInvoices;
