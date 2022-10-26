<template>
  <div>
    <span v-if="products.length === 0">Nenhum usuário encontrado</span>
    <table class="table" v-else>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" scope="col">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="product.id"
          @click="viewProduct(product)"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ formatUnitPrice(product.unit_price) }}</td>
          <td>{{ formatProductType(product.type) }}</td>
          <td>{{ product.created_by?.name }}</td>
          <td>{{ formatDate(product.created_at) }}</td>
          <td>{{ product.updated_by?.name }}</td>
          <td>{{ formatDate(product.updated_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>

<script lang="ts">
import moment from "moment";
import numeral from "numeral";
import { ProductType, ProductTypeEnum } from "../../utils/product-type";

export default {
  props: ["products"],
  data() {
    return {
      headers: [
        "#",
        "Título",
        "Descrição",
        "Preço unitário",
        "Tipo",
        "Criado por",
        "Criado em",
        "Atualizado por",
        "Atualizado em",
      ],
    };
  },
  methods: {
    formatDate: (value: any) =>
      ((value && moment(value)) || moment()).format("MM/DD/YYYY hh:mm"),
    formatUnitPrice: (value: any) =>
      `R$ ${numeral((value || 0) / 100).format("0,0.00")}`,
    formatProductType: (type: ProductTypeEnum) => ProductType[type],
    viewProduct(product: any) {
      this.$emit("viewProduct", product);
    },
  },
};
</script>
