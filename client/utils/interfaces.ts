export interface AuthState {
  username: string;
  password: string;
  isLogin: boolean;
}

export interface NewShelf {
  name: string;
  id: string;
  category: string;
  prodType: string;
  product: string;
  prodId: string;
  prodDesc: string;
  price: string;
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
