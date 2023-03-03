import logo from './../../../assets/images/logo.svg';
import url from './../../../router/url';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className="menus">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <div className="menu">
                <Link to={ url.home.path } relative="path">{ url.home.name }</Link>
                <Link to={ url.ethers.path } relative="path">{ url.ethers.name }</Link>
            </div>
        </div>
    )
};

export default Header;