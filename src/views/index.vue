<template>
  <div class="container">
    <div class="text">哈哈哈哈</div>
    <div class="bg"></div>
    <input class="input" type="text">
    <Test />
  </div>
</template>
<script>
import Test from "@/components/test.vue";
export default {
  data() {
    return {};
  },
  components: {
    Test,
  },
};
</script>

<style lang="stylus" scoped>
// @import '../assets/styles/theme.styl';
  @import '~styles/theme.styl';
  @import '~styles/minxins.styl';

.container

  .text
    color: $red
    text-align: center;
    margin-top: 30px
  .bg
    width: 300px
    height: 200px
    // background: url('~@/assets/images/2.jpg') no-repeat
    background: url('~images/2.jpg') no-repeat
    background-size:100% 100%
  .input
    cleanDefaultStyle()
</style>
