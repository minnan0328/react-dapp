import "./App.scss";
import Header from './header/header';
import RouterElement from './../../router/router';

const App = () => {
	return (
		<div className="App">
			<Header />
			<RouterElement />
		</div>
	);
}

export default App;
