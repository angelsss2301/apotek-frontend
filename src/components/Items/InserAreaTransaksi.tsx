import Button from "./Button";
import InputBox from "./InputBox";

const Label = ({ text, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="min-w-[70px]">
            {text}
        </label>
    );
};

const FormArea = ({ children }) => {
    return <div className="input-box flex items-center gap-4">{children}</div>;
};

const InsertAreaTransaksi = ({ showHargaLabel }) => {
    return (
        <div className="border rounded-md p-3 mb-2">
            <select className="select select-info select-sm w-full max-w-xs mb-5">
                <option disabled selected>
                    Nama Obat
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <div className="input-box flex gap-5 flex-col">
                <FormArea>
                    <Label text="Tanggal Masuk" htmlFor="tgl-masuk" />
                    <InputBox id="tgl-masuk" />
                </FormArea>
                <FormArea>
                    <Label text="Jumlah" htmlFor="jumlah" />
                    <InputBox id="jumlah" addCLass="ml-6" />
                </FormArea>
                {showHargaLabel && (
                    <FormArea>
                        <Label text="Harga" htmlFor="harga" />
                        <InputBox id="harga" addCLass="ml-6" />
                    </FormArea>
                )}
                <Button text="Save" variant="btn-primary w-1/12 ml-[110px]" />
            </div>
        </div>
    );
};

export default InsertAreaTransaksi;
