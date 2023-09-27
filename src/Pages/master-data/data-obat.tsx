import { useState } from "react";
import SearchInput from "../../components/Items/SearchInput";
import Table from "../../components/Table";
import CardItem from "../../components/Card";
import { useQuery } from "@tanstack/react-query";

const DataObat = () => {
  const [filter, setFilter] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const raw = await fetch(import.meta.env.VITE_API_OBAT_URL);
      const res = raw.json();
      return res;
    },
    queryKey: ["obat"],
  });

  const columns = [
    {
      header: "ID",
      accessorKey: "",
    },
    {
      header: "Nama Obat",
      accessorKey: "nama",
    },
    {
      header: "Jenis Obat",
      accessorKey: "jenis",
    },
    {
      header: "Harga Obat",
      accessorKey: "harga",
    },
    {
      header: "Satuan Obat",
      accessorKey: "satuan",
    },
    {
      header: "Stok",
      accessorKey: "stock",
    },
    {
      header: "Waktu Dibuat",
      accessorKey: "created_at",
    },
    {
      header: "Opsi",
      accessorKey: "",
    },
  ];
  return (
    <div className="absolute top-12 flex gap-10 justify-center">
      <CardItem cardTitle="Tabel Obat">
        <SearchInput placeholder="Cari Obat..." filtered={setFilter} />

        {isLoading ? (
          <img src="/loading.svg" className="w-[200px] mx-auto m-2" />
        ) : (
          data && (
            <Table
              datas={data.data}
              columns={columns}
              filter={filter}
              checkSuccess={setIsSuccess}
              title={"Data Obat"}
            />
          )
        )}
      </CardItem>
      <div className="toast toast-top toast-end">
        {isSuccess && (
          <div className="alert alert-success">
            <span>Data Berhasil di hapus.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataObat;
