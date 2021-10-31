import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home";
import CadastroGerente from "@/pages/CadastroGerente";
import CadastroFuncionario from "@/pages/CadastroFuncionario";
import CadastroProjeto from "@/pages/CadastroProjeto";

Vue.use(Router);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "cadastro gerente",
    path: "/cadastroGerente",
    component: CadastroGerente,
  },
  {
    name: "cadastro funcionario",
    path: "/cadastroFuncionario",
    component: CadastroFuncionario,
  },
  {
    name: "cadastro projeto",
    path: "/cadastroProjeto",
    component: CadastroProjeto,
  },
];

const router = new Router({ routes });

export default router
