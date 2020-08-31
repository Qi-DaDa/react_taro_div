/*
 * @LastEditors: 七大大
 * @Date: 2020-07-28
 * @LastEditTime: 2020-08-23
 * @FilePath: \myantdd:\products\react_taro_div\src\pages\home\home.tsx
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
  AtActivityIndicator,
  AtTabBar,
  AtTabsPane,
  AtGrid,
  AtCard
} from "taro-ui";
import { GET } from "../../service/network";
import CustomLoading from "../../components/CustomLoading";
import GoodList from "../../components/goodsList";
import styles from "./home.module.scss";

const ZqHome: React.FunctionComponent<any> = props => {
  const [IsTopReach, setIsTopReach] = useState(false); // 是否下拉刷新
  const [IsBottomReach, setIsBottomReach] = useState(false); // 是否下拉刷新
  const [swiperData, setSwiperData] = useState([]); // 轮播图数据
  const [productList, setProductList] = useState([]); // 楼层数据
  const [navlist, setNavlist] = useState([]); // 导航数据

  useEffect(() => {
    // 获取轮播图
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
    // 获取楼层
    GET({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
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
        {console.log(
          navlist.map(item => ({
            title: item.name,
            image: item.image_src
          }))
        )}

        {productList && productList.length
          ? productList.map(item => {
              console.log(item);
              return (
                <View className={styles.fool_productNav}>
                  <View className={styles.fool_title}>
                    <Image src={item.floor_title.image_src} mode="widthFix" />
                  </View>
                  <View className={`${styles.fool_content} at-row`}>
                    <View className="at-col">
                      <Image
                        src={item.product_list[0].image_src}
                        mode="widthFix"
                      />
                    </View>
                    <View className="at-col">
                      <View>
                        <Image
                          src={item.product_list[1].image_src}
                          mode="widthFix"
                        />
                      </View>
                      <View>
                        <Image
                          src={item.product_list[2].image_src}
                          mode="widthFix"
                        />
                      </View>
                    </View>
                    <View className="at-col">
                      <View>
                        <Image
                          src={item.product_list[3].image_src}
                          mode="widthFix"
                        />
                      </View>
                      <View>
                        <Image
                          src={item.product_list[4].image_src}
                          mode="widthFix"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })
          : null}
        {IsBottomReach && <CustomLoading />}
      </ScrollView>
    </View>
  );
};
export default ZqHome;
