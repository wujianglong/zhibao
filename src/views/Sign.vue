<template>
  <div class="sign">
    <comNav msg="一键报名" />
    <div class="sign-content">
      <ul>
        <li>
          <span> 真实姓名: </span>
          <input type="text" placeholder="您的真实姓名" />
        </li>
        <li>
          <span> 手机号码: </span>
          <input type="text" placeholder="您的手机号码" />
        </li>
        <li>
          <span> 图形验证码: </span>
          <input type="text" placeholder="输入图形验证码" />
        </li>
        <li>
          <span> 手机验证码: </span>
          <input type="text" placeholder="输入手机验证码" />
        </li>
        <li><span> 意向地区: </span> <input type="text" /></li>
      </ul>
    </div>
    <div class="submit-btn mt10">立即报名</div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "sign",
  components: {
    comNav
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
          margin-left 100px
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
