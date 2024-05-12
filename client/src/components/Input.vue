<template>
  <div :class = "{'input_container' : input_container}">
    <label v-if="label">{{ label }}</label>
    <input :class="{ 'error' : error }" :value="value" @input="onInputHandler" type="text"/>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Input",
  props: {
    label: String,
    placeholder: String,
    validationCallback: Function,
  },
  setup(props) {
    const value = ref('');
    const error = ref(null);

    const onInputHandler = (evt) => {
      const inputValue = evt.target.value;
      value.value = inputValue;
      error.value = props.validationCallback(inputValue);
    };

    return {
      value,
      error,
      onInputHandler
    };
  },
};
</script>
