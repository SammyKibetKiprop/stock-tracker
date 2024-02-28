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

import { Product } from '@/utils/interfaces';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



const ProductsTable = ({ products }: { products: Product[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Product Description</StyledTableCell>
            <StyledTableCell>Product Price</StyledTableCell>
            <StyledTableCell>Shelf ID</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.productId}>
              <StyledTableCell>{product.productName}</StyledTableCell>
              <StyledTableCell>
                {product.productDescription}
              </StyledTableCell>
              <StyledTableCell>
                {product.productPrice}
              </StyledTableCell>
              <StyledTableCell>{product.shelfId}</StyledTableCell>
              <StyledTableCell>{product.image}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
