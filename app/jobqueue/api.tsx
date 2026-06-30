'use client'

import { useState, useEffect } from "react";
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useRouter } from "next/navigation";

export default function JobQueueData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }, []);


    return <DataTable columns={columns} data={data} />
}

