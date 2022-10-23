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
    <form @submit.stop.prevent="onSubmit">
      <div class="form-group">
        <label for="userNameInput">Nome</label>
        <input
          type="text"
          class="form-control"
          id="userNameInput"
          aria-describedby="Nome do usuário"
          placeholder="Digite seu nome"
          v-model="user.name"
        />
      </div>
      <div class="form-group mt-3">
        <label for="userCpfInput">CPF</label>
        <input
          type="text"
          class="form-control"
          id="userCpfInput"
          aria-describedby="CPF do usuário"
          placeholder="Digite seu CPF"
          v-model="user.cpf"
        />
      </div>
      <div class="form-group mt-3">
        <label for="userEmailInput">Email</label>
        <input
          type="email"
          class="form-control"
          id="userEmailInput"
          aria-describedby="Email do usuário"
          placeholder="Digite seu email"
          v-model="user.email"
        />
      </div>
      <div class="form-group mt-3">
        <label for="userPasswordInput">Password</label>
        <input
          type="password"
          class="form-control"
          id="userPasswordInput"
          placeholder="Digite a senha desejada"
          v-model="user.password"
        />
      </div>
    </form>
  </b-modal>
</template>

<script lang="ts">
const DEFAULT_USER = {
  name: "",
  cpf: "",
  email: "",
  password: "",
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
  data() {
    return {
      modalId: "create-update-user-modal-form",
      title: "Criação de usuário",
      user: {
        ...DEFAULT_USER,
      },
    };
  },
  watch: {
    showModal() {
      if (this.showModal && this.modalType === "edit") {
        Object.assign(this.user, this.data);
      }

      if (this.showModal && this.modalType === "create") {
        this.user = {
          ...DEFAULT_USER,
        };
      }
    },
  },
  methods: {
    onSubmit() {
      const event =
        (this.modalType === "create" && "submitCreateForm") ||
        "submitUpdateForm";

      this.$emit(event, this.user);
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
