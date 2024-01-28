import { TextField } from '@mui/material';

const Login = () => {
  return (
    <div className=' max-w-96 w-screen min-h-72 h-fit rounded-lg p-6 bg-white shadow-lg grid gap-12'>
      <h2 className='font-semibold tracking-wide text-xl'>Login</h2>
      <form className='grid gap-10'>
        <TextField
          id='email'
          type='email'
          label='Username'
          variant='filled'
          size='small'
        />
        <TextField
          id='password'
          type='password'
          label='Password'
          variant='filled'
          size='small'
        />
        <button className=' bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-sky-500 text-white rounded-md p-4'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
