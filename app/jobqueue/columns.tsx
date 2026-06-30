'use client';
import Modal from "@/components/ui/modal";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Field, FieldGroup, } from "@/components/ui/field"
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";
import { CheckCheckIcon, CheckCircle, CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Edit } from "./edit";
import { toast } from "sonner";

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
        accessorKey: "assignee",
        header: "Assigned To",
    }
    ,
    {
        accessorKey: "activity",
        header: "Job Name",
    },
    {
        accessorKey: "createAt",
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
            const [open, setOpen] = useState(false);
            const [priority, setPriority] = useState("low");
            const priorityColor = {
                low: "text-green-600 bg-green-100",
                medium: "text-yellow-600 bg-yellow-100",
                high: "text-red-600 bg-red-100",
            };
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">...</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" align="start">
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>IT HelpDesk</DropdownMenuLabel>
                            <DropdownMenuItem>
                                Mark as Complete
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setOpen(true)} onSelect={(e) => e.preventDefault()}>
                                Edit
                            </DropdownMenuItem>

                            {/* Edit Dropdown Function */}
                            <Dialog open={open} onOpenChange={setOpen}>
                            <Edit />
                            </Dialog>
                            <DropdownMenuItem>
                                Cancel
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

            )
        },
    },
    {
        id: "done",
        cell: ({ row }) => {

            const [open, setOpen] = useState(false);

            return (
                <AlertDialog>
                    <AlertDialogTrigger asChild className="hover:scale-105" onClick={() => setOpen(true)}>
                        <CheckCircle2Icon/>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will remove the task from current view.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction >Continue</AlertDialogAction>
                            
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            );
        }
    }

];