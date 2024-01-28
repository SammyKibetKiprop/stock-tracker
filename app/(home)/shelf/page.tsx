import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

// list of shelves with productName, serialNumber, shelfId, date
// add shelf button

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

const Shelf = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Serial Number</TableCell>
              <TableCell>Shelf ID</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {shelves.map((shelf) => (
              <TableRow key={shelf.shelfId}>
                <TableCell>{shelf.productName}</TableCell>
                <TableCell>{shelf.serialNumber}</TableCell>
                <TableCell>{shelf.shelfId}</TableCell>
                <TableCell>{shelf.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Shelf;
