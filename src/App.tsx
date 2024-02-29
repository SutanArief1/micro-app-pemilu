import { Route, Routes } from "react-router-dom";
import Body from "./components/body";
import Footer from "./components/footer";
import NavbarAdmin from "./components/navbar/navbarAdmin";
import DashboardAdmin from "./pages/DashboardAdmin";
import DetailArticle from "./pages/DetailArticle";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import ListPaslon from "./pages/ListPaslon";
import ListPartai from "./pages/ListPartai";
import AddPaslon from "./pages/AddPaslon";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/detail-page" />
        {/* restricted */}
        <Route path="/vote" />
        <Route path="/dashboard-admin" Component={DashboardAdmin} />
        <Route path="/list-paslon" Component={ListPaslon} />
        <Route path="/add-paslon" Component={AddPaslon} />
        <Route path="/list-partai" Component={ListPartai} />
        <Route path="/add-partai" />
      </Routes>
    </div>
  )
}

export default App
