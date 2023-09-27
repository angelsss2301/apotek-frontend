import { MdDashboardCustomize, MdOutlineLocalPharmacy } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const iconSize = "h-5 w-6 mr-1";

    return (
        <div className="drawer lg:drawer-open z-10">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-[270px] min-h-full bg-base-200 text-sky-800 py-12">
                    <ul className="menu bg-base-200 w-64 rounded-box">
                        <li>
                            <summary>
                                <MdDashboardCustomize className={iconSize} />
                                <Link to="/dashboard">Dashboard</Link>
                            </summary>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <MdOutlineLocalPharmacy
                                        className={iconSize}
                                    />
                                    Master Data
                                </summary>
                                <ul className="ml-10">
                                    <li>
                                        <Link to="/data-obat">Data Obat</Link>
                                    </li>
                                    <li>
                                        <Link to="/tambah-obat">
                                            Tambah Obat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/stock-obat">Stock Obat</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <BiTransfer className={iconSize} />
                                    Transaksi
                                </summary>
                                <ul className="ml-10">
                                    <li>
                                        <Link to="/tambah-transaksi-masuk">
                                            Transaksi Masuk
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tambah-transaksi-keluar">
                                            Transaksi Keluar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/table-transaksi-masuk">
                                            Table Transaksi Masuk
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/table-transaksi-keluar">
                                            Table Transaksi Keluar
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
