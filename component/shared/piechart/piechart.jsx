import React from 'react';
import styles from "./piechart.module.scss";
import {PieChart, Pie, ResponsiveContainer, Cell} from "recharts";
import PiechartItem from "./piechartItem";

const data = [
    {
        usertype: "Contractor Employees",
        value: 10
    },
    {
        usertype: "Permanent Employees",
        value: 30
    }
]
const colors = ['#F3E8ED', '#E8F2F3'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="#6DB5CC" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieC() {
        return (
            <div className={styles.container}>

                <ResponsiveContainer width="100%" height="100%" aspect={3}>
                    <PieChart id="chart" width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                            ))}

                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className={styles.card_container}>
                    {data.map((emp,index)=>{
                        return (
                            <PiechartItem {...emp}/>
                        )
                    })}
                </div>
            </div>
        );
}