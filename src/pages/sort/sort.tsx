/*
 * @LastEditors: 七大大
 * @Date: 2020-08-01
 * @LastEditTime: 2020-08-02
 * @FilePath: \myTaro\src\pages\sort\sort.tsx
 * @Description: 种类-导航
 */

import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

const ZqSort: React.FunctionComponent<any> = props => {
  const onSkip = () => {
    Taro.navigateTo({
      url: "/pages/demo/demo"
    });
  };
  return (
    <View>
      <Text>分类</Text>
      <AtButton type="primary" onClick={onSkip}>
        来
      </AtButton>
    </View>
  );
};

export default ZqSort;
