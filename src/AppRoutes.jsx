import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/main/Index";
import Login from "./pages/main/Login";
import RecoverPassword from "./pages/main/RecoverPassword";
import Register from "./pages/main/Register";
import Workbench from "./pages/main/Workbench";

import Inicio from "./pages/navigation/Inicio";
import QuebrarArquivo from "./pages/navigation/QuebrarArquivo";
import ExtratoBancario from "./pages/navigation/ExtratoBancario";
import AtualizarUsuario from "./pages/navigation/AtualizarUsuario";
import CadastroClientes from "./pages/navigation/CadastroClientes";
import CadastroContaContabil from "./pages/navigation/CadastroContaContabil";
import CadastroPlanoContas from "./pages/navigation/CadastroPlanoContas";
import CadastroDeparaHistorico from "./pages/navigation/CadastroDeparaHistorico";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login/recuperar-senha" element={<RecoverPassword />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Login />} />

        <Route
          path="/home"
          element={
            <Workbench title="Home" page="0">
              <Inicio />
            </Workbench>
          }
        />
        <Route
          path="/split-file"
          element={
            <Workbench title="Split File" page="1">
              <QuebrarArquivo />
            </Workbench>
          }
        />
        <Route
          path="/transaction-entry"
          element={
            <Workbench title="Transaction Entry" page="2">
              <ExtratoBancario />
            </Workbench>
          }
        />
        <Route
          path="/profile-update"
          element={
            <Workbench title="Update Profile" page="3">
              <AtualizarUsuario />
            </Workbench>
          }
        />
        <Route
          path="/costumer-registration"
          element={
            <Workbench title="Costumer Registration" page="4">
              <CadastroClientes />
            </Workbench>
          }
        />
        <Route
          path="/account-registration"
          element={
            <Workbench title="Account Registration" page="5">
              <CadastroContaContabil />
            </Workbench>
          }
        />
        <Route
          path="/general-chart-of-accounts"
          element={
            <Workbench title="General Chart of Accounts" page="6">
              <CadastroPlanoContas />
            </Workbench>
          }
        />
        <Route
          path="/mapping-history"
          element={
            <Workbench title="Mapping History" page="7">
              <CadastroDeparaHistorico />
            </Workbench>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
