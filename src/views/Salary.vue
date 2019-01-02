<template>
  <div class="auth">
    <comNav msg="薪资列表" />
    <div class="auth-content">
      <ul>
        <li class="layoutFlex" v-for="(item, index) in data" :key="index">
          <span>金额入账：{{ item.amount }}</span>
          <span>账期：{{ item.period }}</span
          ><span>{{ item.created_at.split("T")[0] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "auth",
  data() {
    return {
      // data: [
      //   {
      //     id: 1,
      //     amount: "1.00",
      //     period: "pending",
      //     created_at: "2018-11-16T10:09:22.542360",
      //     updated_at: "2018-11-16T10:09:22.542497"
      //   },
      //   {
      //     id: 1,
      //     amount: "1.00",
      //     period: "pending",
      //     created_at: "2018-11-16T10:09:22.542360"
      //   }
      // ]
      data: []
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
      this.$api.salary().then(res => {
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
