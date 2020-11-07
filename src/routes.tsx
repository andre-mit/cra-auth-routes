import React, { useContext } from 'react';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';

import { Context } from './contexts/AuthContext';

interface RouterCustomProps extends RouteProps {
    isPrivate?: boolean | false;
}

const CustomRoute: React.FC<RouterCustomProps> = ({
    isPrivate = false,
    ...rest
}) => {
    const { authenticated, loading } = useContext(Context);

    if (loading) return <h1>Loading</h1>;

    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />;
    }

    return <Route {...rest} />;
};

const Routes: React.FC = () => {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute exact isPrivate path="/users" component={Users} />
        </Switch>
    );
};

export default Routes;
