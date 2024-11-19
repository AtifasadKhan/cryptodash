import React, {useState, useEffect} from 'react';
import {fetchCryptos} from '../api/cryptoApi';
import CryptoTable from '../components/CryptoTable';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
    const [coins, setCoins] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCryptos(page, query).then((res) => setCoins(res.data));
    }, [page, query]);

    return (

        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Crypto Dashboard</h1>

            <input
                className="border p-3 rounded-lg w-full max-w-lg mx-auto block mb-6 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Search for a cryptocurrency..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />


            <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
                <CryptoTable data={coins} onRowClick={(id) => navigate(`/coins/${id}`)}/>
            </div>
        </div>
    );
};

export default Dashboard;
