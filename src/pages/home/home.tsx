/*
 * @LastEditors: 七大大
 * @Date: 2020-07-28
 * @LastEditTime: 2020-08-11
 * @FilePath: \myTaro\src\pages\home\home.tsx
 * @Description: 首页-导航
 */
import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, ScrollView } from "@tarojs/components";
import { AtSearchBar, AtNoticebar, AtTabs, AtGrid } from "taro-ui";
import GoodList from "../../components/goodsList";

const ZqHome: React.FunctionComponent<any> = props => {
  const [tabNavKey, setTabNavKey] = useState(0);
  const onSkip = () => {
    Taro.navigateTo({
      url: "/pages/search/search"
    });
  };
  /**
   * @description: tab导航切换
   * @param {type}
   */
  const onTabNav = info => {
    setTabNavKey(info);
  };
  return (
    <View>
      <View onClick={onSkip}>
        <AtSearchBar
          disabled
          title="深刻搭街坊看到撒旦看风景卢卡斯金卡警方打算离开是圣诞快乐房价离开的法国进口粮食了多少康复机构两块的方式立刻撒旦发个将来肯定是个"
          onChange={() => {}}
        />
      </View>
      <ScrollView scrollY scrollWithAnimation scrollTop={0}>
        <AtNoticebar icon="volume-plus" marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
        <Swiper
          indicatorColor="#999"
          indicatorActiveColor="#a0d911"
          indicatorDots
          circular
          autoplay
        >
          <SwiperItem style={{ background: "#faad14" }}></SwiperItem>
          <SwiperItem style={{ background: "#fadb14" }}></SwiperItem>
          <SwiperItem style={{ background: "#52c41a" }}></SwiperItem>
          <SwiperItem style={{ background: "#1890ff" }}></SwiperItem>
        </Swiper>
        <AtTabs
          current={tabNavKey}
          animated={false}
          onClick={onTabNav}
          tabList={[
            { title: "积木拼装" },
            { title: "卡片拼装" },
            { title: "标签页3" }
          ]}
        />

        <GoodList
          dataList={[
            {
              src:
                "//cdn.shopifycdn.net/s/files/1/0253/8697/5295/products/94920-11_TARMAC-SL7-PRO-ETAP-ABLN-SPCTFLR_HERO_1600x.jpg?v=1595947864",
              price: "9999",
              title:
                "深刻搭街坊看到撒旦看风景卢卡斯金卡警方打算离开是圣诞快乐房价离开的法国进口粮食了多少康复机构两块的方式立刻撒旦发个将来肯定是个领取中心"
            },
            {
              src:
                "//cdn.shopifycdn.net/s/files/1/0253/8697/5295/products/94920-00_TARMAC-SL7-SW-DI2-FLORED-TARBLK-WHT_HERO_1600x.jpg?v=1595948513",
              price: "9999",
              title:
                "深刻搭街坊看到撒旦看风景卢卡斯金卡警方打算离开是圣诞快乐房价离开的法国进口粮食了多少康复机构两块的方式立刻撒旦发个将来肯定是个找折扣"
            },
            {
              src:
                "https://cdn.shopifycdn.net/s/files/1/0253/8697/5295/products/94421-60_ROUBAIX-SPORT-FLKSIL-BLK_HERO_1600x.jpg?v=1594094145",
              price: "9999",
              title:
                "深刻搭街坊看到撒旦看风景卢卡斯金卡警方打算离开是圣诞快乐房价离开的法国进口粮食了多少康复机构两块的方式立刻撒旦发个将来肯定是个领会员"
            },
            {
              src:
                "//cdn.shopifycdn.net/s/files/1/0253/8697/5295/products/90621-52_TARMAC-SL6-COMP-FSTGRN-FLKSIL_HERO_1600x.jpg?v=1594090736",
              price: "9999",
              title:
                "深刻搭街坊看到撒旦看风景卢卡斯金卡警方打算离开是圣诞快乐房价离开的法国进口粮食了多少康复机构两块的方式立刻撒旦发个将来肯定是个新品首发"
            },
            {
              src:
                "//cdn.shopifycdn.net/s/files/1/0253/8697/5295/products/90621-71_TARMAC-SL6-RSBRY-CMLN_HERO_1600x.jpg?v=1594108441",
              price: "9999",
              title:
                "深刻搭街坊看到撒旦看风景卢卡斯金卡警方打算离开是圣诞快乐房价离开的法国进口粮食了多少康复机构两块的方式立刻撒旦发个将来肯定是个领京豆"
            },
            {
              src:
                "//cdn.shopifycdn.net/s/files/1/0253/8697/5295/products/94421-30_ROUBAIX-EXPERT-BLSH-BLK_HERO_1600x.jpg?v=1594093939",
              price: "9999",
              title:
                "深刻搭街坊看到撒旦看风景卢卡斯金卡警方打算离开是圣诞快乐房价离开的法国进口粮食了多少康复机构两块的方式立刻撒旦发个将来肯定是个手机馆"
            }
          ]}
        />
      </ScrollView>
    </View>
  );
};
export default ZqHome;
