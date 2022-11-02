<template>
  <main>
    <div class="container">
      <div class="row">
        <div
          class="col-6 p-4"
          v-for="(product, index) in products"
          :key="index"
        >
          <a @click="openViewModal(product)">
            <div class="row justify-content-between product rounded">
              <div class="col d-grid product-info">
                <div class="product-details">
                  <h3>{{ product.title }}</h3>
                  <p>{{ product.description }}</p>
                </div>
                <span class="mt-auto product-price">{{
                  formatUnitPrice(product.unit_price)
                }}</span>
              </div>
              <div class="col-5 text-center">
                <img
                  :src="product.url"
                  :alt="product.title"
                  width="180"
                  height="175"
                  class="rounded"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <ModalView
      :showModal="showViewModal"
      :product="product"
      @closeModal="closeViewModal"
    />
  </main>
</template>

<style>
a {
  text-decoration: none !important;
  cursor: pointer;
}

.product {
  padding: 15px;
  min-width: 320px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
}

.product-info {
  grid-template-rows: 1fr 20px;
}

.product-details {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: lighter;
  color: #717171;
  word-break: break-word;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: #3e3e3e;
}
</style>

<script lang="ts">
import api from "@/api";
import formatUnitPrice from "@/utils/format-unit-price";
import ModalView from "@/views/ModalView.vue";

export default {
  components: {
    ModalView,
  },
  data() {
    return {
      products: [],
      showViewModal: false,
      product: {},
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    formatUnitPrice,
    closeViewModal() {
      this.showViewModal = false;
    },
    openViewModal(value: any) {
      this.product = value;
      this.showViewModal = true;
    },
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
