import { useState } from "react";
import InputBox from "../../components/Items/InputBox";

// interface Obat{
//   nama: String;
//   satuan: String;
//   stock: Number;
//   harga: Number;
//   jenis: String;
// }

const Label = ({ text, htmlFor } : any) => {
  return (
    <label htmlFor={htmlFor} className="min-w-[70px]">
      {text}
    </label>
  );
};


const CardItem = ({ cardTitle } : any) => {
  const [data, setData] = useState({})
  // const [filter, setFilter] = useState("");
  
  const handleSubmit = async () =>{
    const res = await fetch(import.meta.env.VITE_API_OBAT_URL,{
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(data)
    })

    if(res.ok){
      alert('data berhasil di tambah')
    }else{
      alert('data gagal ditambah!')
    }
  }

  return (
    <div className="card card-compact w-[72vw] bg-base-100 shadow-lg text-sky-800">
      <div className="card-body max-h-[80vh]">
        <h2 className="card-title">{cardTitle}</h2>
          <div className="border rounded-md p-3 mb-2">
            <div className="input-box grid grid-cols-2 justify-center gap-2">
              <div className="input-box flex items-center gap-4">
                <Label text="Nama Obat" htmlFor="nama-obat" />
                <InputBox val={setData} nama={'nama'} id="nama-obat" addCLass={undefined} />
              </div>
              <div className="input-box flex items-center gap-4">
                <Label text="Harga" htmlFor="harga" />
                <InputBox val={setData} nama={'harga'} id="harga" addCLass={undefined} />
              </div>
              <div className="input-box flex items-center gap-4">
                <Label text="Satuan" htmlFor="satuan" />
                <InputBox val={setData} nama={'satuan'} id="satuan" addCLass={undefined} />
              </div>
              <div className="input-box flex items-center gap-4">
                <Label text="Stock" htmlFor="stock" />
                <InputBox val={setData} nama={'stock'} id="stock" addCLass={undefined} />
              </div>
              <div className="input-box flex items-center gap-4">
              <Label text="jenis" htmlFor="jenis" />
              <select name="jenis" onChange={e=>setData(prev=>({...prev, [e.target.name]: e.target.value}))} className="select select-info select-sm  mb-5">
                <option disabled selected>
                  Jenis Obat
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              </div>
              <button className="bg-primary h-fit w-fit rounded-md text-white p-2" onClick={handleSubmit}>Save</button>
             </div>
          </div>
        {/* <SearchInput placeholder="Cari Obat..." filtered={setFilter} /> */}
        {/* <Table filtered={filter} datas={datas} /> */}
      </div>
    </div>
  );
};

const TambahObat = () => {
  const datas = [
    {
      id: "12345678-9012-3456-7890-123456789012",
      nama: "OBAT_RINGAN",
      harga: "OBAT_RINGAN",
      jenis: "OBAT_RINGAN",
      satuan: "OBAT_RINGAN",
    },
  ];

  return (
    <div className=" absolute top-12 justify-center">
      <CardItem cardTitle="Tambah Data Obat" datas={datas} />
    </div>
  );
};

export default TambahObat;
