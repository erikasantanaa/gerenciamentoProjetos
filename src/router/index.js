import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home";
import CadastroGerente from "@/pages/CadastroGerente";
import CadastroFuncionario from "@/pages/CadastroFuncionario";

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
];

const router = new Router({ routes });

export default router
