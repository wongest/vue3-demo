import { createStore } from 'vuex';
import user from './modules/user'

// 创建一个新的 store 实例
const store = createStore({
  modules: {
    user,
  },
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    countAdd (state) {
      console.log('index');
      
      state.count++
    }
  }
})

export default store;