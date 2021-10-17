import { Image, View, Swiper, SwiperItem, Video, Text, Block, Button, Navigator, Input, RichText } from '@tarojs/components'
import Taro, { useRouter, usePageScroll } from '@tarojs/taro'

import { useState, useEffect } from 'react'
import { getInfodetail } from '../../common/api'
import TopBar from '../../components/topbar';
import videoplay from '../../static/video_play.png';

const serveritems: [{
    name: "商品详情",
    type: "A"
}, {
    name: "定制流程",
    type: "C"
}, {
    name: "品牌实力",
    type: "B"
}, {
    name: "服务保障",
    type: "D"
}]

export default function Index(props) {
    const [showTopBar, setshowTopBar] = useState(false);
    const [swiperList, setswiperList] = useState(new Array<any>());
    const [isPlay, setisPlay] = useState(true);
    const [currentSwiper, setcurrentSwiper] = useState(0);
    const [goodsData, setgoodsData] = useState<any>({});
    const [videoTime, setvideoTime] = useState(0);
    const [explain, setexplain] = useState(new Array<any>());
    const [itemSelect, setitemSelect] = useState(0);
    const [scene, setscene] = useState('');
    const [goodsImg, setgoodsImg] = useState({
        brand: "",
        order: "",
        afterSale: ""
    });








    usePageScroll(t => {
        if (t.scrollTop < 550) {
            setshowTopBar(false);
        } else {
            setshowTopBar(true);
        }
    });


    const toPlay = () => {

    }

    const outPlay = () => {

    }

    const showSelect2 = () => {

    }

    const toChange = () => {

    }

    const mean = () => {

    }

    return <View className="goods data-v-c50eabf2">
        <TopBar className="data-v-c50eabf2" showTopBar={showTopBar} title="方案详情" vueId="1"></TopBar>
        <View className="Swiper-box data-v-c50eabf2">
            <Swiper autoplay={true} circular={true} className="data-v-c50eabf2" onChange={
                (e) => {
                    setcurrentSwiper(e.detail.current);
                }
            }>
                {

                    swiperList.map((a: any, index) => {
                        return <SwiperItem className="data-v-c50eabf2" key={index}>
                            <Image className="data-v-c50eabf2" mode="aspectFill" src={a}></Image>
                        </SwiperItem>
                    })
                }
            </Swiper>
            <View className="indicator data-v-c50eabf2">{currentSwiper + 1 + '/' + swiperList.length}</View>
            {
                isPlay && goodsData?.video ? <View className="video_play data-v-c50eabf2" onClick={toPlay}>
                    <View className="play_icon data-v-c50eabf2" style={{ backgroundImage: `url('${videoplay}')` }} >
                        <View className="video_time data-v-c50eabf2">{videoTime}</View>
                    </View>
                </View> : ""
            }
            {
                !isPlay && goodsData?.video ? <View className="video_box data-v-c50eabf2">
                    <Video autoplay showMuteBtn className="data-v-c50eabf2" controls enableProgressGesture={false} id="swiperVideo" src={goodsData.video}></Video>
                    <View className="pause_play global_df_c data-v-c50eabf2">
                        <View className="pause_btn global_df_c data-v-c50eabf2" onClick={outPlay}>退出播放</View>
                    </View>
                </View> : ""
            }
        </View>
        <View className="info-box goods-info data-v-c50eabf2">
            <View className="price data-v-c50eabf2">￥<Text className="nowMoney data-v-c50eabf2">{goodsData.price}</Text>
            </View>
            <View className="title data-v-c50eabf2">
                <Text className="titles data-v-c50eabf2">{goodsData.title}</Text>
            </View>
        </View>
        <View className="info-box spec data-v-c50eabf2">
            <View className="row data-v-c50eabf2" onClick={showSelect2}>
                <View className="Text data-v-c50eabf2">服务</View>
                <View className="content data-v-c50eabf2">
                    {
                        explain.map((item: any, index) => {
                            return <Text className="data-v-c50eabf2" style={{ marginRight: 10 }} key={index}>{item.title}</Text>
                        })
                    }
                </View>
            </View>
        </View>
        <View className="description data-v-c50eabf2">
            <View className="items data-v-c50eabf2">
                {
                    serveritems.map((item: any, index) => {
                        return <Text className={"flex1 data-v-c50eabf2" + (index === itemSelect ? ' actice' : '')} key={index}>{'' + item.name + ''}</Text>
                    })
                }
            </View>
            <View className="con data-v-c50eabf2">
                <View className="data-v-c50eabf2">
                    <RichText className="data-v-c50eabf2" nodes={itemSelect === 0 ? scene : (itemSelect === 1 ? goodsImg.brand : (itemSelect === 2 ? goodsImg.order : goodsImg.afterSale))}></RichText>
                </View>
            </View>
        </View>
        <View className="addCart data-v-c50eabf2">
            <View className="mean data-v-c50eabf2">
                <View className="list data-v-c50eabf2" onClick={mean} wx:for="{{addCartMean}}" wx:key="index">
                    <View className="cart data-v-c50eabf2" wx:if="{{index!==addCartMean.length-1}}">
                        <Image className="data-v-c50eabf2" mode="aspectFit" src="{{item.img}}"></Image>
                        <Text className="cartInfo data-v-c50eabf2">{{ item.name }}</Text>
                        <Text className="cartSize data-v-c50eabf2" wx:if="{{index===0&&cartSize!==0}}">{{ cartSize }}</Text>
                    </View>
                    <Button className="chat data-v-c50eabf2" openType="contact" wx:if="{{index===addCartMean.length-1}}">
                        <Image className="data-v-c50eabf2" mode="aspectFit" src="{{item.img}}"></Image>
                        <Text className="cartInfo data-v-c50eabf2">{{ item.name }}</Text>
                    </Button>
                </View>
            </View>
            <View className="btn data-v-c50eabf2">
                <View bindtap="__e" className="btns data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ ['order'] ] ] ]}}">立即预约</View>
            </View>
        </View>
        <View className="{{['data-v-c50eabf2',true?'modal':'',toggle===0?'actives':'']}}">
            <View className="modal-content data-v-c50eabf2">
                <Navigator className="modal-img data-v-c50eabf2" hoverClass="none" url="#">
                    <Image lazyLoad className="bgImg data-v-c50eabf2" mode="aspectFill" src="{{$root.m1}}"></Image>
                </Navigator>
                <View bindtap="__e" className="modal-close data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'toggleUp',[1] ] ] ] ]}}">
                    <Image lazyLoad className="bgImg data-v-c50eabf2" mode="aspectFill" src="{{$root.m2}}"></Image>
                </View>
                <View className="modal-body data-v-c50eabf2">
                    <Input bindinput="__e" className="uni-Input data-v-c50eabf2" cursorSpacing="140" data-event-opts="{{[ [ 'Input',[ [ '__set_model',[ '','inputName','$event',[] ] ] ] ] ]}}" placeholder="您的姓名" value="{{inputName}}"></Input>
                    <Input bindinput="__e" className="uni-Input data-v-c50eabf2" cursorSpacing="140" data-event-opts="{{[ [ 'Input',[ [ '__set_model',[ '','inputTel','$event',[] ] ] ] ] ]}}" placeholder="您的联系方式" value="{{inputTel}}"></Input>
                </View>
                <View bindtap="__e" className="quickGet data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'order2',['$event'] ] ] ] ]}}">
                    <Image lazyLoad className="bgImg data-v-c50eabf2" mode="aspectFill" src="{{$root.m3}}"></Image>
                </View>
            </View>
        </View>
        <View className="cover data-v-c50eabf2" wx:if="{{showCover}}"></View>
        <View catchtouchmove="__e" className="{{['state data-v-c50eabf2',isboxTop2?'boxTop2':'']}}" data-event-opts="{{[ [ 'touchmove',[ [ 'moveHandle',['$event'] ] ] ] ]}}">
            <View bindtap="__e" className="closeCover data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'close2',['$event'] ] ] ] ]}}"></View>
            <View className="box data-v-c50eabf2">
                <View bindtap="__e" className="close data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'close2',['$event'] ] ] ] ]}}">×</View>
                <View className="title data-v-c50eabf2">说明</View>
                <View className="list data-v-c50eabf2">
                    <View className="listItem data-v-c50eabf2" wx:for="{{explain}}" wx:key="index">
                        <View className="itemImg data-v-c50eabf2">
                            <Image className="data-v-c50eabf2" mode="aspectFit" src="../../static/isInfo.png"></Image>{{ ''+item.title + '' }}</View>
                        <View className="itemKws data-v-c50eabf2">{{ item.info }}</View>
                    </View>
                </View>
            </View>
        </View>
    </View >


}