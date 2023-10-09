import React, { useMemo } from "react";
import { TableContainer, TableNav } from "../../styles/StyledTable";

import { useTable, usePagination, useRowSelect, useGlobalFilter, useSortBy } from "react-table";
import MOCK_DATA from "../../config/MOCK_DATA.json";
import { COLUMNS } from "../../utils/tableCadastroContaContabil";
import { Checkbox } from "../Checkbox";
import { Pagination } from "../Pagination";
import { GlobalFilter } from "../GlobalFilter";
import { TableFooter } from "../TableFooter";

export const TableCadastroContaContabil = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          ...columns,
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
          },
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    pageCount,
    gotoPage,
    prepareRow,
    selectedFlatRows,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;

  return (
    <>
      <TableNav>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <Pagination onChange={(e) => setPageSize(Number(e.target.value))} pageSize={pageSize} />
      </TableNav>

      <TableContainer>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableContainer>

      <TableFooter
        nextBtn={() => nextPage()}
        prevBtn={() => previousPage()}
        lastPage={() => gotoPage(pageCount - 1)}
        firstPage={() => gotoPage(0)}
        nextDisabled={!canNextPage}
        prevDisabled={!canPreviousPage}
        pageIndex={pageIndex + 1}
        pageLength={pageOptions.length}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(page);
        }}
      />
    </>
  );
};
