<template>
  <div>
    <Header />
    <Breadcrumbs :routePaths="items" />

    <div class="container p-3 card-container">
      <h2>Cadastrar novo Gerente</h2>
      <b-form @submit="onSubmit">
        <div class="row mb-3">
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Nome Gerente:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="text"
                placeholder="Nome Gerente"
                required
                size="lg"
                v-model="gerente.nome"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-1" label="Setor:" label-for="input-2">
              <b-form-select
                id="input-2"
                v-model="gerente.setor"
                :options="setores"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-button type="submit" variant="success" class="cadastrar-button"
              >Cadastrar</b-button
            >
          </b-col>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "CadastroGerente",
  components: { Header, Breadcrumbs },
  data() {
    return {
      gerente: {
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
          text: "Cadastro Gerente",
          active: true,
        },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.gerente));
    },
  },
};
</script>
<style scoped>
.cadastrar-button {
  margin-top: 20px;
}
</style>