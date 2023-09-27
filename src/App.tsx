import Dashboard from "./Pages/Dashboard.js";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


function App() {
    return (
        <>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Sidebar></Sidebar>
        </>
    );
}

export default App;
