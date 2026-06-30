import { useRouter } from "next/navigation";
import { JobQueue } from "./columns";
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
} from "@/components/ui/alert-dialog";
import { CheckCircle2Icon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function MarkAsComplete({ queue }: { queue: JobQueue }) {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleEdit = async () => {
        try {
            const done = await fetch("/api/users", {
                method: "PATCH",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    id: queue.id
                })
            });
            if (done.ok){
                const res = await fetch("/api/history", {

                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({
                        h_id: queue.id,
                        finishDate: new Date().toDateString(),
                    })

                })
            }  } catch (error) {
            console.error(error);
        }
        router.refresh();
        router.push("/jobqueue");
    }
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
                            <AlertDialogAction onClick={() => {handleEdit(); toast.success("Success boy!"); }}>Continue</AlertDialogAction>
                            
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
    }
