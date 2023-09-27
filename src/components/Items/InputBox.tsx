const InputBox = ({ id, addCLass, nama, val }: any) => {
  const handleChange = (e : any) => {
    val((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={`flex gap-5 items-center ${addCLass}`}>
      <input
        name={nama}
        onChange={handleChange}
        type="text"
        placeholder="Ketik disini.."
        className="input input-bordered input-sm input-info min-w-[300px]"
        id={id}
      />
    </div>
  );
};

export default InputBox;
