<template>
  <div class="footer">
    <ul class="layoutFlex">
      <li><img src="@/assets/img/home.png" alt="" /> <span>首页</span></li>
      <router-link tag="li" to="/sign">
        <img src="@/assets/img/baoming.png" alt="" /> <span>报名</span>
      </router-link>
      <router-link tag="li" to="/wallet">
        <img src="@/assets/img/money-default.png" alt="" /> <span>钱包</span>
      </router-link>
      <router-link tag="li" to="/my">
        <img src="@/assets/img/me-default.png" alt="" /> <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerCom",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="stylus">
.footer
  position fixed
  bottom 0
  background #fff
  width 100%
  ul
    justify-content space-around
    align-items center
    height 113px
    li
      img
        display block
        width 46px
</style>
