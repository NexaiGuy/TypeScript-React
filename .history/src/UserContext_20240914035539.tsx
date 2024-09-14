export interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string, is) => void;
    addUser: (user: User) => void;
}