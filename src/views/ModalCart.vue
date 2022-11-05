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
    hide-header
    hide-footer
  >
    <div class="container" v-if="products.length > 0">
      <div
        class="row mt-4"
        v-for="(product, index) in products"
        :key="product.id"
      >
        <div class="col-4">
          <img
            :src="product.url"
            :alt="product.title"
            width="120"
            height="120"
            class="rounded"
          />
        </div>
        <div class="col">
          <div class="d-flex flex-column h-100 justify-content-between">
            <h3>{{ product.title }}</h3>
            <div class="d-flex justify-content-between">
              <span
                ><strong>{{
                  formatUnitPrice(product.unit_price)
                }}</strong></span
              >
              <div class="product-amount">
                <button type="button" class="btn btn-danger">trash</button>
                <span>{{ product.amount }}</span>
                <button type="button" class="btn btn-danger">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="d-flex justify-content-between">
            <span
              >Total: <strong>{{ formatUnitPrice(total) }}</strong></span
            >
            <button type="button" class="btn btn-danger">
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Nenhum produto selecionado</div>
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
  watch: {
    showModal() {
      this.getCart();
    },
  },
  computed: {
    total() {
      const total = this.products.map((product) => product.total);
      return total.reduce((prev, acc) => prev + acc, 0);
    },
  },
  methods: {
    formatDate,
    formatUnitPrice,
    getCart() {
      const cart = getCart();

      if (cart) {
        this.products = [];
        const keys = Object.keys(cart);
        keys.forEach((key) => this.products.push(cart[key]));
      }

      console.log({ products: this.products });
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
