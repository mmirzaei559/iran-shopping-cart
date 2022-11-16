import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductDetail from './ProductDetail';
import { createMemoryHistory } from 'history';
import { store } from '../../state-center/store/store';
import { Route, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// describe('Detail component', () => {

//     it('should render Detail component and quantity with value of 1', () => {
//         const history = createMemoryHistory()
//         render(
//             <Provider store={store}>
//                 <Router history={history}>
//                     <Route component={Detail} />
//                 </Router>
//             </Provider>
//         );
//         const quantity = screen.getByTestId('quantity')
//         expect(quantity).toHaveTextContent('1')
//     })

//     it('should increase quantity when plus button is clicked', () => {
//         const history = createMemoryHistory()
//         render(
//             <Provider store={store}>
//                 <Router history={history}>
//                     <Route component={Detail} />
//                 </Router>
//             </Provider>
//         );
//         const increaseButton = screen.getByTestId('increase-quantity')
//         const quantity = screen.getByTestId('quantity')
//         userEvent.click(increaseButton)
//         expect(quantity).toHaveTextContent('2')
//     })

//     it('should decrease quantity when minus button is clicked', () => {
//         const history = createMemoryHistory()
//         render(
//             <Provider store={store}>
//                 <Router history={history}>
//                     <Route component={Detail} />
//                 </Router>
//             </Provider>
//         );
//         const increaseButton = screen.getByTestId('increase-quantity')
//         const decreaseButton = screen.getByTestId('decrease-quantity')
//         const quantity = screen.getByTestId('quantity')
//         userEvent.click(increaseButton)
//         expect(quantity).toHaveTextContent('2')
//         userEvent.click(decreaseButton)
//         expect(quantity).toHaveTextContent('1')
//     })

//     it('should not decrease to less than 1', () => {
//         const history = createMemoryHistory()
//         render(
//             <Provider store={store}>
//                 <Router history={history}>
//                     <Route component={Detail} />
//                 </Router>
//             </Provider>
//         );
//         const decreaseButton = screen.getByTestId('decrease-quantity')
//         const quantity = screen.getByTestId('quantity')
//         expect(quantity).toHaveTextContent('1')
//         userEvent.click(decreaseButton)
//         expect(quantity).toHaveTextContent('1')
//     })
// });
