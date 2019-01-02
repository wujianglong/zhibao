<template>
  <div class="home">
    <div class="homeNav layoutFlex">
      <div class="nav-provice ml3" @click="toCity">
        <span> 江西省</span> <span class="nav-arrow ml1"> </span>
      </div>
      <div class="nav-input" @click="toSearch">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
    <div class="top-content">
      <div class="carousel">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in banner_info" :key="index">
            <img :src="item.img_url" alt="" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 地区工作 婚恋交友 新手引导 邀请有礼 -->
      <div class="list mt3">
        <div>
          <ul class="layoutFlex">
            <li>
              <img src="@/assets/img/country.png" alt="" />
              <p>地区工作</p>
            </li>
            <li>
              <img src="@/assets/img/marry.png" alt="" />
              <p>婚恋交友</p>
            </li>
            <li>
              <img src="@/assets/img/xinshou.png" alt="" />
              <p>新手引导</p>
            </li>
            <li>
              <img src="@/assets/img/invite.png" alt="" />
              <p>邀请有礼</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 头条 -->
      <div class="news">
        <div class="news-content layoutFlex">
          <div class="news-img"><img src="@/assets/img/news.png" alt="" /></div>
          <div class="news-txt-parents">
            <div class="news-txt ml3" :style="{ top, transition }">
              <p class="cb" v-for="(item, index) in notifyList" :key="index">
                <span class="color1 ml5 fl">{{
                  item.created_at.split("T")[0]
                }}</span>
                <span class="fl ml5">{{ item.title }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content mt3">
      <div class="filter">
        <div class="filter-content">
          <ul class="layoutFlex">
            <li>区域 <img src="@/assets/img/scopy.png" alt="" /></li>
            <li>工种 <img src="@/assets/img/scopy.png" alt="" /></li>
            <li>薪资 <img src="@/assets/img/scopy.png" alt="" /></li>
            <li>排序 <img src="@/assets/img/scopy.png" alt="" /></li>
          </ul>
        </div>
      </div>
      <div class="work">
        <ul>
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
                <p class="factory">{{ item.enterprise.name }}</p>
                <p class="age">
                  年龄：<span>{{ item.age }}</span>
                  <!-- 性别：<span>男女不限</span> -->
                </p>
                <p class="salary">
                  薪资：<span class="color1">{{ item.salary }}</span>
                </p>
                <div class="signUp layoutFlex">
                  <span> 报名<label class="color1">22</label>人 </span>
                  <button>招工中</button>
                </div>
              </div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <footerCom></footerCom>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import footerCom from "@/components/footer/footer.vue";
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      recruitments: [],
      activeIndex: 0,
      notifyList: [
        // {
        //   id: 1,
        //   title: "title1",
        //   content: "content11",
        //   state: "show",
        //   created_at: "2018-10-23T21:43:37.142191",
        //   updated_at: "2018-10-23T21:43:37.146541"
        // },
        // {
        //   id: 2,
        //   title: "title2",
        //   content: "content22",
        //   state: "show",
        //   created_at: "2018-10-23T21:43:37.142191",
        //   updated_at: "2018-10-23T21:43:37.146541"
        // },
        // {
        //   id: 1,
        //   title: "title3",
        //   content: "content11",
        //   state: "show",
        //   created_at: "2018-10-23T21:43:37.142191",
        //   updated_at: "2018-10-23T21:43:37.146541"
        // },
        // {
        //   id: 2,
        //   title: "title4",
        //   content: "content22",
        //   state: "show",
        //   created_at: "2018-10-23T21:43:37.142191",
        //   updated_at: "2018-10-23T21:43:37.146541"
        // }
      ]
    };
  },
  components: {
    footerCom,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      banner_info: res => res.banner_info,
      // recruitments: res => res.recruitments,
      userInfo: res => res.userInfo
    }),
    top() {
      return -this.activeIndex * 16 + "px";
    },
    transition() {
      return this.activeIndex === 0 ? "none" : "top 0.5s";
    }
  },
  created() {
    // 获取banner
    this.$store.dispatch("getBanner");

    // 获取公告 notices
    this.$api.notices().then(res => {
      this.notifyList = res;
    });

    // 获取列表厂商信息
    this.$api
      .recruitments()
      .then(res => {
        this.recruitments = res.results;
      })
      .catch(() => {});
  },
  mounted() {
    setInterval(() => {
      this.notifyList.push(this.notifyList[0]);
      this.activeIndex += 1;
    }, 3000);
    setTimeout(() => {
      setInterval(() => {
        this.notifyList.splice(0, 1);
        this.activeIndex = 0;
      }, 3000);
    }, 500);
  },
  methods: {
    toSearch() {
      this.$router.push({ path: "/search" });
    },
    toCity() {
      this.$router.push({ path: "/city" });
    }
  }
};
</script>
<style scoped lang="stylus">
.color1
  color #FF7818
.home
  .homeNav
    height 100px
    line-height 100px
    font-size 32px
    color #fff
    background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,121,25,1))
    .nav-provice
      font-size 24px
      .nav-arrow
        display inline-block
        width 16px
        height 16px
        border-right 1px solid #fff
        border-bottom 1px solid #fff
        position relative
        top -4px
        transform rotate(45deg)
    .nav-input
      flex 1
      input
        height 60px
        border-radius 60px
        color #fff
        width 90%
        text-indent 5%
        font-size 24px
        background rgba(255, 255, 255, .5)
      input::-webkit-input-placeholder
        color #fff
  .top-content
    background #fff
    .carousel
      img
        width 100%
    .list
      padding-bottom 16px
      >div
        width 90%
        margin-left 5%
        ul
          justify-content space-between
          li
            img
              width 92px
              height 92px
              border-radius 92px
              margin-bottom 6px
    .news
      height 118px
      border-top 0.5px solid #ececec
      .news-content
        position relative
        height 100%
        align-items center
        width 90%
        margin-left 5%
        .news-img
          width 93px
          border-right 1px solid rgb(220,220,220)
          padding-right 20px
          img
            width 100%
        .news-txt-parents
          position relative
          height 64px
          overflow hidden
          width 100%
          .news-txt
            height 64px
            position: absolute;
            top 16px
            left 0
            right 0
  .bottom-content
    background #fff
    color #fff
    .filter
      border-bottom 1px solid #ececec
      .filter-content
        ul
          justify-content space-between
          font-size 29px
          height 75px
          line-height 75px
        width 90%
        margin-left 5%
        li
          color #666
          img
            width 28px
    .work
      padding-bottom 113px
      li
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
