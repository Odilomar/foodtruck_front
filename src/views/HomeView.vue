<template>
  <main>
    <div class="container">
      <div class="row">
        <div
          class="col-6 pt-4"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="row justify-content-between">
            <div class="col d-grid product-info">
              <div class="product-details">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
              </div>
              <span class="mt-auto">{{
                formatUnitPrice(product.unit_price)
              }}</span>
            </div>
            <div class="col">
              <img
                :src="product.url"
                :alt="product.title"
                width="180"
                height="175"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.product-info {
  grid-template-rows: 1fr 20px;
}
</style>

<script lang="ts">
import api from "@/api";
import formatUnitPrice from "@/utils/format-unit-price";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    formatUnitPrice,
    async getAllProducts() {
      try {
        const response = await api.products.getAllProducts();
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
