import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard.tsx";
import RootLayout from "./pages/root-layout.tsx";
import TambahObat from "./pages/master-data/tambah-obat.tsx";
import DataObat from "./pages/master-data/data-obat.tsx";
import TableTransaksiMasuk from "./pages/transaksi/table-transaksi-masuk.tsx";
import Masuk from "./pages/transaksi/Masuk.tsx";
import Keluar from "./pages/transaksi/Keluar.tsx";
import TableTransaksiKeluar from "./pages/transaksi/table-transaksi-keluar.tsx";
import StockObat from "./pages/master-data/stock-obat.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/data-obat",
        element: <DataObat />,
      },
      {
        path: "/tambah-obat",
        element: <TambahObat />,
      },
      {
        path: "/stock-obat",
        element: <StockObat />,
      },
      {
        path: "/tambah-transaksi-masuk",
        element: <Masuk />,
      },
      {
        path: "/tambah-transaksi-keluar",
        element: <Keluar />,
      },
      {
        path: "/table-transaksi-masuk",
        element: <TableTransaksiMasuk />,
      },
      {
        path: "/table-transaksi-keluar",
        element: <TableTransaksiKeluar />,
      },
      {
        path: "/laporan",
        element: <DataObat />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
