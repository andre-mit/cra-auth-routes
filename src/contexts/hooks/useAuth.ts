import { useState, useEffect } from 'react';

import { UserProps, RequestProps } from '../../@types/user';

import api from '../../services/api';
import history from '../../utils/history';

import { ContextProps } from '../../@types/auth';

export default function useAuth(): ContextProps {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState<UserProps>({} as UserProps);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    const handleLogin = async (): Promise<void> => {
        const {
            data: { token, user: userResponse },
        } = await api.post<RequestProps>('/authenticate');

        setUser(userResponse);
        setAuthenticated(true);
        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        history.push('/users');
    };
    const handleLogout = async (): Promise<void> => {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    };

    return { authenticated, handleLogin, handleLogout, user, loading };
}
