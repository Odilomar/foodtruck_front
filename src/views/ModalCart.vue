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
import getCart from "../utils/get-cart";

export default {
  props: {
    showModal: {
      default: true,
    },
  },
  data() {
    return {
      modalId: "view-cart-modal",
      amount: 0,
      products: [],
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    formatDate,
    formatUnitPrice,
    getCart() {
      const cart = getCart();

      if (cart) {
        const keys = Object.keys(cart);
        keys.forEach((key) => this.products.push(cart[key]));
      }
    },
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
