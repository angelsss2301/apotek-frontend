import { useState } from "react";
import CardItem from "../../components/Card";
import SearchInput from "../../components/Items/SearchInput";
import Table from "../../components/Table";
import { useQuery } from "@tanstack/react-query";

interface span{
    text: String;
    variant: String;
}
// const Span = ({ text, variant } : span) => {
//     return <span className={`p-2 ${variant} bg-green `}>{text}</span>;
// };

const StockObat = () => {
    const [filter, setFilter] = useState<string>("");

    const {data} = useQuery({
        queryFn: async()=>{
            const raw = await fetch('http://localhost:3000/obat')
            const res = await raw.json()
            return res
            
        },queryKey: ['stock']
    })

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
    ];

    return (
        <div className="absolute top-12 flex gap-10 justify-center">
            <CardItem cardTitle="Stock Obat">
                <SearchInput placeholder="Cari Obat..." filtered={setFilter} />
                {data && (
                    <Table datas={data.data} columns={columns} filter={filter} title={'Stock Obat'} />
                )}
            </CardItem>
        </div>
    );
};

export default StockObat;
