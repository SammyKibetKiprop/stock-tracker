import { TextField } from '@mui/material';
import Link from 'next/link';

const Login = () => {
  return (
    <div className=' max-w-[26rem] w-screen min-h-72 h-fit rounded-lg p-8 bg-white shadow-lg grid gap-16'>
      <h2 className='font-bold tracking-wide text-2xl'>Login</h2>
      <form className='grid gap-10'>
        <TextField
          id='email'
          type='email'
          label='Username'
          variant='filled'
        />
        <TextField
          id='password'
          type='password'
          label='Password'
          variant='filled'
        />
        <button className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-sky-500 text-white rounded-md p-4 font-semibold'>
          Login
        </button>
      </form>

      <div className='flex flex-col gap-4 text-sm font-medium tracking-wide'>
        <Link href='#'>
          Forgot{' '}
          <span className='text-blue-700 hover:underline cursor-pointer'>
            Password?
          </span>
        </Link>

        <Link href='/auth/register'>
          Don&apos;t have an account?{' '}
          <span className='text-blue-700 hover:underline cursor-pointer'>
            Register
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
