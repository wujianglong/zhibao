<template>
  <div class="search">
    <searchNav></searchNav>
    <div class="search-content">
      <ul class="search-list layoutFlex">
        <li class="active"><span>职位</span></li>
        <li><span>论坛</span></li>
        <li><span>婚恋</span></li>
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
        height 80px
        line-height 80px
        span
          padding 0 10px
          display inline-block
      li.active
        color #FF7818
        border-bottom 2px solid #FF7818
</style>
