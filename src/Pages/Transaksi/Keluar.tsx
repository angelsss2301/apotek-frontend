import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Fragment, useState } from "react";

interface obat {
  nama: String;
  stock: Number;
  jenis: String;
  harga: Number;
}
const Masuk = () => {
  const [stock, setStock] = useState();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const raw = await fetch("http://localhost:3000/obat");
      const res = raw.json();
      return res;
    },
    queryKey: ["obat"],
  });

  const handleUpdate = async (id: string) => {
    await fetch("http://localhost:3000/sale", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        stock: Number(stock),
      }),
    });

    queryClient.invalidateQueries({
      queryKey: ["obat"],
    });
  };

  return (
    <div className="absolute top-12 grid grid-cols-2 gap-8 w-full">
      {data &&
        data.data.map((obat: obat) => (
          <Fragment key={obat.id}>
            <table className="table bg-teal-300 w-1/2">
              <thead>
                <tr>
                  <th>Nama Obat</th>
                  <th>Jenis Obat</th>
                  <th>Stock</th>
                  <th>Harga</th>
                  <th>Penambahan</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>{obat.nama}</td>
                  <td>{obat.jenis}</td>
                  <td>{Number(obat.stock)}</td>
                  <td>{Number(obat.harga)}</td>
                  <td>
                    <form>
                      <input
                        onChange={(e) => setStock(e.currentTarget.value)}
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={stock}
                        className="ml-2 border-2 border-gray-300 p-2 rounded-md w-[50px]"
                      />
                    </form>
                  </td>
                  <td>
                    <button
                      className="p-2 bg-teal-500 w-full rounded-md"
                      onClick={() => {
                        handleUpdate(obat.id)
                        setStock("")
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        ))}
    </div>
  );
};

export default Masuk;