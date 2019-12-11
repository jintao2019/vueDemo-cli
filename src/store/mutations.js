const mutations = {
  add(state, payload) {
    state.num += payload;
  },

  reduce(state, payload) {
    state.num -= payload;
  }
};

export default mutations;
