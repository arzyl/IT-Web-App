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
                                <form action="">
                                    <DialogContent className="sm:max-w-sm">
                                        <DialogHeader>
                                            <DialogTitle>Edit Job Queue</DialogTitle>
                                            <DialogDescription>May karapatan kang baguhin ang pagkakamali mo</DialogDescription>
                                        </DialogHeader>
                                        <FieldGroup>
                                            <Field>
                                                <Label htmlFor="name-1">Assignee</Label>
                                                <Input id="assignee" name="assignee" defaultValue="" />
                                            </Field>
                                            <Field>
                                                <Label htmlFor="name-1">Job Name</Label>
                                                <Input id="jobName" name="jobName" defaultValue="" />
                                            </Field>
                                            <Field>
                                                <Label htmlFor="name-1">Priority</Label>
                                                <Select onValueChange={setPriority}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select priority"></SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                            <SelectItem value="low" className="bg-yellow-300">Low</SelectItem>
                                                            <SelectItem value="medium" className="bg-orange-300">Medium</SelectItem>
                                                            <SelectItem value="high" className="bg-red-500">High</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                            <Field>
                                                <Label htmlFor="name-1">Status</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Status"></SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="pending" className="red">Pending</SelectItem>
                                                        <SelectItem value="Ongoing">Ongoing</SelectItem>
                                                        <SelectItem value="Done">Done</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                            <Button>Save</Button>
                                        </FieldGroup>
                                    </DialogContent>
                                </form>
                            </Dialog>
                            <DropdownMenuItem>
                                Cancel
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

            )
        }
    }


];