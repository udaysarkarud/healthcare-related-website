import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuthContext from '../../hook/useAuthContext';

const SecureRoute = ({ children, ...rest }) => {
    const { userProfile } = useAuthContext()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userProfile?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default SecureRoute;