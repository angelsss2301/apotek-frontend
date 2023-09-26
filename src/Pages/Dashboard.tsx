import { GiHealthDecrease, GiHealthIncrease } from "react-icons/gi";

import { RiHealthBookFill } from "react-icons/ri";

const Dashboard = () => {
    const iconSize = "text-4xl";
    const color = { color: "#38bdf8" };

    return (
        <div className="stats shadow absolute top-12 -z-10">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <GiHealthDecrease className={iconSize} style={color} />
                </div>
                <div className="stat-title">Total Obat Masuk</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <GiHealthIncrease className={iconSize} style={color} />
                </div>

                <div className="stat-title">Total Obat Keluar</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <RiHealthBookFill className={iconSize} style={color} />
                </div>
                <div className="stat-title">Stok Persediaan Obat</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
    );
};

export default Dashboard;
