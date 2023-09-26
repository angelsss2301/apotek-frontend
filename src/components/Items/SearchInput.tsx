const SearchInput = ({ placeholder, filtered }) => {
    return (
        <div className="form-control w-1/2">
            <div className="input-group">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => filtered(e.target.value)}
                    className="input input-sm input-bordered w-full"
                />
             
            </div>
        </div>
    );
};

export default SearchInput;
