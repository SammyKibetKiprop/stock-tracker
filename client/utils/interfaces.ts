export interface AuthState {
  username: string;
  password: string;
  isLogin: boolean;
}

export interface Shelf {
  name: string;
  id: string;
  serialNumber: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  shelfId: string;
  image: string;
}

export interface SalesPerShift {
  shift: string[];
  sales: number[];
}
