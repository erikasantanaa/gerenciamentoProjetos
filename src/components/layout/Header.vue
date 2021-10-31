<template>
  <div>
    <b-navbar toggleable type="dark" class="px-5" variant="dark">
      <b-navbar-brand class="px-5" href="/"
        >Gerenciador de projetos</b-navbar-brand
      >

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <div class="p-2 px-5">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item>
                <router-link to="/" class="menu-options"
                  >Lista de Projetos</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link to="/cadastroGerente" class="menu-options"
                  >Cadastrar novo Gerente</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link to="/cadastroFuncionario" class="menu-options"
                  >Cadastrar novo Funcionário</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link to="/cadastroProjeto" class="menu-options"
                  >Cadastrar novo Projeto</router-link
                >
              </b-nav-item>
            </b-nav>
          </nav>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style scoped>
.menu-options {
  text-decoration: none;
}
.menu-options:hover {
  font-size: 105%;
  font-weight: bold;
}
</style>

