import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.tsx";
import RootLayout from "./Pages/root-layout.tsx";
import TambahObat from "./Pages/master-data/tambah-obat.tsx";
import DataObat from "./Pages/master-data/data-obat.tsx";
import TableTransaksiMasuk from "./Pages/Transaksi/table-transaksi-masuk.tsx";
import Masuk from "./Pages/Transaksi/Masuk.tsx";
import Keluar from "./Pages/Transaksi/Keluar.tsx";
import TableTransaksiKeluar from "./Pages/Transaksi/table-transaksi-keluar.tsx";
import StockObat from "./Pages/master-data/stock-obat.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVs8QQoqK23JC_Tkc7QoyKoqydzYDeaoA",
  authDomain: "apotek-jayapan.firebaseapp.com",
  projectId: "apotek-jayapan",
  storageBucket: "apotek-jayapan.appspot.com",
  messagingSenderId: "488200879681",
  appId: "1:488200879681:web:70c722cc7513b78eb050c0",
  measurementId: "G-YPVBTCWXBE"
};

// Initialize Firebase
initializeApp(firebaseConfig);
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
