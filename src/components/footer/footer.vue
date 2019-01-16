<template>
  <div class="footer">
    <ul class="layoutFlex">
      <li><img src="@/assets/img/home.png" alt="" /> <span>首页</span></li>
      <!--
        <router-link tag="li" to="/sign"> </router-link>
        <router-link tag="li" to="/wallet"> </router-link>
      -->
      <li @click="toSign">
        <img src="@/assets/img/baoming.png" alt="" /> <span>报名</span>
      </li>
      <li @click="toSign">
        <img src="@/assets/img/work.png" alt="" /> <span>工友圈</span>
      </li>
      <li @click="toWallet">
        <img src="@/assets/img/money-default.png" alt="" /> <span>钱包</span>
      </li>
      <router-link tag="li" to="/my">
        <img src="@/assets/img/me-default.png" alt="" /> <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "footerCom",
  props: {
    msg: String
  },
  methods: {
    toSign() {
      // if (!localStorage.cellPhone) {
      //   this.$router.push("/login");
      // } else {
      //   this.$router.push("/sign");
      // }

      Toast({
        message: "敬请期待",
        position: "bottom",
        duration: 2000
      });
    },
    toWallet() {
      if (!localStorage.cellPhone) {
        this.$router.push("/login");
      } else {
        this.$router.push("/wallet");
      }
    }
  }
};
</script>
<style scoped lang="stylus">
.footer
  position fixed
  bottom 0
  z-index 501
  background #fff
  width 100%
  border-top 1px solid #e6e6e6
  ul
    justify-content space-around
    align-items center
    height 113px
    li
      text-align center
      img
        display block
        width 46px
        margin 0 auto
</style>
