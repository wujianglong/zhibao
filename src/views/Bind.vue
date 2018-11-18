<template>
  <div class="bind">
    <comNav msg="绑定银行卡"></comNav>
    <div class="bind-content">
      <ul>
        <li><input type="text" placeholder="请输入银行卡号" /></li>
        <li><input type="text" placeholder="请输入持卡人身份证号" /></li>
        <li><input type="text" placeholder="请输入持卡人手机号码" /></li>
        <li><input type="text" placeholder="请输入持卡人姓名" /></li>
        <li><input type="text" placeholder="银行卡开户省份" /></li>
        <li><input type="text" placeholder="银行卡开户行" /></li>
        <li><input type="text" placeholder="请输入图形验证码" /></li>
      </ul>
    </div>
    <div class="submit-btn mt10">提交</div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav.vue";
export default {
  name: "bind",
  components: {
    comNav
  }
};
</script>
<style lang="stylus" scoped>
.bind
  .bind-content
    width 100%
    background #fff
    ul
      li
        text-align left
        color #999
        font-size 30px
        padding-left 40px
        height 100px
        line-height 100px
        border-bottom 1px solid #ececec
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
