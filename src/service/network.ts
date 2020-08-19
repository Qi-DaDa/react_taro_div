// 请求封装
import Taro, { General } from "@tarojs/taro";

// interface RequestHandler {
//   data?: any; // 请求的参数
//   isLoading?: boolean; // 是否显示加载中
// }

// let requestHandler = {
//   params: {},
//   closeLoading: false,
//   success: function(res) {
//     // success
//   },
//   fail: function() {
//     // fail
//   }
// };

// const httpRequest = async (
//   method: "GET" | "POST",
//   url: string,
//   requestHandler?: RequestHandler
// ) => {
//   const { data, isLoading } = requestHandler || {};
//   if (isLoading) {
//     Taro.showLoading({
//       title: "加载中",
//       mask: true
//     });
//   }

//   await Taro.request({
//     url: `https://api-hmugo-web.itheima.net/api/public/v1${url}`, // 请求接口
//     method: method, // HTTP 请求方法
//     data: data || {}, // 请求的参数
//     dataType: "json", // 返回的数据格式
//     header: { "content-type": "application/x-www-form-urlencoded" }, // 请求头
//     fail: (res: General.CallbackResult) => {
//       if (isLoading) {
//         Taro.hideLoading();
//       }
//       console.log("api=>接口请求失败", res);
//       return res;
//       // requestHandler.fail();
//     }, // 接口调用失败的回调函数
//     success: (res: any) => {
//       if (isLoading) {
//         Taro.hideLoading();
//       }
//       if (res.data.meta && res.data.meta.status === 200) {
//         console.log("api=>接口请求成功", res);
//         return res.data;
//         // requestHandler.success(res.data);
//       } else {
//         console.log("api=>接口请求成功数据失败,", res);
//         return res.data;
//         // requestHandler.fail();
//       }
//     }
//   });
// };
// //  GET请求
// export const GET = async (url: string, requestHandler?: RequestHandler) => {
//   await httpRequest("GET", url, requestHandler);
// };
// // POST请求
// export const POST = (url: string, requestHandler?: RequestHandler) => {
//   httpRequest("POST", url, requestHandler);
// };

export const GET = async requestHandler => {
  httpRequest("GET", requestHandler);
};

export const POST = async requestHandler => {
  httpRequest("POST", requestHandler);
};

export const httpRequest = async (method, requestHandler) => {
  const { params, url, isLoading } = requestHandler;

  if (isLoading) {
    Taro.showLoading({
      title: "加载中",
      mask: true
    });
  }

  Taro.request({
    url,
    method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    data: params,
    success: res => {
      if (isLoading) {
        Taro.hideLoading();
      }
      if (res.data.meta && res.data.meta.status === 200) {
        requestHandler.success(res.data);
      } else {
        requestHandler.fail(res.data);
      }
    },
    fail: function(res) {
      if (isLoading) {
        Taro.hideLoading();
      }
      Taro.showModal({
        title: "提示",
        content: "服务器出错,请求失败,请稍后再试！",
        success: res => {}
      });
    }
  });
};
