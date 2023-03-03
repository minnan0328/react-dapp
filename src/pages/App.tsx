import logo from './../assets/images/logo.svg';
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Ethers from './ethers/ethers';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>

            <Router>
                <Routes>
                    <Route element={<Home />} path={'/'}></Route>
                    <Route element={<Ethers />} path='/ethers'></Route>
                </Routes>
            </Router>
		</div>
	);
}

export default App;
