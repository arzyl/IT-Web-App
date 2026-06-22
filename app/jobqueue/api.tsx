"use client";
import { useState, useEffect } from "react";
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default function JobQueueData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log(data.length)
                setData(data)
            });
    }, []);


    return <DataTable columns={columns} data={data} />
}