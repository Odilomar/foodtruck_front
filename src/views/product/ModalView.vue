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
    @cancel="deleteProduct"
  >
    <div class="container">
      <div class="row" v-if="!!product.title">
        <div class="col">
          <span><strong>Título:</strong></span>
          {{ product.title }}
        </div>
      </div>
      <div class="row" v-if="!!product.description">
        <div class="col">
          <span><strong>Descrição:</strong></span>
          {{ product.description }}
        </div>
      </div>
      <div class="row" v-if="!!product.unit_price">
        <div class="col">
          <span><strong>Preço Unitário:</strong></span>
          {{ formatUnitPrice(product.unit_price) }}
        </div>
      </div>
      <div class="row" v-if="!!product.type">
        <div class="col">
          <span><strong>Tipo:</strong></span>
          {{ formatProductType(product.type) }}
        </div>
      </div>
      <div class="row" v-if="!!product.created_by?.name">
        <div class="col">
          <span><strong>Criado por:</strong></span>
          {{ product.created_by?.name }}
        </div>
      </div>
      <div class="row" v-if="!!product.created_at">
        <div class="col">
          <span><strong>Criado em:</strong></span>
          {{ formatDate(product.created_at) }}
        </div>
      </div>
      <div class="row" v-if="!!product.updated_by?.name">
        <div class="col">
          <span><strong>Atualizado por:</strong></span>
          {{ product.updated_by?.name }}
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
import formatDate from "@/utils/format-date";
import formatUnitPrice from "@/utils/format-unit-price";
import { ProductType, ProductTypeEnum } from "../../utils/product-type";

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
    formatDate,
    formatUnitPrice,
    formatProductType: (type: ProductTypeEnum) => ProductType[type],
    closeModal() {
      this.$emit("closeModal");
    },
    editUser() {
      this.$emit("editUser");
    },
    deleteProduct() {
      this.$emit("deleteProduct");
    },
  },
};
</script>
