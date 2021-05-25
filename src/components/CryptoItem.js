import React from "react";

const CryptoItem = ({el}) => {
	return (
		<div className="crypto-item">
			<div><img src={el.image} alt={el.id} /></div>
			<p>{el.name} (<span>{el.symbol}</span>)</p>
			<p>${el.current_price.toLocaleString("en-US")}</p>
			<p>{el.market_cap.toLocaleString("en-US")}</p>
			{
				el.price_change_percentage_24h.toFixed(2) < 0.00
					? <p className="red">{el.price_change_percentage_24h.toFixed(2)} %</p>
					: <p className="green"> + {el.price_change_percentage_24h.toFixed(2)} %</p>
			}
		</div>
	);
};

export default CryptoItem;
