import { useState } from "react";
import Table from "../../components/Table";
import CardItem from "../../components/Card";
import SearchInput from "../../components/Items/SearchInput";
import { useQuery } from "@tanstack/react-query";

const TableTransaksiKeluar = () => {
  const [filter, setFilter] = useState();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const raw = await fetch(import.meta.env.VITE_API_TRANSAKSI_MASUK);
      const result = await raw.json();
      return result.data;
    },
    queryKey: ["purchases"],
  });

  const columns = [
    {
      header: "Obat ID",
      accessorKey: "obatId",
    },
    {
      header: "Nama Obat",
      accessorKey: "obat.nama",
    },
    {
      header: "Jumlah",
      accessorKey: "jumlah",
    },
    {
      header: "Waktu Dibuat",
      accessorKey: "created_at",
    },
  ];
  return (
    <div className="absolute top-12 flex gap-10 justify-center">
      <CardItem cardTitle="Data Transaksi Masuk">
        <SearchInput placeholder="Cari Transaksi..." filtered={setFilter} />
        
        {isLoading ? (
          <img src="/loading.svg" className="w-[200px] mx-auto m-2" />
        ) : (
          data && (
            <Table
              datas={data}
              columns={columns}
              filter={filter}
              title={"Data Transaksi Masuk"}
            />
          )
        )}
      </CardItem>
    </div>
  );
};

export default TableTransaksiKeluar;
