<template>
  <div class="search">
    <searchNav @searchVal="searchVal"></searchNav>
    <div class="search-content">
      <ul class="search-list layoutFlex">
        <!--
          <li class="active"><span>职位</span></li>
          <li><span>论坛</span></li>
          <li><span>婚恋</span></li>
        -->
        <router-link
          tag="li"
          :to="'/detail?id=' + item.id"
          v-for="(item, index) in recruitments"
          :key="index"
        >
          <div class="work-content layoutFlex">
            <div class="work-img mt3 mb3">
              <img :src="item.enterprise.img_urls" alt="" />
            </div>
            <div class="work-txt mt3 mb3 ml3 tal">
              <p class="factory">{{ item.title }}</p>
              <p class="age">
                年龄：<span>{{ `${item.age_begin}-${item.age_end}` }}</span>
                性别：<span v-if="Number(item.gender) === 0">男女不限</span
                ><span v-if="Number(item.gender) === 1">男</span
                ><span v-if="Number(item.gender) === 2">女</span>
              </p>
              <p class="salary">
                薪资：<span class="color1">{{ item.salary }}</span>
              </p>
              <div class="signUp layoutFlex">
                <span>
                  报名<label class="color1">{{ item.enrollment_count }}</label
                  >人
                </span>
                <button>招工中</button>
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import searchNav from "@/components/nav/searchNav";
export default {
  name: "login",
  components: {
    searchNav
  },
  data() {
    return {
      recruitments: []
    };
  },
  methods: {
    searchVal(r) {
      this.$api
        .recruitments({
          params: {
            title: r
          }
        })
        .then(res => {
          this.recruitments = res.results;
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped lang="stylus">
.color1
  color #FF7818
.search
  color #666
  .search-content
    padding-top 100px
    .search-list
      justify-content space-around
      font-size 28px
      li
        width 100%
        .work-content
          width 90%
          margin-left 5%
          .work-img
            width 260px
            height 152px
            img
              width 100%
              height 100%
          .work-txt
            flex 1
            color #666
            .factory
              color #1C1C1C
              font-size 26px
            .signUp
              >span
                flex 1
              button
                color #fff
                font-size 24px
                padding 4px 4px
                border-radius 6px
                background:linear-gradient(90deg,rgba(255,120,24,1),rgba(255,185,80,1));
</style>
