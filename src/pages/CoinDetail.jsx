import React, {useState, useEffect} from 'react';
import {fetchCoinDetails, fetchPriceHistory} from '../api/cryptoApi';
import PriceChart from '../components/LineChart';
import {useParams} from 'react-router-dom';

const CoinDetail = () => {
    const {id} = useParams();
    const [coin, setCoin] = useState(null);
    const [priceData, setPriceData] = useState([]);
    const [timeframe, setTimeframe] = useState('7d');

    useEffect(() => {
        fetchCoinDetails(id).then((res) => setCoin(res.data));
        fetchPriceHistory(id, timeframe).then((res) => setPriceData(
            res.data.prices.map(([timestamp, price]) => ({
                date: new Date(timestamp).toLocaleDateString(),
                price,
            }))
        ));
    }, [id, timeframe]);

    if (!coin) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
            <p>{coin.description.en}</p>
            <div>
                <button onClick={() => setTimeframe('1d')}>1D</button>
                <button onClick={() => setTimeframe('7d')}>7D</button>
                <button onClick={() => setTimeframe('1m')}>1M</button>
            </div>
            <PriceChart data={priceData}/>
        </div>
    );
};

export default CoinDetail;
