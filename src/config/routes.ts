import { Route } from '../types/index';
import Home from '../components/Home/home';
import Details from '../components/Detail/Detail';
import Cart from '../components/Cart/Cart';

const routes: Route[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        exact: true,
    },
    {
        path: '/details/:id',
        name: 'details',
        component: Details,
        exact: true,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        exact: true,
    },
];

export default routes;
