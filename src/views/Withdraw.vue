<template>
  <div class="auth">
    <comNav msg="薪资明细" />
    <div class="auth-content">
      <ul>
        <li class="layoutFlex" v-for="(item, index) in data" :key="index">
          <span>提现金额：{{ item.amount }}</span>
          <span>{{ item.state | status }}</span
          ><span>{{ item.created_at.split("T")[0] }}</span>
        </li>
      </ul>
      <div v-if="data.length === 0" style="margin-top:40px">
        <img src="../assets/img/empty.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "auth",
  data() {
    return {
      data: []
    };
  },
  components: {
    comNav
  },
  filters: {
    status(s) {
      let c = "";
      switch (s) {
        case "pending":
          c = "待处理";
          break;
        case "succeed":
          c = "已成功";
          break;
        case "failed":
          c = "已失败";
          break;
      }
      return c;
    }
  },
  created() {
    // 获取身份证信息
    this.update();
  },
  methods: {
    update() {
      this.$api.getWithdraw().then(res => {
        this.data = res;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.auth-content
  padding-top 100px
  ul
    li
      height 80px
      line-height 80px
      background #fff
      border-bottom 1px solid #ccc
      justify-content space-around
</style>
