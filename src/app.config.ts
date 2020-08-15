export default {
  //
  pages: [
    "pages/home/home",
    "pages/sort/sort",
    "pages/cart/cart",
    "pages/mine/mine",
    "pages/search/search",
    "pages/demo/demo"
  ],
  //
  window: {
    navigationBarBackgroundColor: "#a0d911", // 头部导航栏背景颜色
    navigationBarTextStyle: "white", // 头部导航栏字体颜色
    navigationBarTitleText: "Div", // 导航栏标题文字内容
    // disableScroll: true
    enablePullDownRefresh: true
  },
  // 导航
  tabBar: {
    color: "#333", // tab上的文字默认颜色
    backgroundColor: "#ffffff", //tab 的背景色
    selectedColor: "#a0d911", //tab 上的文字选中时的颜色
    list: [
      {
        text: "首页",
        pagePath: "pages/home/home",
        iconPath: "static/images/home.png",
        selectedIconPath: "static/images/home-sel.png"
      },
      {
        text: "分类",
        pagePath: "pages/sort/sort",
        iconPath: "static/images/sort.png",
        selectedIconPath: "static/images/sort-sel.png"
      },
      {
        text: "购物车",
        pagePath: "pages/cart/cart",
        iconPath: "static/images/cart.png",
        selectedIconPath: "static/images/cart-sel.png"
      },
      {
        text: "我的",
        pagePath: "pages/mine/mine",
        iconPath: "static/images/mine.png",
        selectedIconPath: "static/images/mine-sel.png"
      }
    ]
  }
};
