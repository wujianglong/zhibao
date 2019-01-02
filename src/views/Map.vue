<template>
  <div class="map">
    <comNav msg="厂址"></comNav>
    <div id="map-content"></div>
  </div>
</template>
<script>
import comNav from "@/components/nav/comNav";
export default {
  name: "map",
  components: {
    comNav
  },
  mounted() {
    this.$nextTick(function() {
      let map = new BMap.Map("map-content");
      let point = new BMap.Point(116.400244, 39.92556);

      map.centerAndZoom(point, 12);
      let marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      let label = new BMap.Label("江西省南昌市饮料厂", {
        offset: new BMap.Size(20, -10)
      });
      marker.setLabel(label);
      map.enableScrollWheelZoom(true);
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
