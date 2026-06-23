import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export function Edit() {

    const [open, setOpen] = useState(false);
    const [priority,setPriority] = useState("low");

    return (
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
    )
}