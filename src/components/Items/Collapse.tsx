import Button from "./Button";

const Collapse = ({ children, dataObat }) => {
    return (
        <div className="collapse">
            <input type="checkbox" className="max-w-[200px]" />
            <div className="collapse-title">
                {dataObat ? (
                    <Button text="Tambah Obat" variant="btn-primary " />
                ) : (
                    <Button text="Tambah Transaksi" variant="btn-primary " />
                )}
            </div>
            <div className="collapse-content">{children}</div>
        </div>
    );
};

export default Collapse;
