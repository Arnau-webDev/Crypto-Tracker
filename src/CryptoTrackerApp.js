import React, { useEffect, useState } from "react";
import CryptoItem from "./components/CryptoItem";

const CryptoTrackerApp = () => {

	const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=%20'1h%2C24h%2C7d'%20";
	const [cryptos, setCryptos] = useState([]);

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setCryptos(data);
				// console.log(data);
			})
			.catch(e => console.log(e));
	}, []);

	return (
		<>
			<h2>CoinStar</h2>
			<div className="container">
				<div>
					<div className="crypto-item table-title">
						<p>Symbol</p>
						<p>Name</p>
						<p>Current Price</p>
						<p>Market Cap</p> 
						<p>24h Move</p>
					</div>
					{cryptos.map((el) => {
						return <CryptoItem key={el.id} el={el} />;
					})}
				</div>
			</div>
		</>
	);
};

export default CryptoTrackerApp;
