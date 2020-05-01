import React from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
const Example = ({ covid19Stats }) => {
    const formatData = (stats) => {
        const newArray = [];
        stats.forEach(dp => {
            // see if country is in array
            const index = newArray.findIndex((i) => i.name == dp.country);
            if (index == -1) {
                newArray.push({
                    name: dp.country,
                    deaths: dp.deaths,
                    confirmed: dp.confirmed,
                    recovered: dp.recovered,
                })
            } else {
                newArray[index].deaths += dp.deaths
                newArray[index].confirmed += dp.confirmed
                newArray[index].recovered += dp.recovered
            }
        });
        console.log(newArray);
        return newArray
    };
    const data = formatData(covid19Stats);
    return (
        <BarChart
            width={20500}
            height={700}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="deaths" fill="#8884d8" />
            <Bar dataKey="confirmed" fill="#82ca9d" />
            <Bar dataKey="recovered" fill="#42ca9d" />
        </BarChart>
    );
};
export default Example;