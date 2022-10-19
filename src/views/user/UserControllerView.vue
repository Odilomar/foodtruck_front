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
        <UserListView :users="users" />
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
import UserListView from "./UserListView.vue";

export default {
  components: {
    ModalForm,
    ModalView,
    UserListView,
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
    async submitForm(user: any) {
      await this.createUser(user);
      this.closeModal();
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
    async createUser(user: any) {
      try {
        await api.users.createUser(user);
        await this.getAllUsers();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
