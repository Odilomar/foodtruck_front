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
        <tr
          v-for="(user, index) in users"
          :key="user.id"
          @click="viewUser(user)"
        >
          <th scope="row">{{ index + 1 }}</th>
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
import formatDate from "@/utils/format-date";

export default {
  props: ["users"],
  data() {
    return {
      headers: ["#", "Nome", "Email", "CPF", "Criado em", "Atualizado em"],
    };
  },
  methods: {
    formatDate,
    viewUser(user: any) {
      this.$emit("viewUser", user);
    },
  },
};
</script>
