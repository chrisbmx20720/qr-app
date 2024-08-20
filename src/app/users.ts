export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  export const USERS: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User' },
    { id: 3, name: 'Charlie Davis', email: 'charlie.davis@example.com', role: 'User' }
  ];
  