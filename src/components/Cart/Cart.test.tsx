import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import Cart from "./Cart";
import {createMemoryHistory} from 'history'
import store from "../../redux/store/store";
import {Route, Router} from 'react-router-dom';

describe('Cart component', () => {
    store.dispatch({type: 'ADD_TO_CART', payload: {productInCart:{
                available: true,
                brand: 'Philips',
                id: 1,
                name: 'Philips hue bulb',
                options: [{color: 'red', power: '9.5', storage: null, quantity: null}],
                price: '500',
                weight: 0.2
            }, quantity: '5'}})

    it('should render Cart component with a product with name, brand, product price, product quantity, total price, total quantity', () => {
        const history = createMemoryHistory()
        render(
            <Provider store={store}>
                <Router history={history}>
                    <Route component={Cart}/>
                </Router>
            </Provider>
        );
        const productName = screen.getByTestId('product-name')
        const productBrand = screen.getByTestId('product-brand')
        const productPrice = screen.getByTestId('product-price')
        const productQuantity = screen.getByTestId('product-quantity')
        const totalPrice = screen.getByTestId('total-price')
        const totalQuantity = screen.getByTestId('total-quantity')
        expect(productName).toHaveTextContent('Philips hue bulb')
        expect(productBrand).toHaveTextContent('Philips')
        expect(productPrice).toHaveTextContent('500')
        expect(productQuantity).toHaveTextContent('5')
        expect(totalPrice).toHaveTextContent('2500')
        expect(totalQuantity).toHaveTextContent('5')
    })

    it('should decrease product quantity, total quantity and total price when call DEC dispatch one time', () => {
        store.dispatch({type: 'DEC', payload: 1})
        const history = createMemoryHistory()
        render(
            <Provider store={store}>
                <Router history={history}>
                    <Route component={Cart}/>
                </Router>
            </Provider>
        );
        const productQuantity = screen.getByTestId('product-quantity')
        const totalPrice = screen.getByTestId('total-price')
        const totalQuantity = screen.getByTestId('total-quantity')
        expect(productQuantity).toHaveTextContent('4')
        expect(totalPrice).toHaveTextContent('2000')
        expect(totalQuantity).toHaveTextContent('4')
    })
});
