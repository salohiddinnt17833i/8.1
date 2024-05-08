import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    { name: "Group A", value: 200 },
    { name: "Group D", value: 400 }
];
const COLORS = ["#65ddc7", "#00C49F"];

function Chart() {
    return (
        <>
            <PieChart width={200} height={270}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={40}
                    outerRadius={60}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </>
    )
}

export default Chart