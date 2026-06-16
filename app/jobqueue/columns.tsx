'use client';
import Modal from "@/components/ui/modal";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

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
    }, {
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
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const [isModalOpen, setIsModalOpen] = useState(false);
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">...</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Link href={"/history"}>Mark as Complete
                                </Link></DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Cancel</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }


];