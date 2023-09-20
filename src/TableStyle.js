
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableRow } from '@mui/material';
import Table from '@mui/material/Table';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    border :'1px solid #e0e0e0',
    fontWeight: 800 
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border :'1px solid #e0e0e0'
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    border :'1px solid #e0e0e0'
  },
  '&:last-child td, &:last-child th': {
    border :'1px solid #e0e0e0'
  },
}));

export const StyledTable = styled(Table)`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: 1px solid ${props => props.theme.palette.divider};
    padding: 8px;
    text-align: center;
  }
`;