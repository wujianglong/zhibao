<template>
  <div class="homNav">
    <div class="tac layoutFlex">
      <!-- <div class="arrow-left"></div> -->
      <div class="arrow-left" @click="lastPage"></div>
      <div class="nav-input">
        <input v-model="val" type="text" placeholder="搜索" />
      </div>
      <div class="nav-btn mr5" @click="toSearch">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comNav",
  data() {
    return {
      val: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    lastPage() {
      this.$router.go(-1);
    },
    toSearch() {
      this.$emit("searchVal", this.val);
    }
  }
};
</script>
<style scoped lang="stylus">
.homNav
  height 100px
  line-height 100px
  font-size 32px
  color #fff
  position fixed
  top 0
  width 100%
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
  .nav-input
    flex 1
    input
      height 60px
      border-radius 60px
      margin-left 40px
      color #666
      width 80%
      text-indent 5%
  .nav-btn
    color #fff
</style>
