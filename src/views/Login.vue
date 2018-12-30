<template>
  <div class="login">
    <div class="login-img">
      <img
        src="http://dl.wangzheka.cn/img/27eb593c8469c94f63271e112b251ef3.jpeg"
        alt=""
      />
    </div>
    <div class="login-content mt10">
      <div class="login-input-list tal">
        <div class="tel">
          <span class="color1"> +86 </span>
          <input
            type="text"
            v-model="tel"
            class="ml5"
            placeholder="请输入手机号码"
          />
        </div>
        <div class="layoutFlex code mt5">
          <input type="text" placeholder="请输入验证码" />
          <div class="getCode tac" @click="getCode">{{ codeTxt }}</div>
        </div>
      </div>
      <div class="loginBtn mt10" @click="loginFnc">登陆</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      tel: "",
      codeTxt: "获取验证码",
      verifyFlag: false
    };
  },
  methods: {
    loginFnc() {
      this.$router.push("/");
    },
    getCode() {
      let z = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (!z.test(this.tel)) {
        alert("手机号格式不对");
        // Toast({
        //   message: '手机号格式不对',
        //   position: 'bottom',
        //   duration: 2000
        // });
        // this.telFocus = true
        return false;
      }

      if (!this.verifyFlag) {
        this.$api.send({
          cellphone: this.tel
        });

        this.verifyFlag = true;
        let i = 5;
        this.codeTxt = `${i}s`;
        let inter = setInterval(() => {
          if (i <= 0) {
            this.verifyFlag = false;
            clearInterval(inter);
            this.codeTxt = `获取验证码`;
          } else {
            i--;
            this.codeTxt = `${i}s`;
          }
        }, 1000);
      }
    }
  }
};
</script>
<style scoped lang="stylus">
.color1
  color #FF7818
.login
  .login-img
    img
      width 100%
  position absolute
  height 100%
  width 100%
  background #fff
  color #666
  .login-content
    width 80%
    margin-left 10%
    color #666
    .login-input-list
      >div
        border-bottom 1px solid #B6B6B6
        height 100px
        line-height 100px
        text-indent 12px
      .tel
        .color1
          font-size 32px
          font-weight bold
      .code
        input
          flex 1
        align-items center
        .getCode
          width 187px
          color #fff
          display inline-block
          height 58px
          border-radius 58px
          line-height 58px
          background rgba(255,120,24,1)
          border 1px solid rgba(225,225,225,1)
  .loginBtn
    width 88%
    margin-left 6%
    height 80px
    background rgba(255,120,24,1)
    border-radius 40px
    line-height 80px
    font-size 40px
    color #fff
</style>
