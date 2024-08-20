export interface Client {
  id: number;
  name: string;
  email: string;
  profit: number;
  comments: string;
}

export const CLIENTS: Client[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', profit: 3000, comments: 'Good performance.' },
  { id: 2, name: 'Bob Brown', email: 'bob.brown@example.com', profit: 4500, comments: 'Needs to diversify portfolio.' },
  { id: 3, name: 'Charlie Davis', email: 'charlie.davis@example.com', profit: 6200, comments: 'Excellent growth!' }
];
