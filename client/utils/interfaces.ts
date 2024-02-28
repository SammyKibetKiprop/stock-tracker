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
  productName: string;
  serialNumber: string;
  shelfId: string;
  date: string;
}

export interface Product {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  shelfId: string;
  image: string;
}

export interface SalesPerShift {
  shift: string[];
  sales: number[];
}
