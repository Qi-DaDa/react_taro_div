import React from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtActivityIndicator, AtDivider } from "taro-ui";

interface Props {
  isOpened?: boolean; // 是否显示加载中的效果
  isFinish?: boolean; // 是否显示结束效果
  openedText?: string; // 加载中的显示的文字
  FinishText?: string; // 结束的显示的文字
}

const CustomLoading: React.FC<Props> = props => {
  const { isOpened, isFinish, openedText, FinishText } = props;
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}
    >
      {isOpened && <AtActivityIndicator content={openedText} />}
      {isFinish && <AtDivider content={FinishText} height={30} />}
    </View>
  );
};
CustomLoading.defaultProps = {
  isOpened: true,
  isFinish: false,
  openedText: "加载中...",
  FinishText: "没有更多"
};

export default CustomLoading;
