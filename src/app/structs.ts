export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface RegisterInput{
    Name:string;
    Email:string;
    Password:string;
}

export interface AuthenticationResponse{
    token: string;
}