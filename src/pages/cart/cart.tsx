/*
 * @LastEditors: 七大大
 * @Date: 2020-08-02
 * @LastEditTime: 2020-08-02
 * @FilePath: \myTaro\src\pages\cart\cart.tsx
 * @Description: 购物车-导航
 */

import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

const ZqCart: React.FunctionComponent<any> = props => {
  const onSkip = () => {
    Taro.navigateTo({
      url: "/pages/demo/demo"
    });
  };
  return (
    <View>
      <Text>购物车</Text>
      <AtButton type="secondary" onClick={onSkip}>
        来
      </AtButton>
    </View>
  );
};

export default ZqCart;
