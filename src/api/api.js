// 所有接口
import ask from "./config";

let baseApiUrl;
if (process.env.NODE_ENV === "development") {
  // 开发环境 http://47.110.59.138:8001
  baseApiUrl = "http://47.110.59.138:8001";
  // 测试环境 https://clientsrv.wangzheka.cn/v1
} else {
  baseApiUrl = "http://47.110.59.138:8001";
}

export default {
  // 获取banner
  banner(params) {
    return ask.askGet(baseApiUrl + "/api/banners/", params);
  },
  // banner(params) {
  //   return ask.askPost(baseApiUrl + "/api/frontend/banners/", params);
  // },

  // 获取token
  token(params) {
    return ask.askPost(baseApiUrl + "/api/account/token/", params);
  },
  // 获取用户个人信息
  information(params) {
    return ask.askGet(baseApiUrl + "/api/account/information/", params);
  },
  // 绑定手机号码
  bind(params) {
    return ask.askPatch(baseApiUrl + "/api/account/bind/", params);
  },
  // 获取验证码
  send(params) {
    return ask.askPost(baseApiUrl + "/api/captcha/send/", params);
  },

  // 招聘模块
  recruitments(params) {
    return ask.askGet(baseApiUrl + "/api/recruitments/", params);
  },
  // 招聘详情
  recruitmentsId(params) {
    return ask.askGet(baseApiUrl + "/api/recruitments/" + params + "/", params);
  },
  // 立即报名
  renrollment(params) {
    return ask.askPost(
      baseApiUrl + "/api/recruitments/" + params + "/enrollment/",
      params
    );
  },
  // 取消报名
  cancelRenrollment(params) {
    return ask.askDelete(
      baseApiUrl + "/api/recruitments/" + params + "/enrollment/",
      params
    );
  },
  // 收藏
  favorite(params) {
    return ask.askPost(
      baseApiUrl + "/api/recruitments/" + params + "/favorite/",
      params
    );
  },
  // 取消收藏
  cancelFavorite(params) {
    return ask.askDelete(
      baseApiUrl + "/api/recruitments/" + params + "/favorite/",
      params
    );
  },

  // 提交实名认证
  identification(params) {
    return ask.askPost(baseApiUrl + "/api/users/identification/", params);
  },
  // 获取实名认证信息
  getIdentification(params) {
    return ask.askGet(baseApiUrl + "/api/users/identification/", params);
  },
  // 提交银行卡绑定
  bank(params) {
    return ask.askPost(baseApiUrl + "/api/users/bank/", params);
  },
  // 获取银行卡绑定信息
  getBank(params) {
    return ask.askGet(baseApiUrl + "/api/users/bank/", params);
  },
  // 提交提现
  withdraw(params) {
    return ask.askPost(baseApiUrl + "/api/users/withdraw/", params);
  },
  // 获取提现列表
  getWithdraw(params) {
    return ask.askGet(baseApiUrl + "/api/users/withdraw/", params);
  },
  // 获取薪资列表
  salary(params) {
    return ask.askPost(baseApiUrl + "/api/users/salary/", params);
  },
  // 获取奖励列表
  award(params) {
    return ask.askPost(baseApiUrl + "/api/users/award/", params);
  },
  // 获取收藏列表
  collect(params) {
    return ask.askGet(baseApiUrl + "/api/users/favorite/", params);
  },
  // 获取邀请列表
  invite(params) {
    return ask.askGet(baseApiUrl + "/api/users/invitee/", params);
  },
  // 记得区分下get post
  // 获取公告信息
  notices(params) {
    return ask.askGet(baseApiUrl + "/api/notices/", params);
  }
};