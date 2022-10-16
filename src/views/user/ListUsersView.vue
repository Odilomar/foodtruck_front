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
      <div class="col text-center">
        <span v-if="users.length === 0">Nenhum usuário encontrado</span>
        <table class="table" v-else>
          <thead>
            <tr>
              <th v-for="(header, index) in headers" :key="index" scope="col">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.cpf }}</td>
              <td>{{ formatDate(user.created_at) }}</td>
              <td>{{ formatDate(user.updated_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import api from "../../api";
import moment from "moment";

export default {
  data() {
    return {
      users: [],
      headers: ["#", "Nome", "Email", "CPF", "Criado em", "Atualizado em"],
    };
  },
  async mounted() {
    try {
      const response = await api.users.getAllUsers();
      this.users = response.data;
      console.log({ users: this.users });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    formatDate: (value) =>
      ((value && moment(value)) || moment()).format("MM/DD/YYYY hh:mm"),
  },
};
</script>
