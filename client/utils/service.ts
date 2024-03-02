import {
  AuthState,
  NewShelf,
  Product,
  Shelf,
} from '@/utils/interfaces';

const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 100,
    shelfId: '1',
    image: 'https://source.unsplash.com/random/1',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description of Product 2',
    price: 200,
    shelfId: '2',
    image: 'https://source.unsplash.com/random/2',
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Description of Product 3',
    price: 300,
    shelfId: '3',
    image: 'https://source.unsplash.com/random/3',
  },
];

const PLACEHOLDER_SHELVES: Shelf[] = [
  {
    name: 'Shelf 1',
    id: '123',
    serialNumber: '123',
    date: '2021-09-21',
  },
  {
    name: 'Shelf 2',
    id: '456',
    serialNumber: '456',
    date: '2021-09-21',
  },
  {
    name: 'Shelf 3',
    id: '789',
    serialNumber: '789',
    date: '2021-09-21',
  },
];

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

  return PLACEHOLDER_SHELVES;
};

// get all products: path: app\(home)\product\page.tsx
export const getAllProducts = async () => {
  // fetch all products

  return PLACEHOLDER_PRODUCTS;
};

// get a product: path: app\(home)\product\[id]\page.tsx
export const getProduct = async (productId: string) => {
  // fetch a product

  return PLACEHOLDER_PRODUCTS[0];
};

// add a new product: path: app\(home)\product\new\page.tsx
export const addProductHandler = async (newProductData: Product) => {
  console.log(newProductData);
};

// delete a product: path: app\(home)\product\page.tsx
export const deleteProductHandler = async (productId: string) => {
  console.log(productId);
};

// delete a shelf: path: app\(home)\shelf\page.tsx
export const deleteShelfHandler = async (shelfId: string) => {
  console.log(shelfId);
};

// update a product: path: app\(home)\product\page.tsx
export const updateProductHandler = async (
  updatedProductData: Product
) => {
  // update a product
  console.log(updatedProductData);
};

// getSalesPerShift: path: app\(home)\shelf\page.tsx
export const getSalesPerShift = async () => {
  // fetch sales per shift
  const salesPerShift = {
    shift: ['Morning', 'Afternoon', 'Evening'],
    sales: [12, 19, 3],
  };

  return salesPerShift;
};
