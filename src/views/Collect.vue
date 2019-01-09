<template>
  <div class="collect">
    <comNav msg="我的收藏"></comNav>
    <div class="collect-content">
      <div v-if="data.length === 0" style="margin-top:40px">
        <img src="../assets/img/empty.png" alt="" />
      </div>
      <ul>
        <li
          v-for="(item, index) in data"
          :key="index"
          @click="toDetail(item.id);"
        >
          <div class="layoutFlex">
            <div><img :src="item.enterprise.img_urls[0]" alt="" /></div>
            <div class="tal">
              <p class="name">{{ item.title }}</p>
              <p class="detail">
                {{ item.age_begin }}-{{ item.age_end }} |
                <span>{{ role[item.station] }}</span> |
                <span v-if="Number(item.gender) === 0">男女不限</span
                ><span v-if="Number(item.gender) === 1">男</span
                ><span v-if="Number(item.gender) === 2">女</span>
                <!-- <span>男女不限</span> -->
              </p>
              <p class="salary">
                <span class="fl color1">{{ item.salary }}/月</span>
                <span class="fr mr5">{{ item.created_at.split("T")[0] }}</span>
              </p>
            </div>
          </div>
        </li>
        <!--
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
        -->
      </ul>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "collect",
  data() {
    return {
      data: [],
      role: [
        "全部",
        "普通就业",
        "协警",
        "机器人专区",
        "保安专区",
        "辅警",
        "工程师",
        "计算机专业",
        "机器人视觉",
        "临时工",
        "尖端职业"
      ]
    };
  },
  components: {
    comNav
  },
  methods: {
    toDetail(r) {
      this.$router.push("/detail?id=" + r);
    }
  },
  created() {
    this.$api.collect().then(res => {
      this.data = res.results;
    });
  }
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
