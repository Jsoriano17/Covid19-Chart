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
            // if(dp.country === 'US' || dp.country === 'China' || dp.country === 'United Kingdom' || dp.country === 'Canada' || dp.country === 'France' || dp.country === 'France') {
            if(dp.confirmed > 20000) {
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
        } else {
            console.log('not working')
        }
        });
        console.log(newArray);
        return newArray
    };
    const data = formatData(covid19Stats);
    return (
        <BarChart
            width={1200}
            height={700}
            data={data}
            margin={{
                top: 5,
                right: 50,
                left: 10,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="white"/>
            <YAxis  stroke="white"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="deaths" fill="#8884d8" />
            <Bar dataKey="confirmed" fill="#82ca9d" />
            <Bar dataKey="recovered" fill="#42ca9d" />
        </BarChart>
    );
};
export default Example;

