<template>
  <div class="auth">
    <comNav msg="实名认证" />
    <div class="auth-content">
      <ul>
        <li>
          <span> 真实姓名: </span>
          <input type="text" placeholder="您的真实姓名" />
        </li>
        <li>
          <span> 手机号码: </span> <input type="radio" />男
          <input type="radio" />女 <input type="radio" id="radio1" />
        </li>
        <li>
          <span> 身份证号: </span>
          <input type="text" placeholder="输入身份证号码" />
        </li>
      </ul>
    </div>
    <div class="middle">拍摄您的第二代身份证原件,请确保图片清晰,四角完整</div>
    <div class="photo">
      <p class="mt3 mb3">身份证正面</p>
      <div><img src="@/assets/img/photo.png" alt="" /></div>
      <p class="mt3 mb3">身份证反面</p>
      <div class="mb3"><img src="@/assets/img/photo.png" alt="" /></div>
      <div class="authBtn mt10 mb20">立即认证</div>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "auth",
  components: {
    comNav
  }
};
</script>
<style lang="stylus" scoped>
.auth
  .auth-content
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
  .middle
    height 83px
    line-height 83px
    color #989898
    font-size 26px
    font-weight bold
  .photo
    overflow hidden
    background #fff
    height 100%
    img
      width 372px
  .authBtn
    height 81px
    background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
    border-radius 5px
    line-height 81px
    font-size 36px
    color #fff
    width 80%
    margin-left 10%
</style>
