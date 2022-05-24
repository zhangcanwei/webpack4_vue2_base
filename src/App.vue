<template>
  <div>
    <test-page></test-page>
  </div>
</template>

<script>
import "./assets/styles/global.styl";

import TestPage from "./views/index.vue";

export default {
  name: "App",
  components: {
    TestPage,
  },
};
</script>

<style lang="stylus" scoped></style>
