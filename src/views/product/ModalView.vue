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
      <div class="row" v-if="!!product.name">
        <div class="col">
          <span><strong>Nome:</strong></span>
          {{ product.name }}
        </div>
      </div>
      <div class="row" v-if="!!product.email">
        <div class="col">
          <span><strong>Email:</strong></span>
          {{ product.email }}
        </div>
      </div>
      <div class="row" v-if="!!product.cpf">
        <div class="col">
          <span><strong>CPF:</strong></span>
          {{ product.cpf }}
        </div>
      </div>
      <div class="row" v-if="!!product.created_at">
        <div class="col">
          <span><strong>Criado em:</strong></span>
          {{ formatDate(product.created_at) }}
        </div>
      </div>
      <div class="row" v-if="!!product.updated_at">
        <div class="col">
          <span><strong>Atualizado em:</strong></span>
          {{ formatDate(product.updated_at) }}
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
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalId: "view-product-modal",
      title: "Visualização de usuário",
    };
  },
  methods: {
    formatDate: (value: any) =>
      ((value && moment(value)) || moment()).format("DD/MM/YYYY hh:mm"),
    closeModal() {
      this.$emit("closeModal");
    },
    editUser() {
      this.$emit("editUser");
    },
    deleteUser() {
      this.$emit("deleteUser");
    },
  },
};
</script>
