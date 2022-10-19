<template>
  <div>
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
</template>

<style></style>

<script lang="ts">
import moment from "moment";

export default {
  props: ["users"],
  data() {
    return {
      headers: ["#", "Nome", "Email", "CPF", "Criado em", "Atualizado em"],
    };
  },
  methods: {
    formatDate: (value: any) =>
      ((value && moment(value)) || moment()).format("MM/DD/YYYY hh:mm"),
  },
};
</script>
