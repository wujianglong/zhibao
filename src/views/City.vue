<template>
  <div class="city">
    <cityNav msg="选择区域" />
    <div class="city-content layoutFlex">
      <div class="city-l">
        <ul>
          <li
            v-for="(item, index) in data"
            :key="index"
            :class="index === idx ? 'active' : ''"
            @click="provinceSelect(item.name, index);"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="city-r">
        <ul>
          <li v-for="(item, index) in data1" :key="index">{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <div class="location">定位到当前城市</div>
  </div>
</template>
<script>
import cityNav from "@/components/nav/cityNav.vue";
import cityJson from "@/assets/js/city.js";
export default {
  name: "city",
  components: {
    cityNav
  },
  data() {
    return {
      data: cityJson.c,
      data1: cityJson.c[0].city,
      idx: 0
    };
  },
  methods: {
    provinceSelect(name, i) {
      this.data.forEach(o => {
        if (o.name === name) {
          this.data1 = o.city;
          this.idx = i;
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.city
  height 100%
  overflow hidden
  .city-content
    padding-bottom 98px
    overflow hidden
    padding-top 100px
    height 100%
    .city-l
      width 190px
      background #fff
      overflow auto
      li
        height 75px
        line-height 75px
        font-size 32px
        color #666
      li.active
        color #fff
        background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,121,25,1))
    .city-r
      flex 1
      height 75px
      line-height 75px
      font-size 32px
      color #666
      height 100%
      overflow auto
  .location
    position fixed
    bottom 0
    background #fff
    width 100%
    height 98px
    line-height 98px
</style>
