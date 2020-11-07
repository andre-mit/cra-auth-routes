import React, { createContext } from 'react';
import { ContextProps } from '../@types/auth';
import useAuth from './hooks/useAuth';

interface Props {
    children: React.ReactNode;
}

const Context = createContext<ContextProps>({} as ContextProps);

const AuthProvider: React.FC<Props> = ({ children }) => {
    const {
        authenticated,
        handleLogin,
        handleLogout,
        user,
        loading,
    } = useAuth();
    return (
        <Context.Provider
            value={{ authenticated, handleLogin, handleLogout, user, loading }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, AuthProvider };
