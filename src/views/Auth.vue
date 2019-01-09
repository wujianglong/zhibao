<template>
  <div class="auth">
    <comNav msg="实名认证" />
    <div class="auth-content">
      <!--
        <ul>
          <li>
            <span class="leftSpan"> 真实姓名: </span>
            <input type="text" placeholder="您的真实姓名" />
          </li>
          <li><span class="leftSpan"> 手机号码: </span> <input type="text" /></li>
          <li>
            <span class="leftSpan"> 性别: </span>男
            <input type="radio" v-model="sex" value="man" />女
            <input type="radio" v-model="sex" value="women" id="radio1" />
          </li>
          <li>
            <span class="leftSpan"> 身份证号: </span>
            <input type="text" placeholder="输入身份证号码" />
          </li>
        </ul>
      -->
    </div>
    <div class="middle">拍摄您的第二代身份证原件,请确保图片清晰,四角完整</div>
    <div class="photo">
      <p class="mt3 mb3">身份证正面</p>
      <div @click="uploadFront">
        <img v-if="front_img_url" :src="front_img_url" alt="" />
        <img v-if="!front_img_url" src="@/assets/img/photo.png" alt="" />
      </div>
      <p class="mt3 mb3">身份证反面</p>
      <div class="mb3" @click="uploadBack">
        <img v-if="back_img_url" :src="back_img_url" alt="" />
        <img v-if="!back_img_url" src="@/assets/img/photo.png" alt="" />
      </div>
      <div class="authBtn mt10 mb20" @click="authFnc">立即认证</div>
    </div>
  </div>
</template>
<script>
import wx from "weixin-js-sdk";
import { Toast } from "mint-ui";
import comNav from "@/components/nav/comNav";
export default {
  name: "auth",
  data() {
    return {
      sex: "man",
      front_img_url: "",
      back_img_url: "",
      localFrontId: "",
      localBackId: "",
      serverFrontId: "",
      serverBackId: ""
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
    authFnc() {
      if (!this.front_img_url || !this.back_img_url) {
        Toast({
          message: "还未上传完全",
          position: "bottom",
          duration: 2000
        });
      } else {
        this.$api
          .identification({
            face_img_url: this.front_img_url,
            back_img_url: this.back_img_url
          })
          .then(() => {
            Toast({
              message: "上传成功",
              position: "bottom",
              duration: 2000
            });
            this.$store.dispatch("getInfo");
          })
          .catch(() => {});
      }
    },
    update() {
      this.$api.getIdentification().then(res => {
        this.front_img_url = res.face_img_url;
        this.back_img_url = res.back_img_url;
      });
    },
    uploadFront() {
      let _self = this;
      // 上传正面
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          let length = res.localIds.length;
          if (length === 0 || length > 1) {
            Toast({
              message: "请选择一张图片",
              position: "bottom",
              duration: 2000
            });
            return;
          }

          _self.localFrontId = res.localIds;

          // localData是图片的base64数据，可以用img标签显示
          // _self.front_img_url = res.localIds[0];

          // wx.getLocalImgData({
          //   localId: res.localIds[0], // 图片的localID
          //   success: function(res) {
          //     _self.front_img_url = res.localData;
          //   }
          // });

          wx.uploadImage({
            localId: res.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function(res) {
              _self.serverFrontId = res.serverId; // 返回图片的服务器端ID

              _self.$api
                .uploadImg({
                  media_id: res.serverId
                })
                .then(res1 => {
                  _self.front_img_url = res1.url;
                });
            }
          });
        }
      });
    },
    uploadId() {
      this.$api
        .identification({
          front_img_url: this.serverFrontId,
          back_img_url: this.serverBackId
        })
        .then(() => {
          Toast({
            message: "上传成功",
            position: "bottom",
            duration: 2000
          });
        })
        .catch(() => {
          Toast({
            message: "上传失败",
            position: "bottom",
            duration: 2000
          });
        });
    },
    uploadBack() {
      let _self = this;
      // 上传负面
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          let length = res.localIds.length;
          if (length === 0 || length > 1) {
            Toast({
              message: "请选择一张图片",
              position: "bottom",
              duration: 2000
            });
            return;
          }

          _self.localBackId = res.localIds[0];

          // localData是图片的base64数据，可以用img标签显示
          // _self.back_img_url = res.localData;
          // wx.getLocalImgData({
          //   localId: res.localIds[0],
          //   success: function(res) {
          //     _self.back_img_url = res.localData;
          //   }
          // });

          wx.uploadImage({
            localId: res.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function(res) {
              _self.serverBackId = res.serverId; // 返回图片的服务器端ID
              _self.$api
                .uploadImg({
                  media_id: res.serverId
                })
                .then(res1 => {
                  _self.back_img_url = res1.url;
                });
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.auth
  .auth-content
    padding-top 100px
    background #fff
    ul
      li
        text-align left
        color #333
        font-size 30px
        padding-left 40px
        height 100px
        line-height 100px
        border-bottom 1px solid #ececec
        input
          margin-left 100px
  .middle
    height 83px
    line-height 83px
    color #989898
    font-size 26px
    font-weight bold
  .photo
    overflow hidden
    background #fff
    height 100%
    img
      width 372px
  .authBtn
    height 81px
    background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
    border-radius 5px
    line-height 81px
    font-size 36px
    color #fff
    width 80%
    margin-left 10%
.leftSpan
  display inline-block
  width 200px
input[type=radio]
  -webkit-appearance radio
  margin-left 30px!important
  margin-right 80px!important
</style>
