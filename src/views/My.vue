<template>
  <div class="my">
    <comNav msg="我的信息"></comNav>
    <div class="my-content-top">
      <div class="content-top-t layoutFlex">
        <div class="user-img">
          <img
            src="https://avatars0.githubusercontent.com/u/141232?v=4"
            alt=""
          />
        </div>
        <div class="user-info tal ml5">
          <p class="user-info-name">工地上的手艺人</p>
          <p>初级工友情 ID：152854625</p>
        </div>
        <div class="user-set"></div>
      </div>
      <div class="profit layoutFlex">
        <span class="ml5"> 总收益 </span> <span class="fw">0.00元</span>
        <span class="right-arrow mr5"></span>
      </div>
    </div>
    <div class="my-content-bottom mt3">
      <ul>
        <router-link tag="li" to="/bind">
          <div class="layoutFlex">
            <img src="@/assets/img/zhangset.png" alt="" />
            <span class="txt tal ml3">账户设置</span>
            <span class="right-arrow mr2"></span>
          </div>
        </router-link>
        <router-link tag="li" to="/bind">
          <div class="layoutFlex">
            <img src="@/assets/img/money.png" alt="" />
            <span class="txt tal ml3">我的钱包</span>
            <span class="right-arrow mr2"></span>
          </div>
        </router-link>
        <router-link tag="li" to="/bind">
          <div class="layoutFlex">
            <img src="@/assets/img/collect.png" alt="" />
            <span class="txt tal ml3">我的收藏</span>
            <span class="right-arrow mr2"></span>
          </div>
        </router-link>
        <router-link tag="li" to="/bind">
          <div class="layoutFlex">
            <img src="@/assets/img/help.png" alt="" />
            <span class="txt tal ml3">帮助反馈</span>
            <span class="right-arrow mr2"></span>
          </div>
        </router-link>
        <router-link tag="li" to="/bind">
          <div class="layoutFlex">
            <img src="@/assets/img/about.png" alt="" />
            <span class="txt tal ml3">关于我们</span>
            <span class="right-arrow mr2"></span>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="signUp mt10" @click="signUpFnc">退出账户</div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "my",
  components: {
    comNav
  },
  methods: {
    signUpFnc() {
      this.$router.push("./login");
    }
  }
};
</script>
<style lang="stylus" scoped>
.my
  padding-top 100px
  .my-content-top
    padding 60px 0 40px
    background #fff
    .profit
      margin-top 65px
      align-items center
      justify-content space-between
      width 90%
      margin-left 5%
      height 102px
      line-height 102px
      color #fff
      font-size 36px
      background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
      border-radius 5px
      .right-arrow
        width 30px
        height 30px
        border-top 2px solid #fff
        border-right 2px solid #fff
        transform rotate(45deg)
    .content-top-t
      width 90%
      margin-left 5%
      align-items center
      .user-img
        width 121px
        height 121px
        border-radius 120px
        overflow hidden
        img
          width 100%
      .user-info
        font-size 28px
        .user-info-name
          font-size 36px
          font-weight bold
          color #333
  .my-content-bottom
    background #fff
    li
      >div
        height 100px
        align-items center
        width 90%
        margin-left 5%
        img
          width 40px
        .txt
          flex 1
          font-size 30px
        .right-arrow
          width 30px
          height 30px
          border-top 2px solid #aaa
          border-right 2px solid #aaa
          transform rotate(45deg)
  .signUp
    height 81px
    line-height 81px
    font-size 36px
    color #fff
    background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
    border-radius 5px
    width 76%
    margin-left 12%
</style>
