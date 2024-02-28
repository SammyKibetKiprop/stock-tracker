import { AuthState, NewShelf, Product, Shelf } from '@/utils/interfaces';

// send a login/signup request: path: app\(security)\auth\page.tsx
export const userAuthHandler = async (authState: AuthState) => {
  const { username, password, isLogin } = authState;
  console.log({ username, password, isLogin });

  // do the necessary depending on whether it is login or signup
};

// add a new shelf: path: app\(home)\shelf\new\page.tsx
export const addShelfHandler = async (newShelfData: NewShelf) => {
  console.log(newShelfData);
};

// get all shelves: path: app\(home)\shelf\page.tsx
export const getAllShelves = async () => {
  // fetch all shelves
  const placeholderShelves: Shelf[] = [
    {
      productName: 'Product 1',
      serialNumber: '123',
      shelfId: '123',
      date: '2021-09-21',
    },
    {
      productName: 'Product 2',
      serialNumber: '456',
      shelfId: '456',
      date: '2021-09-21',
    },
    {
      productName: 'Product 3',
      serialNumber: '789',
      shelfId: '789',
      date: '2021-09-21',
    },
  ];

  return placeholderShelves;
};

// get all products: path: app\(home)\product\page.tsx
export const getAllProducts = async () => {
  // fetch all products
  const placeholderProducts: Product[] = [
    {
      productId: '1',
      productName: 'Product 1',
      productDescription: 'Description of Product 1',
      productPrice: 100,
      shelfId: '1',
      image: 'https://via.placeholder.com/150',
    },
    {
      productId: '2',
      productName: 'Product 2',
      productDescription: 'Description of Product 2',
      productPrice: 200,
      shelfId: '2',
      image: 'https://via.placeholder.com/150',
    },
    {
      productId: '3',
      productName: 'Product 3',
      productDescription: 'Description of Product 3',
      productPrice: 300,
      shelfId: '3',
      image: 'https://via.placeholder.com/150',
    },
    {
      productId: '4',
      productName: 'Product 4',
      productDescription: 'Description of Product 4',
      productPrice: 400,
      shelfId: '4',
      image: 'https://via.placeholder.com/150',
    },
    {
      productId: '5',
      productName: 'Product 5',
      productDescription: 'Description of Product 5',
      productPrice: 500,
      shelfId: '5',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return placeholderProducts;
};
