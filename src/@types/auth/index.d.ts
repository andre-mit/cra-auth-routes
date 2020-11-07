import { UserProps } from '../user';

export interface ContextProps {
    authenticated: boolean;
    user: UserProps;
    handleLogin(): Promise<void>;
    handleLogout(): void;
    loading: boolean;
}
