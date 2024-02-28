import { AuthState, NewShelfData } from '@/utils/interfaces';

// send a login/signup request: path: app\(security)\auth\page.tsx
export const userAuthHandler = async (authState: AuthState) => {
  const { username, password, isLogin } = authState;
  console.log({ username, password, isLogin });

  // do the necessary depending on whether it is login or signup
};

// add a new shelf: path: app\(home)\shelf\new\page.tsx
export const addShelfHandler = async (newShelfData: NewShelfData) => {
  console.log(newShelfData);
};

// get all shelves: path: app\(home)\shelf\page.tsx
export const getAllShelves = async () => {
  // fetch all shelves
  const placeholderShelves = [
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
