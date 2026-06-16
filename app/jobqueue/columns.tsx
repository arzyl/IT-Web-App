import { ColumnDef } from "@tanstack/react-table";

export type JobQueue = {
  id: number;
  jobName: string;
  assignedTo: string;
  status: string;
  createdAt: Date;
  priority: "Low" | "Medium" | "High";
};

export const columns: ColumnDef<JobQueue>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },{
    accessorKey: "assignedTo",
    header: "Assigned To",
  }
  ,
  {
    accessorKey: "jobName",
    header: "Job Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  }
];