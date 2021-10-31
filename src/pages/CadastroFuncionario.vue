<template>
  <div>
    <Header />
    <Breadcrumbs :routePaths="items" />

    <div class="container p-3 card-container">
      <h1>Cadastro de funcionário</h1>
    </div>
    <div class="container p-3 card-container">
      <b-form @submit="onSubmit">
        <div class="row mb-3">
          <div class="col-sm">
            <b-form-group
              id="input-group-1"
              label="Nome Funcionário:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="text"
                placeholder="Nome Funcionário"
                required
                size="lg"
                v-model="funcionario.nome"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm">
            <b-form-group id="input-group-1" label="Setor:" label-for="input-2">
              <b-form-select
                id="input-2"
                v-model="funcionario.setor"
                :options="setores"
                required
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="col-sm">
            <b-button type="submit" variant="success" class="cadastrar-button"
              >Cadastrar</b-button
            >
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "CadastroFuncionario",
  components: { Header, Breadcrumbs },
  data() {
    return {
      funcionario: {
        nome: "",
        setor: null,
      },
      setores: ["Administrativo", "Financeiro", "Operacional"],
      items: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Cadastro Funcionário",
          active: true,
        },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.funcionario));
    },
  },
};
</script>
<style scoped>
.cadastrar-button {
  margin-top: 20px;
}
</style>