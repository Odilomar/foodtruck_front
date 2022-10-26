<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Todos os produtos</h1>
      </div>
      <div class="col-3">
        <button
          type="button"
          class="btn btn-primary"
          v-on:click="openCreateFormModal()"
        >
          Adicionar produto
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <ProductListView :products="products" @viewProduct="viewProduct" />
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
      @deleteProduct="openDeleteModal"
      @editUser="openEditFormModal"
    />

    <ModalDelete
      :showModal="showDeleteModal"
      :user="user"
      @closeModal="closeDeleteModal"
      @deleteProduct="deleteProduct"
    />
  </div>
</template>

<style></style>

<script lang="ts">
import api from "../../api";
import ModalForm from "./ModalForm.vue";
import ModalView from "./ModalView.vue";
import ModalDelete from "./ModalDelete.vue";
import ProductListView from "./ProductListView.vue";

export default {
  components: {
    ModalForm,
    ModalView,
    ModalDelete,
    ProductListView,
  },
  data() {
    return {
      products: [],
      showFormModal: false,
      modalFormType: "create",
      showViewModal: false,
      showDeleteModal: false,
      user: {},
    };
  },
  async mounted() {
    await this.getAllProducts();
  },
  methods: {
    async submitCreateForm(user: any) {
      await this.createProduct(user);
      this.closeFormModal();
    },
    async submitUpdateForm(user: any) {
      await this.updateProduct(user);
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
      // this.user = {};
    },
    openDeleteModal() {
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    async getAllProducts() {
      try {
        const response = await api.products.getAllProducts();
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async createProduct(user: any) {
      try {
        await api.products.createProduct(user);
        await this.getAllProducts();
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct(user: any) {
      try {
        await api.products.updateProduct(user.id, user);
        await this.getAllProducts();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduct(user: any) {
      const id = user?.id;

      try {
        await api.products.deleteProduct(id);
        await this.getAllProducts();
      } catch (error) {
        console.log(error);
      }
    },
    viewProduct(user: any) {
      this.user = user;
      this.openViewModal();
    },
  },
};
</script>
