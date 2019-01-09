<template>
  <div id="app">
    <div id="app-content">
      <keep-alive> <router-view v-if="$route.meta.keepAlive" /> </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>
<script>
import wx from "weixin-js-sdk";
export default {
  name: "app",
  watch: {
    $route() {
      this.config();
    }
  },
  created() {
    let _self = this;
    localStorage.removeItem("token");
    // 经纬度
    // let region = {
    //   province: "江西省",
    //   city: "南昌市",
    //   area: "新建区"
    // };

    // _self.$store.commit("region", region);

    // 通过微信jssdk获取经纬度 通过百度api接口反编译取得当前省市地区
    this.config().then(() => {
      wx.ready(() => {
        wx.getLocation({
          type: "wgs84",
          success(res) {
            let myGeo = new BMap.Geocoder();
            // _self.$store.commit("address", {
            //   j: res.longitude,
            //   w: res.latitude
            // });
            myGeo.getLocation(
              new BMap.Point(res.longitude, res.latitude),
              function(result) {
                if (result) {
                  _self.$store.commit("region", {
                    province: result.addressComponents.province,
                    city: result.addressComponents.city,
                    area: ""
                  });
                }
              }
            );
          },
          cancel() {
            _self.$store.commit("region", {
              province: "江西省",
              city: "南昌市",
              area: ""
            });
          }
        });
      });
    });

    // 获取token
    this.$store
      .dispatch("getToken", {
        code: this.$route.query.code
      })
      .then(() => {
        // 通过token 获取用户信息
        this.$store.dispatch("getInfo");
      });
  },
  methods: {
    config() {
      return new Promise(resolve => {
        this.$api
          .sign({
            url: location.href.split("#")[0]
          })
          .then(res => {
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: "wx1cf833c38629383a", // 必填，公众号的唯一标识
              timestamp: res.timestamp, // 必填，生成签名的时间戳
              nonceStr: res.noncestr, // 必填，生成签名的随机串
              signature: res.signature, // 必填，签名
              jsApiList: [
                "chooseImage",
                "previewImage",
                "uploadImage",
                "downloadImage",
                "getLocation",
                "updateTimelineShareData"
              ]
            });
            resolve();
          });
      });
    }
  }
  // destroyed() {
  //   window.removeEventListener("beforeunload", e =>
  //     this.beforeunloadHandler(e)
  //   );
  // },
  // mounted() {
  //   window.addEventListener("beforeunload", e => this.beforeunloadHandler(e));
  // }
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  #app-content
    height 100%
</style>
