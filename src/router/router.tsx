
import { useRoutes } from 'react-router-dom';
import url from "../router/url";
import Home from "./../pages/home/home";
import Ethers from "./../pages/ethers/ethers";

const routes = [
    { ...url.home, element: <Home /> },
    { ...url.ethers, element: <Ethers /> }
];

const RouterElement = () => {

    const element = useRoutes(routes);
    
    return element;
};

const setRouter = () => {
    return (
        <RouterElement />
    )
};

export default setRouter;