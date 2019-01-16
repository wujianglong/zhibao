<template>
  <div class="my">
    <comNav msg="我的信息"></comNav>
    <div class="my-content-top">
      <div class="content-top-t layoutFlex">
        <div class="user-img">
          <img src="@/assets/img/Default.png" alt="" />
        </div>
        <div class="user-info tal ml5">
          <p class="user-info-name" v-if="userInfo.cellphone">
            {{ userInfo.cellphone
            }}<span style="color:rgb(100,222,173)" @click="toDetail();">{{
              userInfo.job_state | status
            }}</span>
          </p>
          <router-link tag="p" to="/login" v-if="!userInfo.cellphone"
            >去绑定账号</router-link
          >
          <p>ID：{{ userInfo.id }}</p>
        </div>
        <div class="user-set"></div>
      </div>
      <div class="profit layoutFlex" @click="toTotal">
        <span class="ml5"> 总收益 </span>
        <span class="fw">{{ userInfo.balance }}元</span>
        <span class="right-arrow mr5"></span>
      </div>
    </div>
    <div class="my-content-bottom mt3">
      <ul>
        <li @click="toAuth">
          <div class="layoutFlex">
            <img src="@/assets/img/zhangset.png" alt="" />
            <span class="txt tal ml3">实名认证</span>
            <span class="right-arrow mr2"></span>
          </div>
        </li>
        <li @click="toWallet">
          <div class="layoutFlex">
            <img src="@/assets/img/money.png" alt="" />
            <span class="txt tal ml3">我的钱包</span>
            <span class="right-arrow mr2"></span>
          </div>
        </li>
        <router-link tag="li" to="/salary">
          <div class="layoutFlex">
            <img src="@/assets/img/zhangdan.png" alt="" />
            <span class="txt tal ml3">薪资明细</span>
            <span class="right-arrow mr2"></span>
          </div>
        </router-link>
        <li @click="toCollect">
          <div class="layoutFlex">
            <img src="@/assets/img/collect.png" alt="" />
            <span class="txt tal ml3">我的收藏</span>
            <span class="right-arrow mr2"></span>
          </div>
        </li>

        <li @click="toHelp">
          <div class="layoutFlex">
            <img src="@/assets/img/help.png" alt="" />
            <span class="txt tal ml3">帮助反馈</span>
            <span class="right-arrow mr2"></span>
          </div>
        </li>

        <li @click="toAbout">
          <div class="layoutFlex">
            <img src="@/assets/img/about.png" alt="" />
            <span class="txt tal ml3">关于我们</span>
            <span class="right-arrow mr2"></span>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div class="signUp mt10" @click="signUpFnc">退出账户</div> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import comNav from "@/components/nav/comNav";
export default {
  name: "my",
  components: {
    comNav
    // Confirm
  },
  computed: {
    ...mapState({
      userInfo: res => res.userInfo
    })
  },
  filters: {
    status(s) {
      let c = "";
      switch (s) {
        case "not-enrolled":
          c = "";
          break;
        case "enrolled":
          c = "（已报名）";
          break;
        case "in-service":
          c = "（已入职）";
          break;
        case "dimission":
          c = "（已离职）";
          break;
      }
      return c;
    }
  },
  methods: {
    // signUpFnc() {
    //   if (!this.userInfo.cellphone) {
    //     console.log("1");
    //   } else {
    //     this.$router.push("./login");
    //   }
    // },
    haveTel() {
      // return false;
      return !this.userInfo.cellphone ? true : false;
    },
    toDetail() {
      if (
        this.userInfo.job_state === "enrolled" ||
        this.userInfo.job_state === "in-service"
      ) {
        this.$router.push("/detail?id=" + this.userInfo.recruitment.id);
      }
    },
    // 去总收益
    toTotal() {
      this.$router.push("/withdraw");
    },
    // 去实名认证
    toAuth() {
      let r = this.haveTel() ? "/login" : "/auth";
      this.$router.push(r);
    },
    // 去钱包
    toWallet() {
      let r = this.haveTel() ? "/login" : "/wallet";
      this.$router.push(r);
    },
    // 去收藏
    toCollect() {
      let r = this.haveTel() ? "/login" : "/collect";
      this.$router.push(r);
    },
    // 去帮助反馈
    toHelp() {
      this.$router.push("/help");
    },
    // 去关于
    toAbout() {
      this.$router.push("/about");
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
