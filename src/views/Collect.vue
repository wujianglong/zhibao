<template>
  <div class="collect">
    <comNav msg="我的收藏"></comNav>
    <div class="collect-content">
      <ul>
        <li>
          <div class="layoutFlex">
            <div>
              <img
                src="http://dl.wangzheka.cn/img/27eb593c8469c94f63271e112b251ef3.jpeg"
                alt=""
              />
            </div>
            <div class="tal">
              <p class="name">南昌环宇兴鑫招聘电焊工</p>
              <p class="detail">
                <span>电焊工</span><span>18-40</span><span>男女不限</span>
              </p>
              <p class="salary">
                <span class="fl color1">4500-6000/月</span>
                <span class="fr mr5">2018-09-11</span>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="layoutFlex">
            <div></div>
            <div>
              <img
                src="http://dl.wangzheka.cn/img/27eb593c8469c94f63271e112b251ef3.jpeg"
                alt=""
              />
            </div>
            <div class="tal">
              <p class="name">南昌环宇兴鑫招聘电焊工</p>
              <p class="detail">
                <span>电焊工</span><span>18-40</span><span>男女不限</span>
              </p>
              <p class="salary">
                <span class="fl color1">4500-6000/月</span>
                <span class="fr mr5">2018-09-11</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "collect",
  data() {
    return {};
  },
  components: {
    comNav
  },
  created() {}
};
</script>
<style lang="stylus" scoped>
.color1
  color #FF7818
.collect
  background #fff
  .collect-content
    padding-top 100px
    li
      border-bottom 1px solid #ececec
      .tal
        flex 1
      img
        width 120px
        height 120px
        margin 25px 40px
      .name
        font-size 32px
        color #1C1C1C
        margin-top 30px
      .detail
        font-size 24px
        color #999
      .salary
        .fr
          color #999
</style>
