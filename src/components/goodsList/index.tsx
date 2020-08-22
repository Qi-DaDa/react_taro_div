/*
 * @LastEditors: 七大大
 * @Date: 2020-08-04
 * @LastEditTime: 2020-08-04
 * @FilePath: \myTaro\src\components\goodsList\index.tsx
 * @Description: 商品列表
 */
import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtDivider, AtButton, AtFab } from "taro-ui";
import styles from "./index.module.scss";

const GoodList = props => {
  const { dataList } = props;
  console.log(dataList);

  return (
    <View className={styles.goods_container}>
      {dataList && dataList.length ? (
        dataList.map(item => (
          <View key={item.image_src} className={styles.goods_body}>
            <Image src={item.image_src} mode="scaleToFill" />
            <View className="at-article__h3 two_line">{item.name}</View>
            <View className="at-article__h2 flex_between">
              <Text className="font_color">￥{item.image_width}</Text>
              <View style={{ width: 100 }}>
                <AtButton type="secondary" size="small" circle full={false}>
                  收藏
                </AtButton>
              </View>
            </View>
          </View>
        ))
      ) : (
        <AtDivider content="暂无数据" />
      )}
      <AtFab size="small" className="back_up">
        <Text className="at-fab__icon at-icon at-icon-chevron-up"></Text>
      </AtFab>
    </View>
  );
};
export default GoodList;
