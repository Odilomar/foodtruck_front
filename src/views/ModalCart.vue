<!-- eslint-disable vue/no-mutating-props -->
<template>
  <b-modal
    :id="modalId"
    :ref="modalId"
    ok-title="Editar"
    ok-variant="success"
    cancel-title="Remover"
    cancel-variant="danger"
    v-model="showModal"
    @hidden="closeModal"
    @ok="editUser"
    @cancel="deleteProduct"
    size="xl"
    hide-header
    hide-footer
  >
    <div class="container">
      <div class="row">aaaaggg</div>
    </div>
  </b-modal>
</template>

<style></style>

<script lang="ts">
import formatDate from "@/utils/format-date";
import formatUnitPrice from "@/utils/format-unit-price";
import { ProductType, ProductTypeEnum } from "../utils/product-type";

export default {
  props: {
    showModal: {
      default: true,
    },
  },
  data() {
    return {
      modalId: "view-cart-modal",
      amount: 1,
    };
  },
  methods: {
    formatDate,
    formatUnitPrice,
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
