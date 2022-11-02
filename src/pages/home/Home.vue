<template>
  <div class="App">
    count: {{ store.state.user.count }}
    <div @click="store.dispatch('user/getPromiseData')">count++</div>
    num: {{ num }}
    <div @click="add()">num++</div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex' // 引入useStore 方法
export default {
  name: 'Home',
  setup() {
    const num = ref<number>(1);
    const store = useStore()  // 该方法用于返回store 实例
    const add =  () => {
      num.value ++
    }
    return {
      store,
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