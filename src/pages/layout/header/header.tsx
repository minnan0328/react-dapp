import "./header.scss";
// import React, { useState } from "react";
import logo from '@/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import url from '@/router/url';

const Header = () => {

    // const menus = [ url.ethers ];
    // const [currentMenu, setCurrentMenu] = useState(menus[0].name);

    // const getMenu = (menu: any) => setCurrentMenu(menu.name);

    return (
        <header className="header">
            <div className="header-left">
                <Link to={url.home.path}>
                    <img src={logo} className="logo" alt="logo" />
                </Link>

                <h1>Ethers</h1>
            </div>

            {/* <div className="menus">
                { 
                    menus.map(menu => 
                        <Link  className={`menu ${ currentMenu ===  menu.name ? "active": "" }`}
                            key={ menu.name } to={ menu.path }
                            onClick={(e) => getMenu({ menu })}>
                            {menu.name}
                        </Link>
                    ) 
                }
            </div> */}
        </header>
    )
};

export default Header;