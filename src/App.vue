<template>
  <div id="app">
    <div id="app-content">
      <keep-alive> <router-view v-if="$route.meta.keepAlive" /> </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  created() {
    // 获取token
    this.$store
      .dispatch("getToken", {
        code: this.$route.query.code
      })
      .then(() => {
        // 通过token 获取用户信息
        this.$store.dispatch("getInfo");
      });
  }
  // methods: {
  //   beforeunloadHandler(e) {
  //     localStorage.removeItem("token");
  //   }
  // },
  // destroyed() {
  //   window.removeEventListener("beforeunload", e =>
  //     this.beforeunloadHandler(e)
  //   );
  // }
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
