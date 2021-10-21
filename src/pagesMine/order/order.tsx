import { View, Text, Image, ScrollView } from '@tarojs/components'
import { useState, useEffect } from 'react';
import { getOrderList } from '../../common/api'

import trash from '../../static/trash.png'
import noData from '../../static/noData.png'
import Taro from '@tarojs/taro'

import './order.scss'



const tabList = [{
    name: "全部"
}, {
    name: "待付款"
}, {
    name: "待发货"
}, {
    name: "待收货"
}, {
    name: "已完成"
}];


export default function Index() {
    const [TabCur, setTabCur] = useState(0)
    const [orderlist, setorderlist] = useState([])

    useEffect(() => {
        setorderlist([]);
        Taro.showLoading({
            "title": "加载中"
        });

        getOrderList().then((res: any) => {
            setTimeout(() => {
                setorderlist(res);
                Taro.hideLoading();
            }, 500);
        })
    }, [TabCur])


    const change = (index) => {
        setTabCur(index);
    }

    const toOrderDetails = () => {

    }

    const toPay = () => {

    }

    const toEvaluate = () => {

    }

    const deleteOrder = () => {

    }

    return <View className="order data-v-cd0e0650">
        <View className="topLine data-v-cd0e0650"></View>
        <View className="orderTab data-v-cd0e0650">
            {
                tabList.map((item: any, index) => {
                    return <View className={'tabList data-v-cd0e0650' + (index === TabCur ? ' active' : '')} onClick={() => { change(index) }} key={index}>{item.name}</View>
                })
            }
        </View>
        <View className="scrolls data-v-cd0e0650">
            <View className="list data-v-cd0e0650">
                {
                    orderlist.map((item: any, index) => {
                        return <View className="listInfo statusOne data-v-cd0e0650" key={index}>
                            <View className="isCommon data-v-cd0e0650">
                                <View className="title data-v-cd0e0650">
                                    <Text className="data-v-cd0e0650">{'订单号:' + item.orderNumber}</Text>
                                    {item.realName ? <Text className="order_pay_info global_text_ellipsis data-v-cd0e0650">{'订单提交人:' + item.realName}</Text> : ""}
                                    {item.payUserName ? <Text className="order_pay_info global_text_ellipsis data-v-cd0e0650">{'付款账号:' + item.payUserName}</Text> : ""}
                                    <View className="del data-v-cd0e0650">
                                        <Image className="can data-v-cd0e0650" mode="aspectFit" src={trash}></Image>
                                    </View>
                                </View>
                                <View className="listItems data-v-cd0e0650" onClick={toOrderDetails}>
                                    {
                                        item?.orderGoodsItems && item.orderGoodsItems?.map((items: any, childIndex) => {
                                            return <View className="showList data-v-cd0e0650" key={childIndex}>
                                                <View className="itemInfo data-v-cd0e0650">
                                                    <View className="itemInfoFlex data-v-cd0e0650">
                                                        <View className="flexLf data-v-cd0e0650">
                                                            <Image className="ScrollView-item_H data-v-cd0e0650" mode="aspectFit" src={items.appletObjectImage}></Image>
                                                        </View>
                                                        <View className="flexRt data-v-cd0e0650">
                                                            <View className="infoName data-v-cd0e0650">{items.goodsName}</View>
                                                            <View className="infoTips data-v-cd0e0650">{items.specName}</View>
                                                            <View className="infoNum data-v-cd0e0650">{'x' + items.goodsNum}</View>
                                                            <View className="money space-between data-v-cd0e0650">{'￥' + items.origPrice}<View className="Aftermarket row data-v-cd0e0650">申请售后</View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View className="allMoney data-v-cd0e0650"></View>
                                                    <View className="scrollx data-v-cd0e0650">
                                                        <ScrollView className="scroll-view_H data-v-cd0e0650" scrollX>
                                                            {
                                                                items.goodsList.map((img: any, imgindex) => {
                                                                    return <Image className="Scrolliew-item_H data-v-cd0e0650" mode="aspectFit" src={img} key={imgindex}></Image>
                                                                })
                                                            }
                                                        </ScrollView>
                                                    </View>
                                                </View>
                                            </View>
                                        })
                                    }
                                </View>
                                {item.crmUserName && <View className="custom_info data-v-cd0e0650">
                                    <View className="data-v-cd0e0650">
                                        <Text className="data-v-cd0e0650">客户信息:</Text>
                                        <Text className="data-v-cd0e0650" style="margin:0 20rpx;">{item.crmUserName}</Text>
                                        <Text className="data-v-cd0e0650">{item.crmUserPhone}</Text>
                                    </View>
                                    <View className="data-v-cd0e0650">{item.crmUserAddress}</View>
                                    {item.buildingName && <View className="data-v-cd0e0650">{'地产楼盘信息:' + item.building + ' ' + item.realEstate + ' ' + item.buildingName}</View>}
                                </View>
                                }
                                <View className="time data-v-cd0e0650">
                                    <View className="allMoney data-v-cd0e0650">广州仓<Text className="data-v-cd0e0650">{'共' + item.orderGoodsItems.length + `种 ${item.status ? '实' : '需'}付款：¥` + (item.totalPrice)}</Text></View>
                                    <View className="timeInfo getMoney data-v-cd0e0650">{'' + item.createDate + ''}<Text className={'data-v-cd0e0650 a'} onClick={toPay}>{'' + ['去付款', '待发货', '待收货', '已完成', '已取消', '已作废'][item.status]}</Text>
                                        {item.status > 0 ? <Text className="evaluate data-v-cd0e0650" onClick={toEvaluate} style={{ marginLeft: 5 }}>查看评价</Text> : ""}
                                        <Text className="deleteOrder data-v-cd0e0650" onClick={deleteOrder}>删除订单</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    })
                }
            </View>
            {!orderlist || !orderlist.length ? <View className="noData data-v-cd0e0650">
                <Image className="img data-v-cd0e0650" mode="aspectFill" src={noData}></Image>
                <View className="noDataKwd data-v-cd0e0650">暂无数据</View>
            </View> : ""
            }
        </View>
    </View>

}