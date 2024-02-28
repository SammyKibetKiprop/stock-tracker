import { AuthState } from '@/app/(security)/auth/page';

// send a login/signup request: path: app\(security)\auth\page.tsx
export const userAuthHandler = async (authState: AuthState) => {
  const { username, password, isLogin } = authState;
  console.log({ username, password, isLogin });

  // do the necessary depending on whether it is login or signup
};
