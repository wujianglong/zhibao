<template>
  <div class="city">
    <cityNav @submitFnc="submit" msg="选择区域" />
    <div class="city-content layoutFlex">
      <div class="city-l">
        <ul>
          <li
            v-for="(item, index) in data"
            :key="index"
            :class="item.name === region1.province ? 'active' : ''"
            @click="provinceSelect(item.name, index);"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="city-r">
        <ul>
          <li
            v-for="(item, index) in data1"
            :key="index"
            :class="item.name === region1.city ? 'color1' : ''"
            @click="cityFnc(index, item.name);"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="location">定位到当前城市</div> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
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
      idx: 0,
      cityIdx: 0,
      region1: {}
    };
  },
  computed: {
    ...mapState({
      region: res => res.region
    })
  },
  created() {
    this.region1 = Object.assign({}, this.region);
    let c = this.data.filter((o, i) => {
      return o.name === this.region1.province;
    });
    this.data1 = c[0].city;
  },
  methods: {
    provinceSelect(name, i) {
      this.cityIdx = 0;

      this.data.forEach(o => {
        if (o.name === name) {
          this.data1 = o.city;
          this.region1.province = name;
        }
      });
      this.region1.area = "";
      this.region1.city = this.data1[0].name;
    },
    cityFnc(i, n) {
      this.cityIdx = i;
      this.region1.city = n;
      this.region1.area = "";
    },
    submit() {
      this.$store.commit("region", this.region1);
      this.$router.push("/");
    }
  }
};
</script>
<style lang="stylus" scoped>
.color1
  color #ff7919
.city
  height 100%
  overflow hidden
  .city-content
    // padding-bottom 98px
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
