import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  IconButton,
  Collapse,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {StyledTableCell, StyledTableRow} from "./TableStyle.js"; 


const NestedTable = ({ data, outerColumns, innerColumns }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index) => {
    setExpandedRow((prevState) => (prevState === index ? null : index));
  };

  const splitContent = (content, delimiter = "\n") => {
    return content && content.split(delimiter).map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <StyledTableRow>
            {outerColumns.map((column, index) => (
              <StyledTableCell key={index}>{splitContent(column)}</StyledTableCell>
            ))}
            <StyledTableCell></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <StyledTableRow>
                {item.outerData.map((outerData) => (
                <StyledTableCell style={{ color: outerData.color }}  key={index}>{outerData.component ? outerData.component : splitContent(outerData.value)}</StyledTableCell>
              ))}
                <StyledTableCell>
                  <IconButton size="small" onClick={() => toggleRow(index)}>
                    {expandedRow === index ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
              {expandedRow === index && (
                <StyledTableRow>
                  <StyledTableCell colSpan={outerColumns.length + 1}>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                      <Table>
                        <TableHead>
                          <StyledTableRow>
                            {innerColumns.map((column, columnIndex) => (
                              <StyledTableCell key={columnIndex}>{splitContent(column)}</StyledTableCell>
                            ))}
                          </StyledTableRow>
                        </TableHead>
                        <TableBody>
                          {item.innerData.map((innerItem, innerIndex) => (
                            <StyledTableRow key={innerIndex}>
                            {innerItem.map((innerItemValue) => (
                              <StyledTableCell color={innerItemValue.color} key={innerIndex}>{innerItemValue.component ? innerItemValue.component : splitContent(innerItemValue.value)}</StyledTableCell>
                            ))}
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NestedTable;
