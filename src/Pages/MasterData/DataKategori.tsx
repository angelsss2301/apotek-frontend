
import { useEffect, useState } from 'react';
import Table from '../../components/Items/Table';

const DataKategori = () => {
  const [data, setData] = useState<Array>([])

  useEffect(()=>{
      const getData = async () =>{
        const raw = await fetch('http://localhost:3000/obat')
        const {data} = await raw.json()
        setData(data)
      }
      getData()
  }, [])

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
    accessorKey: ""
  }
];

const header = ["ID", "Nama Obat", "Jenis Obat", "Satuan Obat", "Stok", "Waktu Dibuat"]

// const columns  = [
//   {
//     header: "Nama Obat",
//     accessorKey: "namaObat",
//   },
//   {
//     header: "Harga",
//     accessorKey: "harga",
//   },
//   {
//     header: "Jenis Obat",
//     accessorKey: "jenisObat",
//   },
//   {
//     header: "Satuan Obat",
//     accessorKey: "satuanObat",
//   },
//   {
//       header: "",
//       accessorKey: "opsi"
//   }
// ];

  return (
    <div>
      <h1 className='text-center text-xl my-4 w-fit bg-primary text-white p-2 rounded-md'>Table Obat</h1>
      {data && <Table datas={data} columns={columns} header={header} />}
    </div>
  )
}

export default DataKategori