<template>
  <div class="detail">
    <comNav msg="招聘信息"></comNav>
    <div class="detail-content">
      <div class="detail-img">
        <img
          src="http://dl.wangzheka.cn/img/27eb593c8469c94f63271e112b251ef3.jpeg"
          alt=""
        />
      </div>
      <div class="detail-location tal mt3 mb3">
        <div class="factory-name">
          <p class="name">南昌环宇兴鑫招聘电焊工</p>
          <p class="mt1">电焊工 | 18-40 | 男女不限</p>
          <p class="color1 mt1">4500-6000/月</p>
        </div>
        <div class="factory-location mt3">
          <div>
            <p><img src="" alt="" />南昌环宇兴鑫建材有限公司</p>
            <p class="mt1">江西省南昌县小蓝经济开发区小蓝二路281号</p>
          </div>
          <div class="right-arrow"></div>
        </div>
      </div>
      <!-- 岗位描述 -->
      <div class="desc tal mt5">
        <div class="header layoutFlex mb3">
          <img src="@/assets/img/zu.png" alt="" /> <span>岗位描述</span>
          <div></div>
        </div>
        <div class="require">
          <p class="mb3">入职要求：</p>
          <ul>
            <li>1、年满18周岁以上，年龄18-45周岁为佳。</li>
            <li>2、必须身体健康，没有任何传染性疾病，女性无怀孕者。</li>
            <li>3、必须持有本人真实身份证有效证件。</li>
            <li>4、工资时间不低于260小时。</li>
          </ul>
          <p class="mb3 mt5">福利待遇：</p>
          <ul>
            <li>1、伙食情况：包吃，菜色多样，自由选择。</li>
            <li>2、住宿情况：包住，公司员工四人间宿舍，水电平摊。</li>
            <li>3、公司缴纳五险一金。</li>
          </ul>
        </div>
      </div>
      <!-- 企业介绍 -->
      <div class="desc tal mt5">
        <div class="header layoutFlex mb3">
          <img src="@/assets/img/zu.png" alt="" /> <span>岗位描述</span>
          <div></div>
        </div>
        <div class="require">
          <ul>
            <li>
              南昌环宇兴鑫建材有限公司，公司主要生产建筑材料，通用机械、金
              属材料、劳保用品、服装、针纺品加工销售；机械电脑印花；自营和
              代理商品技术的进出口、但国家限定公司经营或禁止进出品的商品技
              术除外。
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "detail",
  components: {
    comNav
  }
};
</script>
<style scoped lang="stylus">
.color1
  color #FF7818
.detail
  position absolute
  overflow auto
  height 100%
  padding-bottom 30px
  top 0
  background #fff
  .detail-content
    padding-top 100px
    .detail-img
      img
        width 100%
  .detail-location
    padding 0.3rem 0
    color #999
    width 92%
    margin-left 4%
    background rgba(255,255,255,1)
    box-shadow 0px 8px 15px 0px rgba(223,223,223,0.75)
    border-radius 10px
    .factory-location
      width 90%
      margin-left 5%
    .factory-name
      padding-bottom 0.3rem
      width 90%
      margin-left 5%
      border-bottom 1px solid #ececec
      .name
        color #1C1C1C
        font-size 32px
        font-weight bold
  .desc
    width 90%
    margin-left 5%
    .require
      p
        color #333
    .header
      font-size 26px
      align-items center
      span
        margin-left 15px
        margin-right 15px
      img
        width 30px
      >div
        height 1px
        flex 1
        border-top 2px solid #ececec
    ul
      color #999
</style>
