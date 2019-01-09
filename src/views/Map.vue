<template>
  <div class="map">
    <comNav msg="厂址"></comNav>
    <div id="map-content"></div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
import { mapState } from "vuex";
export default {
  name: "map",
  components: {
    comNav
  },
  computed: {
    ...mapState({
      address: state => state.address
    })
  },
  mounted() {
    this.$nextTick(function() {
      // var map = new BMap.Map("allmap");
      // var point = new BMap.Point(116.331398, 39.897445);
      // map.centerAndZoom(point, 12);
      // // 创建地址解析器实例
      // var myGeo = new BMap.Geocoder();
      // // 将地址解析结果显示在地图上,并调整地图视野
      // myGeo.getPoint(
      //   "北京市海淀区上地10街",
      //   function(point) {
      //     if (point) {
      //       map.centerAndZoom(point, 16);
      //       map.addOverlay(new BMap.Marker(point));
      //     } else {
      //       alert("您选择地址没有解析到结果!");
      //     }
      //   },
      //   "北京市"
      // );
      // let map = new BMap.Map("map-content");
      // let point = new BMap.Point(116.400244, 39.92556);
      // map.centerAndZoom(point, 12);
      // let marker = new BMap.Marker(point); // 创建标注
      // map.addOverlay(marker); // 将标注添加到地图中
      // let label = new BMap.Label("新建二中", {
      //   offset: new BMap.Size(20, -10)
      // });
      // marker.setLabel(label);
      // map.enableScrollWheelZoom(true);
      // 正向地理编码
      let map = new BMap.Map("map-content");
      let point = new BMap.Point(116.400244, 39.92556);
      var myGeo = new BMap.Geocoder();
      myGeo.getPoint(
        this.$route.query.t2,
        function(point) {
          if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
          }
        },
        this.$route.query.t1
      );
      // 反向地理编码
      // let map = new BMap.Map("map-content");
      // let point = new BMap.Point(116.400244, 39.92556);
      // var myGeo = new BMap.Geocoder();
      // myGeo.getLocation(new BMap.Point(115.89352755, 28.689578), function(
      //   result
      // ) {
      //   if (result) {
      //     console.log(result);
      //   }
      // });
    });
  }
};
</script>
<style scoped lang="stylus">
.map
  height 100%
  #map-content
    padding-top 100px
    position relative
    height 100%
    overflow hidden
    margin 0
    font-family "微软雅黑"
</style>
