<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input v-bind:class="{ 'error' : error }" v-bind:value="value" @input="onInputHandler" type="text"/>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      error: null,
    }
  },
  name: "Input",
  props: {
    label: String,
    placeholder: String,
    validationCallback: Function,
  },
  methods: {
    onInputHandler(evt) {
      const value = evt.target.value;
      this.value = value;
      this.error = this.validationCallback(value);
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./Input.scss";
</style>
