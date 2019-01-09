<template>
  <div>
    <comNav msg="关于我们"></comNav>
    <div class="content">
      <p>高薪打工网</p>
      <div>
        声明中，险峰长青称，其前员工李黎及其创立的嘉程资本团队成员吴某、王某，利用其IT系统管理员张某，以不当行为侵害了险峰长青的项目系统知识产权和商业秘密，并向张某支付酬劳。同时，由于项目管理系统的源代码泄露，系统已被迫停用。
        李黎原为险峰长青管理合伙人，2017年2月从险峰长青离职，7月创办嘉程资本。
        险峰长青同时宣布，即日起停止一切与嘉程资本的合作，并退出作为嘉程资本LP的投资；同时，险峰长青要求嘉程资本未来在对外宣传、募资时，除客观陈述相关人员履历等客观事实外，不公开使用“险峰长青”、“险峰华兴”等险峰相关品牌为其增信背书。
      </div>
    </div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "about",
  components: {
    comNav
  }
};
</script>
<style scoped lang="stylus">
.content
  padding 120px 40px
  font-size 26px
  p
    font-size 32px
    margin-bottom 12px
  >div
    text-align left
</style>
