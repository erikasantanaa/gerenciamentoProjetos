<template>
  <div>
    <Header />
    <div class="container mt-5">
      <h2>Lista de projetos</h2>
    </div>

    <div class="container mt-3 p-3 card-container">
      <b-table class="mt-5" striped hover :items="items"></b-table>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header";

export default {
  name: "Home",
  components: { Header },
  data() {
    return {
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
      ],
    };
  },
  methods: {},
};
</script>

<style>
.card-container {
  background-color: #eeeeee;
  border-radius: 5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>