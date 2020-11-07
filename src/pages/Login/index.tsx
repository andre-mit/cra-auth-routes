import React, { useContext } from 'react';

import { Context } from '../../contexts/AuthContext';

const Login: React.FC = () => {
    const { handleLogin } = useContext(Context);
    return <button onClick={handleLogin}>Entrar</button>;
};

export default Login;
