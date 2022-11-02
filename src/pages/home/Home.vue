<template>
  <div class="App">
    num: {{ num }}
    <div @click="add()">+</div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'Home',
  setup() {
    const num = ref<number>(1);
    const add = () => {
      num.value ++
    }
    return {
      num,
      add,
    }
  }
};
</script>

<style lang="scss" scoped>
.App {
  color: pink;
}
</style>