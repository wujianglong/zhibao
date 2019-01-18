import axios from "axios";
import qs from "qs";
import { Toast } from "mint-ui";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response.status) {
      case 400:
        Toast({
          message: "请求失败，返回400",
          position: "bottom",
          duration: 2000
        });
        break;
      default:
        return Promise.reject(error);
    }
    return error;
  }
);

// 请求方法 Post和 Get
export default {
  askPost: function(url, params) {
    return new Promise((resolve, reject) => {
      if (window.localStorage.token) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + window.localStorage.token;
      }
      axios
        .post(url, params)
        .then(
          response => {
            resolve(response.data);
          },
          err => {
            reject(err);
          }
        )
        .catch(error => {
          reject(error);
        });
    });
  },
  askGet: function(url, params) {
    return new Promise((resolve, reject) => {
      if (window.localStorage.token) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + window.localStorage.token;
      }
      axios
        .get(url, params)
        .then(
          response => {
            resolve(response.data);
          },
          err => {
            reject(err);
          }
        )
        .catch(error => {
          reject(error);
        });
    });
  },
  askPatch: function(url, params) {
    return new Promise((resolve, reject) => {
      if (window.localStorage.token) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + window.localStorage.token;
      }
      axios
        .patch(url, params)
        .then(
          response => {
            resolve(response.data);
          },
          err => {
            reject(err);
          }
        )
        .catch(error => {
          reject(error);
        });
    });
  },
  askDelete: function(url, params) {
    return new Promise((resolve, reject) => {
      if (window.localStorage.token) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + window.localStorage.token;
      }
      axios
        .delete(url, params)
        .then(
          response => {
            resolve(response.data);
          },
          err => {
            reject(err);
          }
        )
        .catch(error => {
          reject(error);
        });
    });
  }
};