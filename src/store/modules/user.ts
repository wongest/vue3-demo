export default {
  namespaced: true,
  state() {
    return {
      count: 10
    }
  },
  mutations: {
    countAdd(state, n = 1) {
      console.log('user');

      state.count += n
    }
  },
  actions: {
    async getPromiseData({ commit, state }, products) {
      // console.log(products); // user
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(3)
        }, 1000);
      })
      commit('countAdd', res);
    }
  }
}