<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Gerenciador de projetos</b-nav-item>
        <b-button v-b-toggle.sidebar-right>Cadastrar</b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-sidebar id="sidebar-right" title="Cadastros" backdrop shadow>
      <div class="p-3">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item>
              <router-link to="/cadastroGerente"
                >Cadastrar novo Gerente</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/cadastroFuncionario"
                >Cadastrar novo Funcionário</router-link
              >
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
    <div class="container p-3 card-container">
      <b-form @submit="onSubmit" @reset="onReset">
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
              <b-form-input
                id="input-5"
                v-model="form.gerenteProjeto"
                :options="gerentes"
                size="lg"
                required
              ></b-form-input>
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
          <div class="col-sm">
            <b-button type="reset" variant="danger">Cancelar</b-button>
          </div>
          <div class="col-sm">
            <b-button type="submit" variant="primary">Salvar</b-button>
          </div>
        </div>
      </b-form>
    </div>
    <div class="container mt-4 p-3 card-container">
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
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
      gerentes: [
        { text: "Select One", value: null },
        "João Silva",
        "Carlos André",
        "Erika Maria",
        "Ana Alice",
        "Wendell Calixto",
      ],
      items: [
        {
          Nome_projeto: "Projeto A",
          Data_Inicial: "01/01/2022",
          Data_Final: "12/12/2022",
          Gerente: "João Silva",
          Quant_Funcionário: 12,
        },
        {
          Nome_projeto: "Projeto B",
          Data_Inicial: "01/01/2022",
          Data_Final: "12/12/2022",
          Gerente: "Carlos André",
          Quant_Funcionário: 9,
        },
        {
          Nome_projeto: "Projeto C",
          Data_Inicial: "01/01/2022",
          Data_Final: "12/12/2022",
          Gerente: "Ana Alice",
          Quant_Funcionário: 23,
        },
        {
          Nome_projeto: "Projeto D",
          Data_Inicial: "01/01/2022",
          Data_Final: "12/12/2022",
          Gerente: "Erika Maria",
          Quant_Funcionário: 2,
        },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.nomeProjeto = "";
      this.form.dataInicial = "";
      this.form.dataFinal = "";
      this.form.descricao = "";
      this.form.gerenteProjeto = [];
      this.form.quantidadeFuncionario = "";
    },
  },
};
</script>

<style>
.card-container {
  background-color: #fafafa;
  border-radius: 7px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>