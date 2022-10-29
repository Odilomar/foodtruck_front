<!-- eslint-disable vue/no-mutating-props -->
<template>
  <b-modal
    :id="modalId"
    :ref="modalId"
    :title="title"
    ok-title="Remover"
    ok-variant="danger"
    v-model="showModal"
    @hidden="closeModal"
    @ok="deleteUser"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          Você tem certeza que deseja remover esse usuário
          <span v-if="product && product.name"
            >(<strong>{{ product.name }}</strong
            >) </span
          >?
        </div>
      </div>
    </div>
  </b-modal>
</template>

<style></style>

<script lang="ts">
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
      modalId: "delete-product-modal",
      title: "Remover usuário",
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    deleteUser() {
      this.$emit("deleteUser", this.product);
    },
  },
};
</script>
