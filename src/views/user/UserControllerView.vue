<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Todos os usuários</h1>
      </div>
      <div class="col-3">
        <button
          type="button"
          class="btn btn-primary"
          v-on:click="openFormModal()"
        >
          Adicionar usuário
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <UserListView :users="users" @viewUser="viewUser" />
      </div>
    </div>

    <ModalForm
      :showModal="showFormModal"
      @submitForm="submitForm"
      @closeModal="closeFormModal"
    />

    <ModalView
      :showModal="showViewModal"
      :user="user"
      @closeModal="closeViewModal"
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
      showFormModal: false,
      showViewModal: false,
      user: {},
    };
  },
  async mounted() {
    await this.getAllUsers();
  },
  methods: {
    async submitForm(user: any) {
      await this.createUser(user);
      this.closeFormModal();
    },
    openFormModal() {
      this.showFormModal = true;
    },
    closeFormModal() {
      this.showFormModal = false;
    },
    openViewModal() {
      this.showViewModal = true;
    },
    closeViewModal() {
      this.showViewModal = false;
      this.user = {}
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
    viewUser(user: any) {
      this.user = user;
      this.openViewModal();
    },
  },
};
</script>
