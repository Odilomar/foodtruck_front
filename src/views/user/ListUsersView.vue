<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Todos os usuários</h1>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-primary">Adicionar usuário</button>
      </div>
    </div>
    <div class="row">
      <div class="col">lista</div>
    </div>
  </div>
</template>

<style></style>

<script>
import api from "../../api";

export default {
  async mounted() {
    try {
      const users = await api.users.getAllUsers();
      console.log({ users });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
