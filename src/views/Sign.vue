<template>
  <div class="sign">
    <comNav msg="一键报名" />
    <div class="sign-content">
      <ul>
        <li>
          <span> 真实姓名: </span>
          <input type="text" v-model="name" placeholder="您的真实姓名" />
        </li>
        <li>
          <span> 手机号码: </span>
          <input type="text" v-model="tel" placeholder="您的手机号码" />
        </li>
        <li>
          <span> 图形验证码: </span>
          <input type="text" v-model="chartCode" placeholder="输入图形验证码" />
        </li>
        <li>
          <span> 手机验证码: </span>
          <input type="text" v-model="code" placeholder="输入手机验证码" />
          <span class="code tac" @click="sendCode">{{ codeTxt }}</span>
        </li>
        <li><span> 意向地区: </span> <input type="text" /></li>
      </ul>
    </div>
    <div class="submit-btn mt10" @click="signUp">立即报名</div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "sign",
  data() {
    return {
      codeTxt: "获取验证码",
      name: "",
      tel: "",
      chartCode: "",
      code: ""
    };
  },
  components: {
    comNav
  },
  methods: {
    sendCode() {
      let c = 60;
      this.codeTxt = 60 + "s后再次发送";
      let s = setInterval(() => {
        c--;
        if (c <= 0) {
          clearInterval(s);
          this.codeTxt = "获取验证码";
        } else {
          this.codeTxt = `${c}s后再次发送`;
        }
      }, 1000);
    },
    signUp() {}
  }
};
</script>
<style lang="stylus" scoped>
.sign
  .sign-content
    padding-top 100px
    background #fff
    ul
      li
        text-align left
        color #333
        font-size 30px
        padding-left 40px
        height 100px
        line-height 100px
        border-bottom 1px solid #ececec
        input
          margin-left 80px
          width 240px
        .code
          display inline-block
          width 187px
          height 57px
          line-height 57px
          border-radius 60px
          font-size 26px
          color #fff
          margin-left 20px
          background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
  .submit-btn
    height 81px
    line-height 81px
    background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
    border-radius 5px
    color #fff
    width 80%
    margin-left 10%
    font-size 36px
</style>
