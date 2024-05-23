<template>
  <div class="input_container">
    <label v-if="label" class="input-container__label">{{ label }}</label>
    <input class="input-container__input" :class="{ 'input-container__error': error }" :value="value" @input="onInputHandler" type="text"/>
    <p class="input-container__error-text" v-if="error">{{ error }}</p>
  </div>
</template>


<script setup>
import { ref } from 'vue';
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  validationCallback: {
    type: Function,
    default: () => null
  }
});
const value = ref('');
const error = ref(null);

const onInputHandler = (evt) => {
  const inputValue = evt.target.value;
  value.value = inputValue;
  error.value = props.validationCallback(inputValue);
  error.value = validationCallback(inputValue);
};
</script>


<style lang="scss">
.input-container {
  @include main-size;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__input {
    width: 100%;
    border: 1px solid #d3dbe2;
    border-radius: 3px;
    padding: 5px;
    height: 32px;
    transition: 0.3s;

    &:focus {
      border-color: #0388cc;
      box-shadow: 0 0 3px #0388cc;
      outline: none;
    }

    &.input-container__error {
      border-color: $error-color;

      &:focus {
        border-color: $error-color;
        box-shadow: 0 0 3px $error-color;
      }
    }
  }

  &__error-text {
    color: $error-color;
  }

  &__label {
    color: #555;
  }
}
</style>