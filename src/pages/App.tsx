import React from "react";
import logo from './../assets/images/logo.svg';
import "./App.scss";
import Home from './home/home';
import Ethers from './ethers/ethers';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>

			<Home />
			<Ethers />
		</div>
	);
}

export default App;
