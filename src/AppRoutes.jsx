import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/main/Index";
import Login from "./pages/main/Login";
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
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Login />} />

        <Route
          path="/home"
          element={
            <Workbench title="Inicio" page="0">
              <Inicio />
            </Workbench>
          }
        />
        <Route
          path="/quebrar-arquivo"
          element={
            <Workbench title="Quebrar arquivo" page="1">
              <QuebrarArquivo />
            </Workbench>
          }
        />
        <Route
          path="/extrato-bancario"
          element={
            <Workbench title="Lançamento Extrato Bancário" page="2">
              <ExtratoBancario />
            </Workbench>
          }
        />
        <Route
          path="/atualizar-usuario"
          element={
            <Workbench title="Atualizar Usuário" page="3">
              <AtualizarUsuario />
            </Workbench>
          }
        />
        <Route
          path="/cadastro-clientes"
          element={
            <Workbench title="Cadastro Clientes" page="4">
              <CadastroClientes />
            </Workbench>
          }
        />
        <Route
          path="/cadastro-conta-contabil"
          element={
            <Workbench title="Cadastro Conta Contábil" page="5">
              <CadastroContaContabil />
            </Workbench>
          }
        />
        <Route
          path="/cadastro-plano-contas"
          element={
            <Workbench title="Cadastro Plano Contas" page="6">
              <CadastroPlanoContas />
            </Workbench>
          }
        />
        <Route
          path="/cadastro-depara-historico"
          element={
            <Workbench title="Cadastro Depara Histórico" page="7">
              <CadastroDeparaHistorico />
            </Workbench>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
