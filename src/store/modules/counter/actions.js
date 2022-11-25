export default {
  increment(context) {
    setTimeout(function () {
      context.commit('increment');
    }, 3000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
    console.log(context);
  },
};
