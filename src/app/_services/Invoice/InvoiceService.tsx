import axios from "@/app/_api/axios_eon";
import { InvoiceModel } from "@/app/_models/InvoiceModel";
import { InvoiceModelUpload } from "@/app/_models/InvoiceUploadModel";

class InvoiceService {
  getInvoicesByUserId = async (access_token: string) => {
    return await axios.get(`/eon/user/invoices`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
  };

  getInvoicesByUserPaginated = async (
    access_token: string,
    limit: number,
    offset: number,
    sorted_by: string
  ) => {
    return await axios.get(`/eon/user/invoices`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        limit,
        offset,
        sorted_by,
      },
      withCredentials: true,
    });
  };

  uploadInvoice = async (
    access_token: string,
    file: File,
    fileName: string
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_name", fileName);

    return await axios.post(`/eon/user/upload-invoice`, formData, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
  };

  getMonthlyQuantities = async (access_token: string, year: number) => {
    return await axios.get(`/eon/user/monthly-quantities`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {
        year,
      },
      withCredentials: true,
    });
  };

  getInvoicesMock = (): InvoiceModel[] => {
    return [
      {
        id: "001",
        invoice_name: "Factura_Mock_001",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2024-01-05",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "002",
        invoice_name: "Factura_Mock_002",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-12-02",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "003",
        invoice_name: "Factura_Mock_003",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2024-02-03",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "004",
        invoice_name: "Factura_Mock_004",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-11-05",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "005",
        invoice_name: "Factura_Mock_005",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-10-02",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "006",
        invoice_name: "Factura_Mock_006",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-09-03",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "007",
        invoice_name: "Factura_Mock_007",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-08-02",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "008",
        invoice_name: "Factura_Mock_008",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-07-01",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "009",
        invoice_name: "Factura_Mock_009",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-06-03",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
      {
        id: "010",
        invoice_name: "Factura_Mock_010",
        billing_period: "01.09.2022 - 30.09.2022",
        upload_date: "2023-05-02",
        outstanding_balance: "111 LEI",
        billed_quantity: "100",
      },
    ];
  };

  getUploadResponseMock = (): InvoiceModelUpload => {
    return {
      id: "0",
      invoice_name: "AAAAAA",
      billed_quantity: "100",
      outstanding_balance: "200",
      billing_period: "01.09.2022 - 30.09.2022",
      upload_date: "2023-07-02",
      kwh_value: "0.123",
      issue_date: "2023-05-02",
      due_date: "2023-10-02",
      previous_balance: "0",
    };
  };
}

const newInvoiceService = new InvoiceService();
export default newInvoiceService;
