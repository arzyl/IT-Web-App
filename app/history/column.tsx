import { ColumnDef } from "@tanstack/react-table";
import { primaryKey } from "drizzle-orm/pg-core"

export type History = {
    id: number;
    date: Date;
};

export const columns: ColumnDef<History>[] = [
    {
        accessorKey: "activity",
        header: "Activity"
    },
    {
        accessorKey: "date",
        header: "Date Finished"
    }
]
