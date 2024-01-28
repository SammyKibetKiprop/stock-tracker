'use client';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Morning', 'Afternoon', 'Evening'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1,
    },
  ],
};

const shelves = [
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Shelf = () => {
  return (
    <div>
      <div className='flex flex-col justify-between items-start gap-10'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell>Serial Number</StyledTableCell>
                <StyledTableCell>Shelf ID</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {shelves.map((shelf) => (
                <TableRow key={shelf.shelfId}>
                  <StyledTableCell>
                    {shelf.productName}
                  </StyledTableCell>
                  <StyledTableCell>
                    {shelf.serialNumber}
                  </StyledTableCell>
                  <StyledTableCell>{shelf.shelfId}</StyledTableCell>
                  <StyledTableCell>{shelf.date}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <button className='bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-sm text-white self-end text-sm'>
          Add Shelf
        </button>
      </div>

      <div className='flex flex-col justify-between items-start gap-10'>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Shelf;
