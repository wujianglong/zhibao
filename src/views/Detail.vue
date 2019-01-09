<template>
  <div class="detail">
    <comNav msg="招聘信息"></comNav>
    <div class="detail-content">
      <div class="detail-img">
        <img :src="recruitmentsId.enterprise.img_urls[0]" alt="" />
      </div>
      <div class="detail-location tal mt3 mb3">
        <div class="factory-name">
          <p class="name">{{ recruitmentsId.enterprise.name }}</p>
          <p class="mt1">
            {{ role[recruitmentsId.station] }} |
            {{ recruitmentsId.age_begin }}-{{ recruitmentsId.age_end }} |
            <span v-if="Number(recruitmentsId.gender) === 0">男女不限</span
            ><span v-if="Number(recruitmentsId.gender) === 1">男</span
            ><span v-if="Number(recruitmentsId.gender) === 2">女</span>
          </p>
          <p class="color1 mt1">{{ recruitmentsId.salary }}/月</p>
        </div>
        <div class="factory-location mt3" @click="toMap">
          <div>
            <p><img src="" alt="" />{{ recruitmentsId.enterprise.name }}</p>
            <p class="mt1">{{ recruitmentsId.enterprise.address }}</p>
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
            <!--
              <li>1、年满18周岁以上，年龄18-45周岁为佳。</li>
              <li>2、必须身体健康，没有任何传染性疾病，女性无怀孕者。</li>
              <li>3、必须持有本人真实身份证有效证件。</li>
              <li>4、工资时间不低于260小时。</li>
            -->
            <li>{{ recruitmentsId.requirement }}</li>
          </ul>
          <p class="mb3 mt5">我能赚多少：</p>
          <ul>
            <li>综合工资:{{ recruitmentsId.salary }}</li>
            <li>工资时薪:{{ recruitmentsId.wage }}</li>
          </ul>
          <p class="mb3 mt5">福利待遇：</p>
          <ul>
            <!--
              <li>1、伙食情况：包吃，菜色多样，自由选择。</li>
              <li>2、住宿情况：包住，公司员工四人间宿舍，水电平摊。</li>
              <li>3、公司缴纳五险一金。</li>
            -->
            <li>伙食情况:{{ recruitmentsId.meals }}</li>
            <li>住宿情况:{{ recruitmentsId.commodity }}</li>
          </ul>
        </div>
      </div>
      <!-- 企业介绍 -->
      <div class="desc tal mt5">
        <div class="header layoutFlex mb3">
          <img src="@/assets/img/zu.png" alt="" /> <span>工作内容</span>
          <div></div>
        </div>
        <div class="require">
          <ul>
            <li>{{ recruitmentsId.content }}</li>
          </ul>
        </div>
      </div>

      <!-- 加入收藏/立即报名 -->
      <div class="bottomBtn layoutFlex">
        <div class="joinCollect" @click="toJoin">
          {{ recruitmentsId.has_favorite ? "已收藏" : "加入收藏" }}
        </div>
        <div class="signUp" @click="toSign">
          {{ recruitmentsId.has_enrollment ? "已报名" : "立即报名" }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
import { MessageBox, Toast } from "mint-ui";
export default {
  name: "detail",
  data() {
    return {
      recruitmentsId: [],
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
  created() {
    this.update();
  },
  methods: {
    update() {
      this.$api.recruitmentsId(this.$route.query.id).then(res => {
        this.recruitmentsId = res;
      });
      // 更新个人信息里面 报名 与 收藏字段
      this.$store.dispatch("getInfo");
    },
    toMap() {
      this.$router.push(
        "/map?t1=" +
          this.recruitmentsId.enterprise.city +
          "&t2=" +
          this.recruitmentsId.enterprise.name
      );
    },
    toJoin() {
      let id = this.recruitmentsId.id;
      let f = this.recruitmentsId.has_favorite;
      if (f) {
        // 取消收藏
        this.$api.cancelFavorite(id).then(() => {
          Toast({
            message: "取消收藏成功",
            position: "bottom",
            duration: 2000
          });
          this.update();
        });
      } else {
        // 收藏
        this.$api.favorite(id).then(() => {
          Toast({
            message: "收藏成功",
            position: "bottom",
            duration: 2000
          });
          this.update();
        });
      }
    },
    toSign() {
      let id = this.recruitmentsId.id;
      let f = this.recruitmentsId.has_enrollment;
      let c = f ? "是否取消报名？" : "确认报名？";

      if (!localStorage.cellPhone) {
        this.$router.push("/login");
        return false;
      } else if (
        (localStorage.getItem("job_state") === "enrolled" ||
          localStorage.getItem("job_state") === "in-service") &&
        !this.recruitmentsId.has_enrollment
      ) {
        // 是否  跳往  已经报名厂商列表
        Toast({
          message: "您已经报名过，不能重复再报",
          position: "bottom",
          duration: 2000
        });
        return false;
      }

      MessageBox.confirm(c).then(() => {
        if (f) {
          // 取消报名
          this.$api.cancelRenrollment(id).then(() => {
            Toast({
              message: "取消报名成功",
              position: "bottom",
              duration: 2000
            });
            this.update();
          });
        } else {
          // 报名
          this.$api.renrollment(id).then(() => {
            Toast({
              message: "报名成功",
              position: "bottom",
              duration: 2000
            });
            this.update();
          });
        }
      });
    }
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
    padding-bottom 84px
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
      position relative
      .right-arrow
        position absolute
        width 25px
        height 25px
        right 20px
        top 20px
        border-right 1px solid #ccc
        border-bottom 1px solid #ccc
        transform rotate(-45deg)
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
.bottomBtn
  height 84px
  line-height 84px
  position fixed
  bottom 0
  font-size 36px
  width 100%
  color #fff
  .joinCollect
    background #ffb54d
    flex 1
  .signUp
    background rgba(255,120,24,1)
    flex 1
</style>
