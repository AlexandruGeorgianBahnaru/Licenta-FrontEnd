import { InvoiceModel } from "@/app/_models/InvoiceModel";
import { InvoiceModelUpload } from "@/app/_models/InvoiceModelUpload";

class InvoiceService{
    getInvoicesMock = (): InvoiceModel[] => {
        return [
            {
              id: "001",
              name: "Factura_Mock_001",
              start_billing_date: "2023-12-01",
              end_billing_date: "2023-12-31",
              upload_date: "2024-01-05",
              provider: "EON"
            },
            {
              id: "002",
              name: "Factura_Mock_002",
              start_billing_date: "2023-11-01",
              end_billing_date: "2023-11-30",
              upload_date: "2023-12-02",
              provider: "EON"
            },
            {
              id: "003",
              name: "Factura_Mock_003",
              start_billing_date: "2024-01-01",
              end_billing_date: "2024-01-31",
              upload_date: "2024-02-03",
              provider: "EON"
            },
            {
              id: "004",
              name: "Factura_Mock_004",
              start_billing_date: "2023-10-01",
              end_billing_date: "2023-10-31",
              upload_date: "2023-11-05",
              provider: "EON"
            },
            {
              id: "005",
              name: "Factura_Mock_005",
              start_billing_date: "2023-09-01",
              end_billing_date: "2023-09-30",
              upload_date: "2023-10-02",
              provider: "EON"
            },
            {
              id: "006",
              name: "Factura_Mock_006",
              start_billing_date: "2023-08-01",
              end_billing_date: "2023-08-31",
              upload_date: "2023-09-03",
              provider: "EON"
            },
            {
              id: "007",
              name: "Factura_Mock_007",
              start_billing_date: "2023-07-01",
              end_billing_date: "2023-07-31",
              upload_date: "2023-08-02",
              provider: "EON"
            },
            {
              id: "008",
              name: "Factura_Mock_008",
              start_billing_date: "2023-06-01",
              end_billing_date: "2023-06-30",
              upload_date: "2023-07-01",
              provider: "EON"
            },
            {
              id: "009",
              name: "Factura_Mock_009",
              start_billing_date: "2023-05-01",
              end_billing_date: "2023-05-31",
              upload_date: "2023-06-03",
              provider: "EON"
            },
            {
              id: "010",
              name: "Factura_Mock_010",
              start_billing_date: "2023-04-01",
              end_billing_date: "2023-04-30",
              upload_date: "2023-05-02",
              provider: "EON"
            }
          ];
      };

      getUploadResponseMock = (): InvoiceModelUpload => {
        return {
          id: "111",
          billing_value: "111",
          start_billing_date: "2023-04-01",
          end_billing_date: "2023-04-30",
          upload_date: "2023-05-02",
          num_kw: "1",
          value_kwh: "111"
        };
      }

}

const newInvoiceService = new InvoiceService()
export default newInvoiceService;