<template>
  <div class="comNav">
    <div class="tac">
      <div class="arrow-left" @click="lastPage"></div>
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "comNav",
  props: {
    msg: String
  },
  methods: {
    lastPage() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="stylus">
.comNav
  height 100px
  line-height 100px
  font-size 32px
  width 100%
  color #fff
  position fixed
  top 0
  z-index 999
  background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,121,25,1));
  .arrow-left
    position absolute
    width 36px
    height 36px
    margin-top 32px
    transform rotate(45deg)
    left 40px
    border-left 2px solid #fff
    border-bottom 2px solid #fff
</style>
