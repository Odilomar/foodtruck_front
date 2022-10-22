<!-- eslint-disable vue/no-mutating-props -->
<template>
  <b-modal
    :id="modalId"
    :ref="modalId"
    :title="title"
    ok-title="Editar"
    ok-variant="success"
    cancel-title="Remover"
    cancel-variant="danger"
    v-model="showModal"
    @hidden="closeModal"
    @ok="editUser"
    @cancel="deleteUser"
  >
    <div class="container">
      <div class="row" v-if="!!user.name">
        <div class="col">
          <span><strong>Nome:</strong></span>
          {{ user.name }}
        </div>
      </div>
      <div class="row" v-if="!!user.email">
        <div class="col">
          <span><strong>Email:</strong></span>
          {{ user.email }}
        </div>
      </div>
      <div class="row" v-if="!!user.cpf">
        <div class="col">
          <span><strong>CPF:</strong></span>
          {{ user.cpf }}
        </div>
      </div>
      <div class="row" v-if="!!user.created_at">
        <div class="col">
          <span><strong>Criado em:</strong></span>
          {{ formatDate(user.created_at) }}
        </div>
      </div>
      <div class="row" v-if="!!user.updated_at">
        <div class="col">
          <span><strong>Atualizado em:</strong></span>
          {{ formatDate(user.updated_at) }}
        </div>
      </div>
    </div>
  </b-modal>
</template>

<style></style>

<script lang="ts">
import moment from "moment";

export default {
  props: {
    showModal: {
      default: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalId: "view-user-modal",
      title: "Visualização de usuário",
    };
  },
  methods: {
    formatDate: (value: any) =>
      ((value && moment(value)) || moment()).format("MM/DD/YYYY hh:mm"),
    closeModal() {
      this.$emit("closeModal");
    },
    editUser() {
      console.log('edit user')
    },
    deleteUser() {
      console.log('delete user')
    }
  },
};
</script>
