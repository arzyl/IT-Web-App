import { columns, JobQueue } from "./columns";
import { DataTable } from "./data-table";

async function fetchJobQueueData(): Promise<JobQueue[]> {
  // Simulate fetching data from an API
  return[{
    id: 1,
    jobName: "Fix Printer",
    assignedTo: "Luke",
    status: "In Progress",
    createdAt: new Date("2024-06-01T10:00:00Z"),
    priority: "High",
  },{
    id: 2,
    jobName: "Setup New Workstation",
    assignedTo: "Alice",
    status: "Pending",
    createdAt: new Date("2024-06-02T12:00:00Z"),
    priority: "Medium",
  }
]
}
export default async function JobQueuePage() {
  const data = await fetchJobQueueData()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">IT Helpdesk - Job Queue</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
} 