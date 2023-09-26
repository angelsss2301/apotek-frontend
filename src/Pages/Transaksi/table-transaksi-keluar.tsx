import { useEffect, useState } from "react";
import Table from "../../components/Table";
import CardItem from "../../components/Card";
import SearchInput from "../../components/Items/SearchInput";

const TableTransaksiKeluar = () => {
    const [data, setData] = useState<Array>([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const getData = async () => {
            const raw = await fetch("http://localhost:3000/sales");
            const { data } = await raw.json();
            setData(data);
        };
        getData();
    }, []);

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
        {
            header: "Nama Obat",
            accessorKey: "obat.nama",
        },
    ];

    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Data Transaksi Keluar">
                <SearchInput
                    placeholder="Cari Transaksi..."
                    filtered={setFilter}
                />
                {data && (
                    <Table datas={data} columns={columns} filter={filter} title={'Data Transaksi Keluar'} />
                )}
            </CardItem>
        </div>
    );
};

export default TableTransaksiKeluar;
