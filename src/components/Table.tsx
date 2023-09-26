import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, useMemo, useState, useRef } from "react";
import Button from "./Items/Button";
import moment from "moment";
import { useQueryClient } from "@tanstack/react-query";
import { downloadExcel, useDownloadExcel } from "react-export-table-to-excel";
// import fakeData from "../assets/MOCK_DATA.json"

const Table = ({ columns, datas, filter, checkSuccess, title }: any) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const tableRef = useRef(null);

  const queryClient = useQueryClient()

  const data = useMemo(() => datas, [datas]);

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),

    state: {
      sorting: sorting,
      globalFilter: filter,
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const handleDelete = async (borrowId: string) => {
    checkSuccess(true);
    const data = await fetch(`http://localhost:3000/obat/${borrowId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (data.ok) {
      queryClient.invalidateQueries({
        queryKey: ["obat"],
      });
      checkSuccess(true);
      setTimeout(() => {
        checkSuccess(false);
      }, 3000);
    }
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `${title}-${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
    sheet: "sheet 1",
  });

  return (
    <div className="table mt-5">
      <table ref={tableRef} className="table-zebra mx-auto text-center w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} id={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.index}
                  id={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} id={row.id}>
              {row.getVisibleCells().map((cell, i) => (
                <Fragment key={`${cell.id}${i}`}>
                  {cell.column.id !== "Opsi" ? (
                    cell.column.id === "created_at" ? (
                      <td key={cell.id}>
                        {moment(cell.row.original.created_at).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )}
                      </td>
                    ) : cell.column.id !== "stock" ? (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ) : (
                      <td key={cell.id}>
                        <span
                          className={`${
                            cell.row.original.stock <= 0
                              ? "bg-red-500"
                              : "bg-green-500"
                          } text-white p-2 rounded-md`}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </span>
                      </td>
                    )
                  ) : (
                    <td
                      key={cell.id}
                      onClick={() => handleDelete(cell.row.original.id)}
                      className="cursor-pointer"
                    >
                      delete
                    </td>
                  )}
                </Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn-group mt-5 w-full flex justify-center">
        <button
          className="rounded-md btn"
          onClick={() => table.setPageIndex(0)}
        >
          Tabel Pertama
        </button>

        <button
          className="rounded-md btn"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Tabel Sebelumnya
        </button>

        <button
          className="rounded-md btn"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Tabel Selanjutnya
        </button>

        <button
          className="rounded-md btn"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Tabel Terakhir
        </button>
      </div>
      <button
        title="Download Data"
        className="rounded-md btn absolute top-[-70px] right-0"
        onClick={onDownload}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </button>

      {success && (
        <div className="toast toast-start">
          <div className="alert alert-success">
            <span>Kamu berhasil menghapus Obat.</span>
          </div>
        </div>
      )}
      {error && (
        <div className="toast toast-start">
          <div className="alert alert-info">
            <span>Kamu gagal menghapus Obat.</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Table;
