const actions = {
  add({ commit }, payload) {
    commit("add", payload);
  },
  reduce({ commit }, payload) {
    commit("reduce", payload);
  }
};

export default actions;
