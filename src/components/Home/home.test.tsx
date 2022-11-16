import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from '../../state-center/store/store';
import { Provider } from 'react-redux';
import Home from './Home';

// describe('home page component', () => {
//     test('click on a specific product then route to the product detail page', () => {
//         const history = createMemoryHistory({ initialEntries: ['/'] });
//         const { getByText } = render(
//             <Provider store={store}>
//                     <Router history={history}>
//                         <Home />
//                     </Router>
//             </Provider>
//         );
//         expect(history.location.pathname).toBe('/');
//         fireEvent.click(getByText('Philips hue bulb'));
//         expect(history.location.pathname).toBe('/details/1');
//     });
// });
