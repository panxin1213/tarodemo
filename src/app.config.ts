export default {
  pages: [
    'pages/index/index',
    'pages/classify/index',
    'pages/cart/index',
    'pages/store/index',
    "pages/mine/index",
    "pages/active/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于获取附近门店"
    }
  },
  "tabBar": {
    "color": "#999",
    "selectedColor": "#e92124",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "./static/SY-bq-shouye-01.png",
        "selectedIconPath": "./static/SY-bq-shouye-02.png"
      },
      {
        "pagePath": "pages/classify/index",
        "text": "分类",
        "iconPath": "./static/SY-bq-fenlei-01.png",
        "selectedIconPath": "./static/SY-bq-fenlei-02.png"
      },
      {
        "pagePath": "pages/cart/index",
        "text": "购物车",
        "iconPath": "./static/SY-bq-gouwuche-01.png",
        "selectedIconPath": "./static/SY-bq-gouwuche-02.png"
      },
      {
        "pagePath": "pages/store/index",
        "text": "门店",
        "iconPath": "./static/SY-bq-mendian-01.png",
        "selectedIconPath": "./static/SY-bq-mendian-02.png"
      },
      {
        "pagePath": "pages/mine/index",
        "text": "我的",
        "iconPath": "./static/SY-bq-wode-01.png",
        "selectedIconPath": "./static/SY-bq-wode-02.png"
      }]
  },
}
