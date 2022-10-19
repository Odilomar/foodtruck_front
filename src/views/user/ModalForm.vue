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
    <form v-on:submit="onSubmit">
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
export default {
  props: {
    showModal: {
      default: true,
    },
  },
  data() {
    return {
      modalId: "create-update-modal-form",
      title: "Criação de usuário",
      user: {
        name: "",
        cpf: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitForm", this.user);
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
