export interface Gain {
    currency: string;
    percentage: number;
    profit: number;
  }
  
  export interface Wallet {
    totalBalance: number;
  }
  
  export interface User {
    _id?: string;
    name: string;
    lastName: string;
    role: string;
    password?: string;
    wallet: Wallet;
    gains: Gain[];
  }
  