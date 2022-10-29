<template>
  <input ref="inputRef" type="text" />
</template>

<script lang="ts">
import { useCurrencyInput } from "vue-currency-input";
import { watch } from "vue";

export default {
  name: "CurrencyInput",
  props: {
    modelValue: Number,
  },
  setup(props) {
    const { inputRef, formattedValue, setValue } = useCurrencyInput({
      currency: "BRL",
    });

    watch(
      () => props.modelValue,
      (value: any) => {
        setValue(value);
      }
    );
    return { inputRef, formattedValue };
  },
};
</script>
