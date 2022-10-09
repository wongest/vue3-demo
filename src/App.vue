<template>
  <div class="App">
    num: {{ num }}
    <div @click="add()">+</div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    const num = ref(1);
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