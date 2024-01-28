import { Card } from '@mui/material';

const cardItems = [
  {
    title: 'Category',
    value: '5',
  },
  {
    title: 'Sales',
    value: '5',
  },
  {
    title: 'Product Type',
    value: '5',
  },
];

const Dashboard = () => {
  return (
    <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 w-[90vw] px-10 sm:px-2 mx-auto md:mx-0 sm:w-full md:max-w-screen-sm'>
      {cardItems.map((item, index) => (
        <Card
          key={index}
          className='min-w-full md:min-w-auto w-full max-w-40 h-52 shadow-lg rounded-md bg-white p-4 cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out'
        >
          <h3 className='font-semibold text-xl tracking-wide'>
            {item.title}
          </h3>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
