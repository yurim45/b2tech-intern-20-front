import React from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import styled from 'styled-components';

const TableContainer = styled.table`
  width: 100%;
  font-size: 1vw;
`;

const TableHeaderCell = styled.th`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.fontGray};
`;

const TableDataCell = styled.td`
  width: initial;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.fontGray};
  text-align: center;
`;

function TableForm({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <>
      <TableContainer {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableHeaderCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  {<i className="fas fa-sort" />}
                </TableHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <TableDataCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableDataCell>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </>
  );
}

export default TableForm;
