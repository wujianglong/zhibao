<template>
  <div class="wallet">
    <comNav msg="我的钱包" />
    <div class="wallet-content">
      <div class="wallet-money">
        <img src="../assets/img/mywallet.png" alt="" />
        <div class="layoutFlex">
          <p class="money tac">{{ userInfo.balance }}</p>
          <p class="tac">总余额(元)</p>
        </div>
      </div>
      <div class="wallet-list">
        <ul>
          <router-link tag="li" to="/bind">
            <div class="layoutFlex">
              <img src="@/assets/img/yinhangka.png" alt="" />
              <span class="txt tal ml3">绑定银行卡</span>
              <span class="right-arrow mr2"></span>
            </div>
          </router-link>

          <router-link tag="li" to="/withdraw">
            <div class="layoutFlex">
              <img src="@/assets/img/zhangdan.png" alt="" />
              <span class="txt tal ml3">提现明细</span>
              <span class="right-arrow mr2"></span>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- <div class="submit-btn mt10">绑定银行卡后操作</div> -->
    <div class="submit-btn mt10" @click="submit">提现</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Toast } from "mint-ui";
import comNav from "@/components/nav/comNav";
export default {
  name: "wallet",
  components: {
    comNav
  },
  computed: {
    ...mapState({
      userInfo: res => res.userInfo
    })
  },
  methods: {
    submit() {
      // this.$api
      //   .withdraw({
      //     amount: Number(this.userInfo.balance)
      //   })
      //   .then(() => {
      //     Toast({
      //       message: "提现申请已完成，等待打款",
      //       position: "bottom",
      //       duration: 2000
      //     });
      //   });

      // 提现完成实名认证
      if (localStorage.getItem("has_identification") === "false") {
        this.$router.push("/auth");
      } else if (localStorage.getItem("has_bind_bank") === "false") {
        this.$router.push("/bind");
      } else {
        this.$api
          .withdraw({
            amount: Number(this.userInfo.balance)
          })
          .then(() => {
            Toast({
              message: "提现申请已完成，等待打款",
              position: "bottom",
              duration: 2000
            });
            this.$store.dispatch("getInfo");
          });

        // 最小提现额度不能小于2元
        // if (Number(this.userInfo.balance) < 2) {
        //   Toast({
        //     message: "最小提现额度不能小于2元",
        //     position: "bottom",
        //     duration: 2000
        //   });
        // } else {
        //   this.$api
        //     .withdraw({
        //       amount: Number(this.userInfo.balance)
        //     })
        //     .then(() => {
        //       Toast({
        //         message: "提现申请已完成，等待打款",
        //         position: "bottom",
        //         duration: 2000
        //       });
        //     });
        // }
      }
    }
  }
};
</script>
<style scoped lang="stylus">
.wallet-content
  padding-top 100px
  .wallet-money
    position relative
    img
      width 100%
    >div
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      align-items center
      flex-direction column
      justify-content center
      p
        width 100%
        text-align center
        color #fff
        font-size 26px
      .money
        font-size 60px
        font-weight bold
  .wallet-list
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
.submit-btn
  height 81px
  line-height 81px
  border-radius 5px
  width 80%
  margin-left 10%
  font-size 36px
  color #fff
  background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
  border-radius 5px
</style>
