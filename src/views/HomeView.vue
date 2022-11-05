<template>
  <main>
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-2 d-flex justify-content-end">
          <button type="button" class="btn btn-danger" @click="openCartModal()">
            Carrinho
            <span
              class="badge rounded-pill text-bg-light"
              v-if="cartAmount > 0"
              >{{ cartAmount }}</span
            >
          </button>
        </div>
      </div>
      <div class="row">
        <div
          class="col-6 p-4"
          v-for="(product, index) in products"
          :key="index"
        >
          <a @click="openProductDetailsModal(product)">
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

    <ModalProductDetails
      :showModal="showProductDetailsModal"
      :product="product"
      @closeModal="closeProductDetailsModal"
    />

    <ModalCart :showModal="showCartModal" @closeModal="closeCartModal" />
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
import ModalProductDetails from "@/views/ModalProductDetails.vue";
import ModalCart from "@/views/ModalCart.vue";

export default {
  components: {
    ModalProductDetails,
    ModalCart,
  },
  data() {
    return {
      products: [],
      showProductDetailsModal: false,
      showCartModal: false,
      cartAmount: 0,
      product: {},
    };
  },
  created() {
    this.getAllProducts();
    this.getCart();
  },
  methods: {
    formatUnitPrice,
    getCart() {
      const localStorageCart = localStorage["cart"];
      if (localStorageCart) {
        const cart = JSON.parse(localStorageCart);
        const keys = Object.keys(cart);
        this.cartAmount = keys.length;
      }
    },
    closeProductDetailsModal() {
      this.showProductDetailsModal = false;
      this.getCart();
    },
    openProductDetailsModal(value: any) {
      this.product = value;
      this.showProductDetailsModal = true;
    },
    closeCartModal() {
      this.showCartModal = false;
      this.getCart();
    },
    openCartModal() {
      this.showCartModal = true;
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
