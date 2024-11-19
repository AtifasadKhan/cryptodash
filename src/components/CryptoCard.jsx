import React from 'react';

const CryptoCard = ({coin, onClick}) => (<div className="p-4 bg-white rounded shadow cursor-pointer" onClick={onClick}>
        <h2 className="text-lg font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h2>
        <p>Price: ${coin.current_price}</p>
        <p className={`text-${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}-500`}>
            {coin.price_change_percentage_24h.toFixed(2)}% (24h)
        </p>
        <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
    </div>);

export default CryptoCard;
