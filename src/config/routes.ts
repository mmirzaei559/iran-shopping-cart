import Home from '../components/home/Home';
import ProductDetail from '../components/product/ProductDetail';
import Cart from '../components/cart/Cart';
import { Route } from '../interfaces/index';

const routes: Route[] = [
    {
        path: '/',
        name: 'home',
        component: Home,
        exact: true,
    },
    {
        path: '/product-detail/:id',
        name: 'productDetail',
        component: ProductDetail,
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
