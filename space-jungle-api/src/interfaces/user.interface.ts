import Role from '../enums/roles';

interface User {
    email: string;
    name: string;
    surname: string;
    username: string;
    phone: number;
    password: string;
    isVendor: boolean;
    signUpDate: Date;
    companyName: string;
    role: Role;
}

export default User;
