/*
 * @LastEditors: 七大大
 * @Date: 2020-08-03
 * @LastEditTime: 2020-08-03
 * @FilePath: \myTaro\src\pages\search\search.tsx
 * @Description: 搜索页面
 */

import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtSearchBar, AtMessage } from "taro-ui";

const ZqSearch: React.FunctionComponent<any> = props => {
  const [searchVal, setSearchVal] = useState("");
  /**
   * @description: 搜索
   * @param {value} :输入的值
   */
  const searchChange = value => {
    console.log(value);
    Taro.atMessage({
      message: value,
      type: "success"
    });
  };
  return (
    <View>
      <AtMessage />
      <AtSearchBar focus value={searchVal} onChange={searchChange} />
    </View>
  );
};

export default ZqSearch;
