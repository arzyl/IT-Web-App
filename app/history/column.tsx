'use client';
import { ColumnDef } from "@tanstack/react-table";
import { primaryKey } from "drizzle-orm/pg-core"

export type History = {
    id: number;
    date: {
        finishDate: string;
    }
};

export const columns: ColumnDef<History>[] = [
    {
        accessorKey: "users.activity",
        header: "Activity"
    },
    {
        accessorKey: "history.finishDate",
        header: "Date Finished",
    },{
        accessorKey: "users.assignee",
        header: "Assigned To"
    },{
        accessorKey: "users.priority",
        header: "Priority"
    },{
        accessorKey: "users.status",
        header: "Status",

    },
    
]
