import React, { useMemo } from "react";
import styled from "styled-components";

import { useTable, usePagination, useRowSelect, useGlobalFilter, useSortBy } from "react-table";
import MOCK_DATA from "../../config/MOCK_DATA.json";
import { COLUMNS } from "../../utils/tableCadastroContaContabil";
import { Checkbox } from "../Checkbox";
import { GlobalFilter } from "../GlobalFilter";

const TableContainer = styled.div`
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04aa6d;
    color: white;
  }
`;

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
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
            Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
          },
          ...columns,
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
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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

      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>

        <span>
          Page {pageIndex + 1} of {pageOptions.length}{" "}
        </span>

        <span>
          Go to page:{" "}
          <input
            type="number"
            placeholder=""
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          />
        </span>

        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>

        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      {/* <code>
        {JSON.stringify(
          {
            selectedFlatRows: selectedFlatRows.map((row) => row.original),
          },
          null,
          2
        )}
      </code> */}
    </>
  );
};
