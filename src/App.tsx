import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionsUsage } from './state-center';
import { useDispatch } from 'react-redux';
import routes from './config/routes';
import Nav from './components/nav/Nav';
import './styles/App.scss';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const { stackingProductsInState } = bindActionCreators(actionsUsage, dispatch);

    useEffect(() => {
        axios
            .get('data.json')
            .then((res) => {
                stackingProductsInState(res.data.products);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name}
                                        {...props}
                                        {...route.props}
                                    />
                                )}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
