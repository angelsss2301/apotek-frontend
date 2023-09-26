import Dashboard from "./pages/dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


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
