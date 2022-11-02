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
      <div class="row">
        <div class="col-6">
          <img
            :src="product.url"
            :alt="product.title"
            width="530"
            height="530"
            class="rounded"
          />
        </div>
        <div class="col">
          <div class="row flex-column justify-content-between h-100">
            <div class="col">
              <h1>{{ product.title }}</h1>
              <p>{{ product.description }}</p>
              <span class="">{{ formatUnitPrice(product.unit_price) }}</span>
            </div>
            <div class="col-12">
              <div class="d-flex justify-content-end">
                <div class="product-amount mx-2 text-danger rounded border">
                  <button
                    type="button"
                    class="decrease btn btn-lg text-danger border-0"
                    v-bind:class="{ disabled: amount <= 1 }"
                    @click="decrease"
                    :disabled="amount <= 1"
                  >
                    -
                  </button>
                  <span class="text-dark mx-2">{{ amount }}</span>
                  <button
                    type="button"
                    class="increase btn btn-lg text-danger border-0"
                    @click="increase"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  class="add-product btn btn-danger btn-lg"
                  @click="add"
                >
                  <span>Adicionar</span>
                  <span class="mx-2" v-if="product.unit_price">{{
                    formatUnitPrice(product.unit_price * amount)
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalId: "view-product-details-modal",
      amount: 1,
    };
  },
  watch: {
    product() {
      this.amount = 1;
      const cart = localStorage["cart"];

      if (cart) {
        const parsedCart = JSON.parse(cart);
        const product = parsedCart[this.product.id];

        if (product && product.amount) {
          this.amount = product.amount;
        }
      }
    },
  },
  methods: {
    formatDate,
    formatUnitPrice,
    formatProductType: (type: ProductTypeEnum) => ProductType[type],
    decrease() {
      this.amount -= 1;
    },
    increase() {
      this.amount += 1;
    },
    add() {
      const cart = localStorage["cart"];

      localStorage["cart"] = JSON.stringify({
        ...(cart ? JSON.parse(cart) : {}),
        [this.product.id]: {
          ...this.product,
          amount: this.amount,
        },
      });

      this.closeModal();
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
