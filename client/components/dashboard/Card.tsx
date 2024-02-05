import { Card, CardHeader, CardMedia } from '@mui/material';
import Link from 'next/link';

interface MainCardProps {
  item: {
    id: number;
    title: string;
    color: string;
    href: string;
  };
}

const MainCard = ({ item }: MainCardProps) => {
  return (
    <Link href={item.href}>
      <Card className='min-w-full md:min-w-auto w-full max-w-40 h-64 shadow-lg rounded-md bg-white cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out relative z-10'>
        <h3 className='font-semibold text-xl tracking-wide p-4'>
          {item.title}
        </h3>
        <CardMedia
          className='h-full w-full'
          image={`https://source.unsplash.com/random/${item.id}`}
          title='Random Image'
        />
      </Card>
    </Link>
  );
};

export default MainCard;
