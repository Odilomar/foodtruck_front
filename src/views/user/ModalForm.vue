<template>
  <b-modal :id="modalId" :title="title">
    <form>
      <div class="form-group">
        <label for="userNameInput">Nome</label>
        <input
          type="text"
          class="form-control"
          id="userNameInput"
          aria-describedby="Nome do usuário"
          placeholder="Digite seu nome"
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
        />
      </div>
      <div class="form-group mt-3">
        <label for="userPasswordInput">Password</label>
        <input
          type="password"
          class="form-control"
          id="userPasswordInput"
          placeholder="Digite a senha desejada"
        />
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      modalId: "create-update-modal-form",
      title: "Criação de usuário",
    };
  },
};
</script>
