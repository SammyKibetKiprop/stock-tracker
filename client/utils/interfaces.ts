export interface AuthState {
  username: string;
  password: string;
  isLogin: boolean;
}

export interface NewShelfData {
  name: string;
  id: string;
  category: string;
  prodType: string;
  product: string;
  prodId: string;
  prodDesc: string;
  price: string;
}

export interface ShelfData {
  productName: string;
  serialNumber: string;
  shelfId: string;
  date: string;
}
