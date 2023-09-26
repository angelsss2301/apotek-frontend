const CardItem = ({ cardTitle, children }: any) => {
    return (
        <div className="card card-compact w-[72vw] max-h-[85vh]  bg-base-100 shadow-lg text-sky-800">
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                {children}
            </div>
        </div>
    );
};

export default CardItem;
