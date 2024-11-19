import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

const PriceChart = ({data}) => (<LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8"/>
        <XAxis dataKey="date"/>
        <YAxis/>
        <Tooltip/>
    </LineChart>);

export default PriceChart;
