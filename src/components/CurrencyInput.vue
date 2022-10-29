<template>
  <input ref="inputRef" type="text" />
</template>

<script lang="ts">
import { useCurrencyInput } from "vue-currency-input";

export default {
  name: "CurrencyInput",
  setup() {
    const { inputRef } = useCurrencyInput({ currency: "BRL" });
    return { inputRef };
  },
};
</script>
