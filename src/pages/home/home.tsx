/*
 * @LastEditors: 七大大
 * @Date: 2020-07-28
 * @LastEditTime: 2020-08-11
 * @FilePath: \myTaro\src\pages\home\home.tsx
 * @Description: 首页-导航
 */
import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  ScrollView,
  Image
} from "@tarojs/components";
import {
  AtSearchBar,
  AtNoticebar,
  AtTabs,
  AtGrid,
  AtActivityIndicator
} from "taro-ui";
import { GET } from "../../service/network";
import CustomLoading from "../../components/CustomLoading";
import GoodList from "../../components/goodsList";

const ZqHome: React.FunctionComponent<any> = props => {
  const [tabNavKey, setTabNavKey] = useState(0); // tabs 选择
  const [IsTopReach, setIsTopReach] = useState(false); // 是否下拉刷新
  const [IsBottomReach, setIsBottomReach] = useState(false); // 是否下拉刷新
  const [swiperData, setSwiperData] = useState([]); // 轮播图数据
  const [productList, setProductList] = useState([]); // 列表数据

  useEffect(() => {
    GET({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
      params: {},
      isLoading: true,
      success: res => {
        setSwiperData(res.message);
      },
      fail: res => {
        Taro.showToast({
          title: res.meta.msg || "",
          icon: "none",
          duration: 2000
        });
      }
    });
    GET({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
      params: {},
      isLoading: true,
      success: res => {
        setProductList(res.message);
      },
      fail: res => {
        Taro.showToast({
          title: res.meta.msg || "",
          icon: "none",
          duration: 2000
        });
      }
    });
  }, []);
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
        <AtSearchBar disabled value="" onChange={() => {}} />
      </View>
      <ScrollView
        style={{ height: "calc(100vh - 40px)" }}
        scrollY
        scrollWithAnimation
        refresherEnabled={true} // 是否允许下拉
        refresherBackground="#a0d911" // 下拉刷新样式
        refresherTriggered={true} // 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
        onRefresherRefresh={() => console.log("自定义下拉刷新被触发")} // 自定义下拉刷新被触发
        onScrollToLower={() => {
          console.log("低部");
          setIsBottomReach(true);
        }} // 到达底部
        onScrollToUpper={() => console.log("顶部")} // 回到顶部
        onRefresherRestore={() => console.log("自定义下拉刷新被复位")} // 自定义下拉刷新被复位
      >
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
          {swiperData.map(item => (
            <SwiperItem key={item.goods_id}>
              <Image src={item.image_src} mode="widthFix" />
            </SwiperItem>
          ))}
        </Swiper>
        {IsTopReach && <CustomLoading />}
        {/* <AtTabs
          current={tabNavKey}
          animated={false}
          onClick={onTabNav}
          tabList={[
            { title: "积木拼装" },
            { title: "卡片拼装" },
            { title: "标签页3" }
          ]}
        /> */}
        {productList && productList.length
          ? productList.map(item => {
              console.log(item);
              return <GoodList dataList={item.product_list || []} />;
            })
          : null}

        {IsBottomReach && <CustomLoading />}
      </ScrollView>
    </View>
  );
};
export default ZqHome;
