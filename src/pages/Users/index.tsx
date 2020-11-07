import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../contexts/AuthContext';
import api from '../../services/api';

interface User {
    id: string;
    name: string;
    website: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const { handleLogout } = useContext(Context);

    useEffect(() => {
        (async () => {
            const { data } = await api.get<User[]>('/users');

            setUsers(data);
        })();
    }, []);

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <button onClick={handleLogout}>Sair</button>
        </>
    );
};

export default Users;
