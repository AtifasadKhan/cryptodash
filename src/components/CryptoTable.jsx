import React from 'react';
import {Table} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const CryptoTable = ({data, onRowClick}) => {
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Symbol', dataIndex: 'symbol', key: 'symbol', render: (symbol) => symbol.toUpperCase() },
        {
            title: 'Price',
            dataIndex: 'current_price',
            key: 'price',
            render: (price) => <span>${price.toLocaleString()}</span>,
        },
        {
            title: '24h Change',
            dataIndex: 'price_change_percentage_24h',
            key: 'change',
            render: (change) => (
                <span className={`flex items-center gap-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    {change.toFixed(2)}%
        </span>
            ),
        },
        {
            title: 'Market Cap',
            dataIndex: 'market_cap',
            key: 'market_cap',
            render: (cap) => `$${cap.toLocaleString()}`,
        },
    ];
    return (
        <Table
            className="crypto-table"
            dataSource={data}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            onRow={(record) => ({
                onClick: () => onRowClick(record.id),
            })}
        />
    );
};

export default CryptoTable;
