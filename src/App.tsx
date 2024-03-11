import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./pages/DashboardAdmin";
import DetailArticle from "./pages/DetailArticle";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import ListPaslon from "./pages/ListPaslon";
import ListPartai from "./pages/ListPartai";
import AddPaslon from "./pages/AddPaslon";
import AddPartai from "./pages/AddPartai";
import ModalLogin from "./components/modalLogin";
import ModalRegister from "./components/modalRegister";
import ModalVote from "./components/modalVote";
import Modal from "./pages/Test";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/detail-article" Component={DetailArticle} />
        {/* restricted */}
        <Route path="/vote" Component={Vote} />
        <Route path="/dashboard-admin" Component={DashboardAdmin} />
        <Route path="/list-paslon" Component={ListPaslon} />
        <Route path="/add-paslon" Component={AddPaslon} />
        <Route path="/list-partai" Component={ListPartai} />
        <Route path="/add-partai" Component={AddPartai} />
        <Route path="/login" Component={ModalLogin} />
        <Route path="/register" Component={ModalRegister} />
        <Route path="/voting" Component={ModalVote} />
        <Route path="/test" Component={Modal} />
      </Routes>
    </div>
  )
}

export default App
