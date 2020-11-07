export interface UserProps {
    id: number;
    name: string;
    company: string;
    website: string;
}

export interface RequestProps {
    token: string;
    user: UserProps;
}
