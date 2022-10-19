<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Todos os usuários</h1>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-primary" v-on:click="openModal()">
          Adicionar usuário
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <ModalView :users="users" />
      </div>
    </div>

    <ModalForm
      :showModal="showModal"
      @submitForm="submitForm"
      @closeModal="closeModal"
    />
  </div>
</template>

<style></style>

<script lang="ts">
import api from "../../api";
import ModalForm from "./ModalForm.vue";
import ModalView from "./ModalView.vue";

export default {
  components: {
    ModalForm,
    ModalView,
  },
  data() {
    return {
      users: [],
      showModal: false,
    };
  },
  async mounted() {
    await this.getAllUsers();
  },
  methods: {
    submitForm(user: any) {
      this.closeModal();
      console.log({ user });
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async getAllUsers() {
      try {
        const response = await api.users.getAllUsers();
        this.users = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
