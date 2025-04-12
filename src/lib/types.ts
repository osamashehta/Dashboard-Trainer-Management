export type TTableData = {
  id: number;
  courseName: string;
  instructor: string;
  duration: string;
  price: string;
  status: "Active" | "Upcoming";
};

export type TRecentActivities = {
  id: number;
  event: string;
  eventTitle: string;
  time: string;
}

export type TPaymentTableData = {
    id: number;
    trainer:string;
    courseName: string;
    amount: string;
    date: string;
    status: "Paid" | "Pending" | "Processing";
  };