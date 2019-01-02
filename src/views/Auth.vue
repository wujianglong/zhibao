<template>
  <div class="auth">
    <comNav msg="实名认证" />
    <div class="auth-content">
      <!-- <ul>
        <li>
          <span class="leftSpan"> 真实姓名: </span>
          <input type="text" placeholder="您的真实姓名" />
        </li>
        <li><span class="leftSpan"> 手机号码: </span> <input type="text" /></li>
        <li>
          <span class="leftSpan"> 性别: </span>男
          <input type="radio" v-model="sex" value="man" />女
          <input type="radio" v-model="sex" value="women" id="radio1" />
        </li>
        <li>
          <span class="leftSpan"> 身份证号: </span>
          <input type="text" placeholder="输入身份证号码" />
        </li>
      </ul> -->
    </div>
    <div class="middle">拍摄您的第二代身份证原件,请确保图片清晰,四角完整</div>
    <div class="photo">
      <p class="mt3 mb3">身份证正面</p>
      <div>
        <img v-if="front_img_url" src="front_img_url" alt="" />
        <img v-if="!front_img_url" src="@/assets/img/photo.png" alt="" />
      </div>
      <p class="mt3 mb3">身份证反面</p>
      <div class="mb3">
        <img v-if="back_img_url" src="front_img_url" alt="" />
        <img v-if="!back_img_url" src="@/assets/img/photo.png" alt="" />
      </div>
      <div class="authBtn mt10 mb20">立即认证</div>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "auth",
  data() {
    return {
      sex: "man",
      front_img_url: "",
      back_img_url: ""
    };
  },
  components: {
    comNav
  },
  created() {
    // 获取身份证信息
    this.update();
  },
  methods: {
    update() {
      this.$api.getIdentification().then(res => {
        this.front_img_url = res.front_img_url;
        this.back_img_url = res.back_img_url;
      });
    }
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
.leftSpan
  display inline-block
  width 200px
input[type=radio]
  -webkit-appearance radio
  margin-left 30px!important
  margin-right 80px!important
</style>
