<!-- eslint-disable vue/no-mutating-props -->
<template>
  <b-modal
    :id="modalId"
    :ref="modalId"
    :title="title"
    v-model="showModal"
    @ok="onSubmit"
    @show="closeModal"
    @hidden="closeModal"
  >
    <form ref="form" @submit.stop.prevent="onSubmit">
      <div class="form-group">
        <label for="productTitleInput">Título</label>
        <input
          type="text"
          class="form-control"
          id="productTitleInput"
          aria-describedby="Título do produto"
          placeholder="Digite o título do produto"
          v-model="product.title"
        />
      </div>
      <div class="form-group mt-3">
        <label for="productDescriptionInput">Descrição</label>
        <input
          type="text"
          class="form-control"
          id="productDescriptionInput"
          aria-describedby="Descrição do produto"
          placeholder="Digite a descrição do produto"
          v-model="product.description"
        />
      </div>
      <div class="form-group mt-3">
        <label for="productURLInput">URL</label>
        <input
          type="url"
          class="form-control"
          id="productURLInput"
          aria-describedby="URL do produto"
          placeholder="Digite a url da imagem do produto"
          v-model="product.url"
        />
      </div>
      <div class="form-group mt-3">
        <label for="productUnitPriceInput">Preço unitário</label>
        <CurrencyInput
          placeholder="Digite o preço unitário do produto"
          class="form-control"
          id="productUnitPriceInput"
          v-model="product.unit_price"
        />
      </div>
      <div class="form-group mt-3">
        <label for="productTypeInput">Tipo do produto</label>
        <b-form-select
          v-model="product.type"
          :options="options"
        ></b-form-select>
      </div>
    </form>
  </b-modal>
</template>

<script lang="ts">
import { ProductType, ProductTypeEnum } from "../../utils/product-type";
import CurrencyInput from "@/components/CurrencyInput.vue";

const DEFAULT_PRODUCT = {
  title: "",
  description: "",
  url: "",
  unit_price: 0,
  type: ProductTypeEnum.FOOD,
  created_by_id: 0,
  updated_by_id: 0,
};

export default {
  props: {
    showModal: {
      default: true,
    },
    modalType: {
      default: "create",
    },
    data: {
      type: Object,
    },
  },
  components: { CurrencyInput },
  data() {
    return {
      modalId: "create-update-product-modal-form",
      title: "Criação de usuário",
      product: {
        ...DEFAULT_PRODUCT,
      },
    };
  },
  computed: {
    options() {
      return [
        {
          value: ProductTypeEnum.FOOD,
          text: ProductType[ProductTypeEnum.FOOD],
        },
        {
          value: ProductTypeEnum.DRINK,
          text: ProductType[ProductTypeEnum.DRINK],
        },
        {
          value: ProductTypeEnum.SIDE_DISH,
          text: ProductType[ProductTypeEnum.SIDE_DISH],
        },
      ];
    },
  },
  watch: {
    showModal() {
      if (this.showModal && this.modalType === "edit") {
        Object.assign(this.product, this.data);
        this.product.unit_price = this.product.unit_price
          ? this.product.unit_price / 100
          : 0;
      }

      console.log({ unit_price: this.product.unit_price });

      if (this.showModal && this.modalType === "create") {
        this.product = {
          ...DEFAULT_PRODUCT,
        };
      }
    },
  },
  methods: {
    onSubmit() {
      const event =
        (this.modalType === "create" && "submitCreateForm") ||
        "submitUpdateForm";

      this.product.unit_price *= 100;
      this.$emit(event, this.product);
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
