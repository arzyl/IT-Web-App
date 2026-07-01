'use client'

import { DataTable } from "./data-table";
import { columns } from "./column"
import { useState, useEffect } from "react";

export function History() {
    const [data, setData] = useState([]);
        useEffect(() => {
            fetch("/api/history")
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                });
        }, []);


    return (<DataTable columns={columns} data={data} />
    )
}