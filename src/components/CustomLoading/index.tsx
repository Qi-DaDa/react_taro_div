import React from 'react' 
import Taro from "@tarojs/taro";
import { View} from "@tarojs/components";
import { AtActivityIndicator} from "taro-ui";

const CustomLoading =(prop)=>{
    return (
        <View style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
        <AtActivityIndicator></AtActivityIndicator>
      </View>
    )
}
export default CustomLoading
