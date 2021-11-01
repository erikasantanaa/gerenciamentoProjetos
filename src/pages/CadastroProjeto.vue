<template>
  <div>
    <Header />
    <Breadcrumbs :routePaths="items" />
    <div class="container p-3 card-container">
      <b-form @submit="onSubmit">
        <div class="row mb-3">
          <div class="col-sm">
            <b-form-group
              id="input-group-1"
              label="Nome Projeto:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.nomeProjeto"
                type="text"
                placeholder="Insira o nome do projeto"
                required
                size="lg"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm">
            <b-form-group
              id="input-group-2"
              label="Data inicial:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.dataInicial"
                placeholder="Insira a data inicial"
                required
                size="lg"
                type="date"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm">
            <b-form-group
              id="input-group-3"
              label="Data final:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.dataFinal"
                placeholder="Insira a data final"
                required
                type="date"
                size="lg"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm">
            <b-form-group
              id="input-group-4"
              label="Descrição:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="form.descricao"
                placeholder="Insira a descrição"
                required
                size="lg"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm">
            <b-form-group
              id="input-group-5"
              label="Gerente projeto:"
              label-for="input-5"
            >
              <b-form-select
                id="input-5"
                v-model="form.gerenteProjeto"
                :options="gerentes"
                size="lg"
                required
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="col-sm">
            <b-form-group
              id="input-group-6"
              label="Quantidade de funcionários:"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                v-model="form.quantidadeFuncionario"
                placeholder="Insira a quantidade de funcionários"
                type="number"
                required
                size="lg"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm"></div>
          <div class="col-sm">
            <b-button type="submit" variant="primary">Salvar</b-button>
          </div>
        </div>
      </b-form>
      <b-modal id="bv-modal-projeto" hide-footer>
        <div class="d-block text-center">
          <h3>Projeto cadastrado com sucesso!</h3>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/Breadcrumbs";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CadastroProjeto",
  components: { Header, Breadcrumbs },
  data() {
    return {
      form: {
        nomeProjeto: "",
        dataInicial: "",
        dataFinal: "",
        descricao: "",
        gerenteProjeto: null,
        quantidadeFuncionario: "",
      },
      gerentes: [],
      items: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Cadastro Projeto",
          active: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getGerentes"]),
  },
  mounted() {
    this.setGerentes();
  },
  methods: {
    ...mapActions(["requestProjeto"]),
    setGerentes() {
      this.gerentes = this.$store.getters["getGerentes"];
    },
    onSubmit(event) {
      event.preventDefault();
      this.requestProjeto(this.form);
      setTimeout(() => {
        this.$bvModal.show("bv-modal-projeto");
      }, 1000);
    },
  },
};
</script>

<style>
</style>