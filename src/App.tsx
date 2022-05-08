import React from 'react';
import {BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import routes from './config/routes';
import './styles/App.scss';
import Nav from "./components/Nav/Nav";

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav/>
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
}

export default App;