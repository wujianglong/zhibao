<template>
  <div class="home">
    <div class="homeNav layoutFlex">
      <div class="nav-provice ml3" @click="toCity">
        <span>{{ region.province }}</span> <span class="nav-arrow ml1"> </span>
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
            <router-link tag="li" to="/city">
              <img src="@/assets/img/country.png" alt="" />
              <p>地区工作</p>
            </router-link>
            <li @click="toOther">
              <img src="@/assets/img/marry.png" alt="" />
              <p>婚恋交友</p>
            </li>
            <li @click="toOther">
              <img src="@/assets/img/xinshou.png" alt="" />
              <p>新手引导</p>
            </li>
            <li @click="toOther">
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
            <li @click="fliterFnc(0);">
              {{ filterForm.area ? selectArea[filterForm.area - 1] : "区域" }}
              <img src="@/assets/img/scopy.png" alt="" />
            </li>
            <li @click="fliterFnc(1);">
              {{ filterForm.role ? role[filterForm.role] : "工种" }}
              <img src="@/assets/img/scopy.png" alt="" />
            </li>
            <li @click="fliterFnc(2);">
              {{ filterForm.salary ? salary[filterForm.salary] : "薪资" }}
              <img src="@/assets/img/scopy.png" alt="" />
            </li>
            <li @click="fliterFnc(3);">
              {{ filterForm.sort ? filterForm.sort : "排序" }}
              <img src="@/assets/img/scopy.png" alt="" />
            </li>
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
    <!-- 筛选 -->
    <div class="navFilter" v-show="filterFlag">
      <div class="navFilter-header layoutFlex">
        <div class="qr" @click="filterQr">确认</div>
        <div class="select">
          请选择<span v-show="filterIndex === 0">区域</span>
          <span v-show="filterIndex === 1">职位</span>
          <span v-show="filterIndex === 2">薪资</span>
          <span v-show="filterIndex === 3">排序</span>
        </div>
        <div class="cancel" @click="filterCancle">取消</div>
      </div>
      <ul class="navFilter-content">
        <li v-if="filterIndex === 0" class="layoutFlex">
          <div
            @click="areaSelect(0);"
            :class="filterForm.area === 0 ? 'color2' : ''"
          >
            全部
          </div>
          <div
            v-for="(item, index) in selectArea"
            :key="index"
            @click="areaSelect(index + 1);"
            :class="filterForm.area === index + 1 ? 'color2' : ''"
          >
            {{ item }}
          </div>

          <!--
            <div
              @click="areaSelect('新建区');"
              :class="filterForm.area === '新建区' ? 'color2' : ''"
            >
              新建区
            </div>
            <div
              @click="areaSelect('南昌县');"
              :class="filterForm.area === '南昌县' ? 'color2' : ''"
            >
              南昌县
            </div>
          -->
        </li>
        <li v-if="filterIndex === 1" class="layoutFlex">
          <div
            @click="roleSelect(index);"
            v-for="(item, index) in role"
            :class="filterForm.role === index ? 'color2' : ''"
            :key="index"
          >
            {{ item }}
          </div>
        </li>
        <li v-if="filterIndex === 2" class="layoutFlex">
          <div
            @click="salarySelect(index);"
            :class="filterForm.salary === index ? 'color2' : ''"
            v-for="(item, index) in salary"
            :key="index"
          >
            {{ item }}
          </div>
        </li>
        <li v-if="filterIndex === 3" class="layoutFlex"><div>最新更新</div></li>
      </ul>
    </div>
    <footerCom></footerCom>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import footerCom from "@/components/footer/footer.vue";
import cityJson from "@/assets/js/city.js";
import { Toast } from "mint-ui";
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
      ],
      selectArea: [],
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
      ],
      salary: [
        "全部",
        "3000以下",
        "3000-4000",
        "4000-6000",
        "5000-8000",
        "8000以上"
      ],
      filterIndex: 0,
      filterFlag: false,
      filterForm: {
        area: "",
        role: "",
        salary: "",
        sort: ""
      }
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
      userInfo: res => res.userInfo,
      region: res => res.region
    }),
    top() {
      return -this.activeIndex * 16 + "px";
    },
    transition() {
      return this.activeIndex === 0 ? "none" : "top 0.5s";
    }
  },
  watch: {
    region() {
      let c = cityJson.c.filter(o => {
        return o.name === this.region.province;
      });

      let c1 = c[0].city.filter(o => {
        return o.name === this.region.city;
      });

      this.selectArea = c1[0].area;

      this.filterQr();
    }
  },
  created() {
    // 获取banner
    this.filterQr();
    this.$store.dispatch("getBanner");
    this.$api.notices().then(res => {
      this.notifyList = res;
    });
  },
  mounted() {
    let c = cityJson.c.filter(o => {
      return o.name === this.region.province;
    });

    let c1 = c[0].city.filter(o => {
      return o.name === this.region.city;
    });

    this.selectArea = c1[0].area;

    // 获取列表厂商信息
    // this.$api
    //   .recruitments()
    //   .then(res => {
    //     this.recruitments = res.results;
    //   })
    //   .catch(() => {});

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
    toOther() {
      Toast({
        message: "该功能还未上线",
        position: "bottom",
        duration: 2000
      });
    },
    toCity() {
      this.$router.push({ path: "/city" });
    },
    fliterFnc(i) {
      this.filterFlag = true;
      this.filterIndex = i;
    },
    areaSelect(i) {
      this.filterForm.area = i;
    },
    roleSelect(i) {
      this.filterForm.role = i;
    },
    salarySelect(i) {
      this.filterForm.salary = i;
    },
    filterCancle() {
      if (this.filterIndex === 0) {
        if (!this.filterForm.area) {
          this.filterForm.area = "";
          this.filterFlag = false;
        } else {
          this.filterFlag = false;
        }
      } else if (this.filterIndex === 1) {
        if (!this.filterForm.role) {
          this.filterForm.role = "";
          this.filterFlag = false;
        } else {
          this.filterFlag = false;
        }
      } else if (this.filterIndex === 2) {
        if (!this.filterForm.salary) {
          this.filterForm.salary = "";
          this.filterFlag = false;
        } else {
          this.filterFlag = false;
        }
      } else if (this.filterIndex === 3) {
        if (!this.filterForm.sort) {
          this.filterForm.sort = "";
          this.filterFlag = false;
        } else {
          this.filterFlag = false;
        }
      }
    },
    filterQr() {
      // 默认省市
      let d = {
        province: this.region.province,
        city: this.region.city
      };

      // filterForm: {
      //   area: "",
      //   role: "",
      //   salary: "",
      //   sort: ""
      // }

      // 区域
      if (this.filterForm.area && Number(this.filterForm.area) !== 0) {
        d.area = this.role[Number(this.filterForm.area)];
      }

      // 薪资 salary
      if (this.filterForm.salary && Number(this.filterForm.salary) !== 0) {
        d.salary = this.filterForm.salary;
      }

      // 角色 role
      if (this.filterForm.role && Number(this.filterForm.role) !== 0) {
        d.station = this.filterForm.role;
      }

      this.$api
        .recruitments({
          params: d
        })
        .then(res => {
          this.recruitments = res.results;
        })
        .catch(() => {});

      this.filterFlag = false;

      // if()
      // title={title}&salary={salary}&station={station}&province={province}&city={city}&area={area}
      // let d = {};
      // if (filterForm.area)
      // this.$api
      // .recruitments()
      // .then(res => {
      //   this.recruitments = res.results;
      // })
      // .catch(() => {});
    }
  }
};
</script>
<style scoped lang="stylus">
.swiper-container
  height 400px
  img
    height 100%
.color1
  color #FF7818
.color2
  background #00aafb!important
  color #fff!important
.home
  .homeNav
    height 100px
    line-height 100px
    font-size 32px
    color #fff
    background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,121,25,1))
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999;
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
    padding-top 100px
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
    color #fff
    .filter
      border-bottom 1px solid #ececec
      background #fff
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
      background #fff
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

.navFilter
  position fixed
  width 100%
  height 260px
  bottom 113px
  background #fff
  .navFilter-header
    width 100%
    height 75px
    background #00aafb
    line-height 75px
    color #fff
    align-items center
    .qr
      height 46px
      line-height 46px
      background #ff9300
      text-align center
      flex 1
      margin-left 30px
      border-radius 4px
    .cancel
      color #fff
      height 46px
      line-height 46px
      background #8c8c8c
      text-align center
      flex 1
      margin-right 30px
      border-radius 4px
    .select
      flex 4
  .navFilter-content
    overflow auto
    background #fff
    li
      flex-wrap wrap
      div
        height 50px
        line-height 50px
        padding 0 10px
        background #f3f3f3
        color #666
        border-radius 4px
        margin-left 16px
        margin-top 10px
</style>
