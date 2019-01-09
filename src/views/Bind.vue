<template>
  <div class="bind">
    <comNav msg="绑定银行卡"></comNav>
    <div class="bind-content">
      <ul>
        <li>
          <input
            type="text"
            v-model="data.number"
            placeholder="请输入银行卡号"
          />
        </li>
        <li>
          <input
            type="text"
            v-model="data.cardholder_id_number"
            placeholder="请输入持卡人身份证号"
          />
        </li>
        <li>
          <input
            type="text"
            v-model="data.cardholder_cellphone"
            placeholder="请输入持卡人手机号码"
          />
        </li>
        <li>
          <input
            type="text"
            v-model="data.cardholder_name"
            placeholder="请输入持卡人姓名"
          />
        </li>
        <li>
          <input
            type="text"
            v-model="data.province"
            placeholder="银行卡开户省份"
          />
        </li>
        <li>
          <input type="text" v-model="data.name" placeholder="银行卡开户行" />
        </li>
      </ul>
    </div>
    <div class="submit-btn mt10" @click="submit">提交</div>

    <!--
      <div class="submit-btn mt10" style="margin-top:100px" @click="submit">
        提交1
      </div>
    -->

    <!--
      <router-link tag="div" class="submit-btn mt10" style="margin-top:100px"
        >去实名认证</router-link
      >
    -->
    <!-- <div c></div> -->
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comNav from "@/components/nav/comNav.vue";
export default {
  name: "bind",
  components: {
    comNav
  },
  data() {
    return {
      data: {
        name: "",
        number: "",
        province: "",
        cardholder_name: "",
        cardholder_cellphone: "",
        cardholder_id_number: "",
        flag: true,
        // 用来判断完成 跳到实名认证使用
        flag1: false
      }
    };
  },
  created() {
    this.update();
  },
  methods: {
    update() {
      // 用返会的银行卡号数据  判断是否显示提交按钮  如果没有就显示出来
      this.$api.getBank().then(res => {
        if (!res.number) {
          this.flag = true;
        } else {
          this.flag = false;
        }
        this.data = res;
      });
      // /api/users/bank/
    },
    submit() {
      if (Object.values(this.data).includes("")) {
        Toast({
          message: "还未完成",
          position: "bottom",
          duration: 2000
        });
      } else {
        this.$api.bank(this.data).then(res => {
          if (res.message.includes("成功")) {
            Toast({
              message: "银行卡号绑定成功",
              position: "bottom",
              duration: 2000
            });
            this.$store.dispatch("getInfo");
            // this.$router.push("/wallet");
            this.$router.go(-1);
          }
        });
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.bind
  .bind-content
    width 100%
    padding-top 100px
    background #fff
    ul
      li
        text-align left
        color #999
        font-size 30px
        padding-left 40px
        height 100px
        line-height 100px
        border-bottom 1px solid #ececec
  .submit-btn
    height 81px
    line-height 81px
    background linear-gradient(90deg,rgba(255,181,77,1),rgba(255,122,26,1))
    border-radius 5px
    color #fff
    width 80%
    margin-left 10%
    font-size 36px
</style>
