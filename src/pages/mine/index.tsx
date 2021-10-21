import { View, Text, Image, Navigator, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import centerBg from '../../static/centerBg.png'
import btn_news from '../../static/btn_news@2x.png'
import help from '../../static/help.png'
import setting from '../../static/setting.png'
import center01 from '../../static/center01.png'
import center02 from '../../static/center02.png'
import center03 from '../../static/center03.png'
import btn_appraise from '../../static/btn_appraise@2x.png'
import btn_yixiadan from '../../static/btn_yixiadan@2x.png'
import btn_btn_inproduction from '../../static/btn_btn_inproduction@3x.png'
import btn_install from '../../static/btn_install@2x.png'
import btn_yiyanshou from '../../static/btn_yiyanshou@2x.png'
import btn_yifahuo from '../../static/btn_yifahuo@2x.png'
import t1 from '../../static/1.png'
import t8 from '../../static/8.png'
import t3 from '../../static/3.png'
import t7 from '../../static/7.png'
import t9 from '../../static/9.png'
import t5 from '../../static/5.png'
import btn_mall from '../../static/btn_mall@2x.png'
import btn_coupon from '../../static/btn_coupon@2x.png'
import btn_gift from '../../static/btn_gift@2x.png'
import btn_serve from '../../static/btn_serve@2x.png'
import btn_check from '../../static/btn_check@2x.png'
import btn_order from '../../static/btn_order@2x.png'
import hot from '../../static/hot.png'
import { useState } from 'react'
import './index.scss'

const personBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAYAAABUIcSXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YzQ2NmYwNS01MjQ4LTQwMjUtOTkyYy02YjMxYjBkYzU1ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUMxMUJENTI5QzAzMTFFQUJGMEFBNzcwMUIxNTk5ODMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUMxMUJENTE5QzAzMTFFQUJGMEFBNzcwMUIxNTk5ODMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWYxZjUwNTAtYWYwMi05ODQ0LTgwNWYtOTk2OTcyYzc3NmNhIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhjNDY2ZjA1LTUyNDgtNDAyNS05OTJjLTZiMzFiMGRjNTVmYSIv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";

const orders_mall = [{
    img: center01,
    name: "待付款",
    status: "1"
}, {
    img: center02,
    name: "待发货",
    status: "2"
}, {
    img: center03,
    name: "待收货",
    status: "3"
}, {
    img: btn_appraise,
    name: "待评价",
    status: "4"
}];

const orders_book = [{
    img: btn_yixiadan,
    name: "已下单",
    status: "1",
    number: 0,
    order_type: "order"
}, {
    img: btn_btn_inproduction,
    name: "生产中",
    status: "2",
    number: 0,
    order_type: "complete"
}, {
    img: center02,
    name: "已配送",
    status: "3",
    number: 0,
    order_type: "distribution"
}, {
    img: btn_install,
    name: "已安装",
    status: "4",
    number: 0,
    order_type: "install"
}, {
    img: btn_yiyanshou,
    name: "已验收",
    status: "5",
    number: 0,
    order_type: "check"
}]

const orders_score = [{
    img: center01,
    name: "待支付",
    number: 0,
    status: "1"
}, {
    img: center02,
    name: "待发货",
    number: 0,
    status: "2"
}, {
    img: center03,
    name: "待收货",
    number: 0,
    status: "3"
}, {
    img: btn_yifahuo,
    name: "已完成",
    number: 0,
    status: "4"
}];

const tools = [{
    img: t1,
    name: "我的定制",
    url: "/pages/selectStore/selectStore"
}, {
    img: t8,
    name: "招商加盟",
    url: "/pagesMine/investment/investment"
}, {
    img: t3,
    name: "我的收藏",
    url: "/pagesMine/myFavorite/myFavorite"
}, {
    img: t7,
    name: "关于诗尼曼",
    url: "noUrl"
}, {
    img: btn_mall,
    name: "积分商城",
    url: "/pagesA/scoreMall/scoreMall"
}, {
    img: btn_coupon,
    name: "优惠券",
    url: "/pagesA/myCoupon/myCoupon"
}, {
    img: btn_gift,
    name: "分享有礼",
    url: "/pagesA/shareCaseList/shareCaseList"
}, {
    img: btn_serve,
    name: "我的售后",
    url: "/pagesA/myAfterSale/myAfterSale"
}, {
    img: btn_order,
    name: "我的评价",
    url: "/pagesA/myComments/myComments"
}, {
    img: btn_check,
    name: "我的验收",
    url: "/pagesA/myAcceptanceCheck/myAcceptanceCheck"
}, {
    img: btn_order,
    name: "我的预约",
    url: "/pagesA/myAppointment/myAppointment"
}];

export default function Index() {

    const [UNREAD_GET, setUNREAD_GET] = useState(0)
    const [idxhasIcon, setidxhasIcon] = useState(false)
    const [wheterTrue, setwheterTrue] = useState(0)
    const [pigname, setpigname] = useState("张三")
    const [tabIndex, settabIndex] = useState(2)

    const lastestNews = () => {
        Taro.navigateTo({
            url: "/pagesMine/lastestNews/lastestNews"
        });
    }

    const path = (e) => {
        if ("noUrl" === e) {
            Taro.showModal({
                title: "提示",
                content: "请前往诗尼曼官网预览",
                showCancel: !1,
                success: function (e) {
                    e.confirm && Taro.setClipboardData({
                        data: "http://m.snimay.cn/mobile.php",
                        success: function () {
                            Taro.showToast({
                                title: "链接已复制到剪贴板,请前往浏览器打开",
                                icon: "none",
                                mask: !1,
                                duration: 2e3
                            });
                        },
                        fail: function () { }
                    });
                }
            });
        } else {
            Taro.navigateTo({
                url: e
            });
        }
    }

    const gotoSetting = () => {

    }

    const getUserInfoAc = () => {

    }

    const changeTab = (index) => {
        settabIndex(index);
    }

    const toBook = () => {

    }

    const hw = { width: 17, height: 17 };

    return <View className="mine data-v-27be7b81">
        <View className="headers data-v-27be7b81" style={{ backgroundImage: `url('${centerBg}')` }}>
            <View className="top-right data-v-27be7b81">
                <View className="message data-v-27be7b81" onClick={lastestNews}>
                    <Image className="data-v-27be7b81" mode="aspectFill" src={btn_news} style={hw}></Image>
                    {UNREAD_GET > 0 ? <View className="number data-v-27be7b81">{UNREAD_GET > 10 ? '10+' : UNREAD_GET}</View> : ""}
                </View>
                <View className="message data-v-27be7b81" onClick={() => { path('/pagesMine/helpCenter/helpCenter') }}>
                    <Image className="data-v-27be7b81" mode="aspectFill" src={help} style={hw}></Image>
                </View>
                <View className="message data-v-27be7b81" onClick={() => { path('/pagesMine/setting/setting') }}>
                    <Image className="data-v-27be7b81" mode="aspectFill" src={setting} style={hw}></Image>
                </View>
            </View>
            <View className="personImg data-v-27be7b81">
                <View className="naviStyle view data-v-27be7b81">
                    <View className="acbg view data-v-27be7b81" onClick={gotoSetting}>
                        <Image className="data-v-27be7b81" mode="aspectFill" src={personBg}></Image>
                    </View>
                    {!idxhasIcon ? <Button className="userAuth data-v-27be7b81" onGetUserInfo={getUserInfoAc} openType="getUserInfo" >授权</Button> : ""}
                </View>
                {wheterTrue === 0 ? <View className="data-v-27be7b81">
                    <Navigator className="data-v-27be7b81" hoverClass="none" url="/pages/login/login">
                        <Text className="data-v-27be7b81">登录/注册</Text>
                    </Navigator>
                </View> : ""}
                {wheterTrue === 1 ? <View className="data-v-27be7b81">{pigname}</View> : ""}
            </View>
        </View>
        <View className="tabs data-v-27be7b81">
            <View className="tabcard orders data-v-27be7b81">
                <View className="title data-v-27be7b81">
                    <View className={'text data-v-27be7b81' + (tabIndex == 0 ? ' active' : '')} onClick={() => { changeTab(0) }}>商城订单</View>
                    <View className={'text data-v-27be7b81' + (tabIndex == 1 ? ' active' : '')} onClick={() => { changeTab(1) }}>定制订单</View>
                    <View className={'text data-v-27be7b81' + (tabIndex == 2 ? ' active' : '')} onClick={() => { changeTab(2) }}>其他订单</View>
                </View>
                {tabIndex === 0 ? <View className="flex data-v-27be7b81">
                    {orders_mall.map((item: any, index) => {
                        return <View className="flexItem data-v-27be7b81" key={index}>
                            <Navigator className="data-v-27be7b81" hoverClass="none" url={'/pagesMine/order/order?status=' + item.status}>
                                <Image className="ordersImg data-v-27be7b81" mode="aspectFit" src={item.img}></Image>
                                <Text className="text data-v-27be7b81">{item.name}</Text>
                            </Navigator>
                        </View>
                    })
                    }
                </View> : (tabIndex === 1 ? <View className="flex data-v-27be7b81">
                    {orders_book.map((item: any, index) => {
                        return <View className="flexItem minddle-flex-item data-v-27be7b81" key={index}>
                            {item.number != 0 ? <View className="count-num data-v-27be7b81">{'' + item.number + ''}</View> : ""}
                            <Navigator className="data-v-27be7b81" hoverClass="none" url={'/pagesMine/order/order?status=?status=' + item.status}>
                                <Image className="ordersImg data-v-27be7b81" mode="aspectFit" src={item.img}></Image>
                                <Text className="text data-v-27be7b81">{item.name}</Text>
                            </Navigator>
                        </View>
                    })
                    }
                </View> : <View className="flex data-v-27be7b81">
                    {orders_score.map((item: any, index) => {
                        return <View className="flexItem minddle-flex-item data-v-27be7b81" key={index}>
                            {item.number != 0 ? <View className="count-num data-v-27be7b81">{'' + item.number + ''}</View> : ""}
                            <Navigator className="data-v-27be7b81" hoverClass="none" url={'/pagesMine/order/order?status=?status=' + item.status}>
                                <Image className="ordersImg data-v-27be7b81" mode="aspectFit" src={item.img}></Image>
                                <Text className="text data-v-27be7b81">{item.name}</Text>
                            </Navigator>
                        </View>
                    })
                    }
                </View>
                )
                }
                <View className="all-order-wrap data-v-27be7b81" style="display:none;">
                    <View className="all-order data-v-27be7b81">全部订单</View>
                </View>
            </View>
            <View className="tabcard tools data-v-27be7b81">
                <View className="title data-v-27be7b81">服务工具</View>
                <View className="flex data-v-27be7b81">
                    <View className="flex data-v-27be7b81">
                        {
                            tools.map((item: any, index) => {
                                return <View className="flexItem data-v-27be7b81" key={index}>
                                    {item.name === '工作台' && !idxhasIcon ? <Button className="tool data-v-27be7b81" onClick={() => { path(item.url) }} lang="zh_CN" openType="getUserInfo">
                                        <Image className="ordersImg data-v-27be7b81" mode="aspectFit" src={item.img}></Image>
                                        <Text className="text data-v-27be7b81">{item.name}</Text>
                                    </Button> : <View className="tool data-v-27be7b81" onClick={() => { path(item.url) }}>
                                        <Image className="ordersImg data-v-27be7b81" mode="aspectFit" src={item.img}></Image>
                                        <Text className="text data-v-27be7b81">{item.name}</Text>
                                        {item.isHot ? <Image className={'hot data-v-27be7b81' + (item.isHot ? 'mymove' : '')} mode="aspectFill" src={hot}></Image> : ""}
                                    </View>}
                                </View>
                            })
                        }
                        <View className="flexItem data-v-27be7b81">
                            <View className="tool data-v-27be7b81">
                                <View className="tool data-v-27be7b81" onClick={() => { path('../theCard/theCard') }}>
                                    <Image className="ordersImg data-v-27be7b81" mode="aspectFit" src={t9}></Image>
                                    <Text className="data-v-27be7b81">名片夹</Text>
                                    <Image className="mymove hot data-v-27be7b81" mode="aspectFill" src={hot}></Image>
                                </View>
                            </View>
                        </View>
                        <View className="flexItem data-v-27be7b81">
                            <View className="tool data-v-27be7b81">
                                <Button className="button chat data-v-27be7b81" openType="contact">
                                    <Image className="ordersImg data-v-27be7b81" src={t5}></Image>
                                </Button>
                                <Text className="data-v-27be7b81">客服</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View >
}