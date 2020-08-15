/*
 * @LastEditors: 七大大
 * @Date: 2020-07-27
 * @LastEditTime: 2020-08-11
 * @FilePath: \myTaro\src\pages\mine\mine.tsx
 * @Description: 我的-导航
 */

// 我的
import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "./mine.scss";

// const ZqMine = () => {
//   const onSkip = () => {
//     Taro.redirectTo({
//       url: "/pages/demo/demo"
//     });
//   };

//   return (
//     <View>
//       <Text>Hello world!</Text>
//       <AtButton type="secondary" onClick={onSkip}>
//         来
//       </AtButton>
//     </View>
//   );
// };
// export default ZqMine;

export default class PageView extends Component {
  constructor() {
    super({});
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail);
  }

  render() {
    const scrollStyle = {
      height: "150px"
    };
    const scrollTop = 0;
    const Threshold = 20;
    const vStyleA = {
      height: "150px",
      "background-color": "rgb(26, 173, 25)"
    };
    const vStyleB = {
      height: "150px",
      "background-color": "rgb(39,130,215)"
    };
    const vStyleC = {
      height: "150px",
      "background-color": "rgb(241,241,241)",
      color: "#333"
    };
    return (
      <ScrollView
        className="scrollview"
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={this.onScroll}
      >
        <View style={vStyleA}>A</View>
        <View style={vStyleB}>B</View>
        <View style={vStyleC}>C</View>
      </ScrollView>
    );
  }
}
