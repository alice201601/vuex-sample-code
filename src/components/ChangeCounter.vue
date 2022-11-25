<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ myValue: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addTwo() {
    //   this.$store.dispatch('increment');
    // },

    // 类似于 mapGetters, 获得一个对象，与 methods 对象合并
    // ...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>