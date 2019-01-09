<template>
  <div>
    <comNav msg="帮助反馈"></comNav>
    <div class="content">
      <ul>
        <li>客服电话：15170037957</li>
        <li>QQ：995527576</li>
        <li>微信：wujianglong</li>
      </ul>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "help",
  components: {
    comNav
  }
};
</script>
<style scoped lang="stylus">
.content
  padding-top 100px
  li
    margin-top 40px
    font-size 30px
    text-align left
    margin-left 80px
</style>
