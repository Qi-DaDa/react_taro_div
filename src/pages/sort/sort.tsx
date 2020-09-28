/*
 * @LastEditors: 七大大
 * @Date: 2020-08-01
 * @LastEditTime: 2020-08-31
 * @FilePath: \myantdd:\products\react_taro_div\src\pages\sort\sort.tsx
 * @Description: 种类-导航
 */

import React, { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { GET } from "../../service/network";
import { AtButton } from "taro-ui";

const ZqSort: React.FunctionComponent<any> = props => {
  // useEffect(() => {
  //   // 获取分类
  //   GET({
  //     // url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
  //     url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
  //     params: {},
  //     isLoading: true,
  //     success: res => {
  //       console.log(res);
  //     },
  //     fail: res => {
  //       Taro.showToast({
  //         title: res.meta.msg || "",
  //         icon: "none",
  //         duration: 2000
  //       });
  //     }
  //   });
  // }, []);
  return <View>000</View>;
};

export default ZqSort;
