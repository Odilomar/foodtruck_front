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
          v-on:click="openCreateFormModal()"
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
      :data="user"
      :modalType="modalFormType"
      @submitCreateForm="submitCreateForm"
      @submitUpdateForm="submitUpdateForm"
      @closeModal="closeFormModal"
    />

    <ModalView
      :showModal="showViewModal"
      :user="user"
      @closeModal="closeViewModal"
      @deleteUser="openDeleteModal"
      @editUser="openEditFormModal"
    />

    <ModalDelete
      :showModal="showDeleteModal"
      :user="user"
      @closeModal="closeDeleteModal"
      @deleteUser="deleteUser"
    />
  </div>
</template>

<style></style>

<script lang="ts">
import api from "../../api";
import ModalForm from "./ModalForm.vue";
import ModalView from "./ModalView.vue";
import ModalDelete from "./ModalDelete.vue";
import UserListView from "./UserListView.vue";

export default {
  components: {
    ModalForm,
    ModalView,
    ModalDelete,
    UserListView,
  },
  data() {
    return {
      users: [],
      showFormModal: false,
      modalFormType: "create",
      showViewModal: false,
      showDeleteModal: false,
      user: {},
    };
  },
  async mounted() {
    await this.getAllUsers();
  },
  methods: {
    async submitCreateForm(user: any) {
      await this.createUser(user);
      this.closeFormModal();
    },
    async submitUpdateForm(user: any) {
      await this.updateUser(user);
      this.closeFormModal();
    },
    openCreateFormModal() {
      this.modalFormType = "create";
      this.openFormModal();
    },
    openEditFormModal() {
      this.modalFormType = "edit";
      this.openFormModal();
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
    },
    openDeleteModal() {
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
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
    async updateUser(user: any) {
      try {
        await api.users.updateUser(user.id, user);
        await this.getAllUsers();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(user: any) {
      const id = user?.id;

      try {
        await api.users.deleteUser(id);
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
