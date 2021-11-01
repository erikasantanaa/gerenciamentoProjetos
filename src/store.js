import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  gerentes: [],
  projetos: []
};

const mutations = {
  updateGerente(store, gerentes) {
    store.gerentes.push(gerentes);
  },
  updateProjeto(store, projetos) {
      store.projetos.push(projetos)
  }
};

const actions = {
  requestGerentes({ commit }, gerentes) {
    commit("updateGerente", gerentes);
  },
  requestProjeto({commit}, projetos) {
      commit("updateProjeto", projetos)
  }
};

const getters = {
  getGerentes: (state) => state.gerentes,
  getProjetos: (state) => state.projetos
};

const store = new Vuex.Store({ state, actions, mutations, getters });

export default store;
