
import { useRoutes } from 'react-router-dom';
import url from "../router/url";
import Home from "./../pages/home/home";

const routes = [
    { ...url.home, element: <Home /> }
];

const RouterElement = () => {

    const element = useRoutes(routes);
    
    return element;
};

export default RouterElement;