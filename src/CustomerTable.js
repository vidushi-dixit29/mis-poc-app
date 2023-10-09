import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import TableCell from '@mui/material/TableCell';
import { StyledTable } from "./TableStyle";

function createData(name, py, budget, actual, actualCompare, budgetCompare, forecast) {
  return { name, py, budget, actual, actualCompare, budgetCompare, forecast };
}

const StyledTableCell = styled(TableCell)`
&& {
  text-align: left;
}
`;

const rows = [
  createData('Amazon TS Ops', 700, 600, 700, 100, 0, 500),
  createData('Amazon Prime', 200, 100, 200, 100, 1, 200),
  createData('Adobe Creative Cloud', 400, 400, 400, 0, 0, 100),
  createData('Microsoft WWL', 100, 400, 0, 400, 1, 0),
  createData('Microsoft CSS', 100, 100, 100, 0, 0, 100),
  createData('Spark', 200, 200, 200, 0, 0, 150),
  createData('Tableau', 100, 100, 100, 0, 0, 100),
  createData('Coursera', 100, 100, 100, 0, 0, 300),
  createData('Deloitte MCS Limited', 100, 100, 100, 0, 0, 100)
];

const CutomerTable = () => {
  const totalPy = rows.reduce((sum, row) => sum + row.py, 0);
  const totalBudget = rows.reduce((sum, row) => sum + row.budget, 0);
  const totalActual = rows.reduce((sum, row) => sum + row.actual, 0);
  const totalActualCompare = rows.reduce((sum, row) => sum + parseInt(row.actualCompare, 10), 0);
  const totalBudgetCompare = rows.reduce((sum, row) => sum + parseInt(row.budgetCompare, 10), 0);
  const totalForecast = rows.reduce((sum, row) => sum + row.forecast, 0);

  return (
    <TableContainer component={Paper}>
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell style={{ backgroundColor: '#008080', color: 'white' }}>PY</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#ADD8E6" }}>Budget</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: '#e1ad01' }}>Actual</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'grey', color: 'white' }} colSpan={2}>Actual vs Budget</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: '#FFE5B4' }}>Forecast</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <StyledTableCell>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.py}</StyledTableCell>
              <StyledTableCell>{row.budget}</StyledTableCell>
              <StyledTableCell>{row.actual}</StyledTableCell>
              <StyledTableCell>{row.actualCompare}</StyledTableCell>
              <StyledTableCell>{row.budgetCompare}</StyledTableCell>
              <StyledTableCell>{row.forecast}</StyledTableCell>
            </TableRow>
          ))}

          {/* Total Row */}
          <TableRow style={{ backgroundColor: "#e0e0e0" }}>
            <StyledTableCell>Revenue</StyledTableCell>
            <StyledTableCell>{totalPy}</StyledTableCell>
            <StyledTableCell>{totalBudget}</StyledTableCell>
            <StyledTableCell>{totalActual}</StyledTableCell>
            <StyledTableCell>{totalActualCompare}</StyledTableCell>
            <StyledTableCell>{totalBudgetCompare}</StyledTableCell>
            <StyledTableCell>{totalForecast}</StyledTableCell>
          </TableRow>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
export default CutomerTable;
