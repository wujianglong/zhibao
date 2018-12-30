import Vue from "vue";
import Vuex from "vuex";
import api from "@/api/api";
import { resolve } from "path";
import { reject } from "when";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banner_info: [{
        id: 1,
        rank: 1,
        title: "title",
        content: "content",
        img_url: "https://dl.duoduocp.cn/img/1a71a6f8e8fbf6f2ce07d1349df08d4f.png",
        h5_url: null,
        state: "show",
        created_at: "2018-10-23T21:43:37.142191",
        updated_at: "2018-10-23T21:43:37.146541"
      },
      {
        id: 1,
        rank: 1,
        title: "title",
        content: "content",
        img_url: "https://dl.duoduocp.cn/img/302878191642780c44e8f502264a42c5.png",
        h5_url: null,
        state: "show",
        created_at: "2018-10-23T21:43:37.142191",
        updated_at: "2018-10-23T21:43:37.146541"
      }
    ],
    recruitments: {
      count: 1,
      next: null,
      previous: null,
      results: [{
          id: 1,
          title: "标题",
          salary: "2000-3000",
          station: "普工",
          age: "20-30",
          requirement: "要求",
          wage: "16",
          meals: "包吃",
          commodity: "包住",
          content: "内容",
          rank: 1,
          created_at: "2018-11-12T21:53:45.249736",
          updated_at: "2018-11-12T21:53:45.249886",
          enterprise: {
            name: "派合技术",
            introduce: "派合技术",
            address: "中凯蓝域",
            img_urls: [
              "http://paihe-mi.oss-cn-beijing.aliyuncs.com/cde535419a6a6fab55beceeee9d6fda4.jpeg"
            ]
          }
        },
        {
          id: 2,
          title: "标题",
          salary: "2000-3000",
          station: "普工",
          age: "20-30",
          requirement: "要求",
          wage: "16",
          meals: "包吃",
          commodity: "包住",
          content: "内容",
          rank: 1,
          created_at: "2018-11-12T21:53:45.249736",
          updated_at: "2018-11-12T21:53:45.249886",
          enterprise: {
            name: "派合技术",
            introduce: "派合技术",
            address: "中凯蓝域",
            img_urls: [
              "http://paihe-mi.oss-cn-beijing.aliyuncs.com/cde535419a6a6fab55beceeee9d6fda4.jpeg"
            ]
          }
        },
        {
          id: 3,
          title: "标题",
          salary: "2000-3000",
          station: "普工",
          age: "20-30",
          requirement: "要求",
          wage: "16",
          meals: "包吃",
          commodity: "包住",
          content: "内容",
          rank: 1,
          created_at: "2018-11-12T21:53:45.249736",
          updated_at: "2018-11-12T21:53:45.249886",
          enterprise: {
            name: "派合技术",
            introduce: "派合技术",
            address: "中凯蓝域",
            img_urls: [
              "http://paihe-mi.oss-cn-beijing.aliyuncs.com/cde535419a6a6fab55beceeee9d6fda4.jpeg"
            ]
          }
        },
        {
          id: 4,
          title: "标题",
          salary: "2000-3000",
          station: "普工",
          age: "20-30",
          requirement: "要求",
          wage: "16",
          meals: "包吃",
          commodity: "包住",
          content: "内容",
          rank: 1,
          created_at: "2018-11-12T21:53:45.249736",
          updated_at: "2018-11-12T21:53:45.249886",
          enterprise: {
            name: "派合技术",
            introduce: "派合技术",
            address: "中凯蓝域",
            img_urls: [
              "http://paihe-mi.oss-cn-beijing.aliyuncs.com/cde535419a6a6fab55beceeee9d6fda4.jpeg"
            ]
          }
        }
      ]
    },
    recruitmentsId: {
      id: 1,
      title: "标题",
      salary: "2000-3000",
      station: "普工",
      age: "20-30",
      requirement: "要求",
      wage: "16",
      meals: "包吃",
      commodity: "包住",
      content: "内容",
      rank: 1,
      created_at: "2018-11-12T21:53:45.249736",
      updated_at: "2018-11-12T21:53:45.249886",
      enterprise: {
        name: "派合技术",
        introduce: "派合技术",
        address: "中凯蓝域",
        img_urls: [
          "http://paihe-mi.oss-cn-beijing.aliyuncs.com/cde535419a6a6fab55beceeee9d6fda4.jpeg"
        ]
      },
      can_enrollment: true
    },
    userInfo: {},
    userToken: ""
  },
  mutations: {
    banner(state, res) {
      state.banner_info = res;
    },
    userInfo(state, res) {
      state.userInfo = res;
    },
    token(state, res) {
      state.userToken = res;
    }
  },
  actions: {
    // 获取banner值
    getBanner({ commit }, data) {
      return api.banner(data).then(res => {
        commit("banner", res);
      });
    },
    // 获取用户信息
    getInfo({ commit }) {
      return api.information().then(res => {
        commit("userInfo", res);
        if (!res.cellphone) {
          localStorage.setItem("cellPhone", "");
        } else {
          localStorage.setItem("cellPhone", res.cellphone);
        }
      });
    },
    // 获取token
    getToken({ commit }, data) {
      return new Promise(resolve => {
        api
          .token(data)
          .then(res => {
            commit("token", res.token);
            localStorage.setItem("token", res.token);
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    }
  }
});