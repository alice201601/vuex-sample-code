export default {
  testAuth(_, _2, rootState) {
    return rootState.isLoggedIn;
  },

  finalCounter(state) {
    return state.counter * 3;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    } else if (finalCounter > 100) {
      return 100;
    } else {
      return finalCounter;
    }
  },
};