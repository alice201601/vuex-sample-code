<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },

    // 未使用名字空间
    // ...mapGetters(['finalCounter']),

    // 使用名字空间
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>

