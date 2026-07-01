import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CheckCircle2Icon, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { JobQueue } from "./columns";

export default function MarkAsComplete({ queue }: { queue: JobQueue }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleEdit = async () => {
        try {
            const done = await fetch("/api/users", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: queue.id,
                    status: "Done",
                }),
            });
            console.log(done);
            if (done.ok) {
                await fetch("/api/history", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        h_id: queue.id,
                        finishDate: new Date().toDateString(),
                    }),
                });
            }

            router.refresh();
            router.push("/jobqueue");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger
                asChild
                className="hover:scale-105"
            >
                <CheckCircle2Icon onClick={() => setOpen(true)} />
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        This action cannot be undone. This will remove the task from current view.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>

                    <AlertDialogAction
                        onClick={() => {
                            handleEdit();
                            toast.success("Success boy!");
                        }}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}