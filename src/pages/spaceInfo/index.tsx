import { Image, View, Swiper, Video, Text, Block, Button, Navigator, Input } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'

import { useState, useEffect } from 'react'
import { getInfodetail } from '../../common/api'

export default function Index(props) {

    return <View className="goods data-v-c50eabf2">
        <top-bar bind:__l="__l" className="data-v-c50eabf2" showTopBar="{{showTopBar}}" title="方案详情" vueId="1"></top-bar>
        <View className="Swiper-box data-v-c50eabf2">
            <Swiper autoplay="true" bindchange="__e" circular="true" className="data-v-c50eabf2" data-event-opts="{{[ [ 'change',[ [ 'swiperChange',['$event'] ] ] ] ]}}">
                <Swiper-item className="data-v-c50eabf2" wx:for="{{swiperList}}" wx:for-index="__i0__" wx:for-item="Swiper" wx:key="id">
                    <Image className="data-v-c50eabf2" mode="aspectFill" src="{{Swiper.img}}"></Image>
                </Swiper-item>
            </Swiper>
            <View className="indicator data-v-c50eabf2">{{ currentSwiper+ 1 + '/' + swiperList.length}}</View>
            <View bindtap="__e" className="video_play data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'toPlay',['$event'] ] ] ] ]}}" wx:if="{{isPlay&&goodsData.Video}}">
                <View className="play_icon data-v-c50eabf2" style="{{'background-Image:'+'url('+$root.m0+')'+';'}}">
                    <View className="video_time data-v-c50eabf2">{{ videoTime }}</View>
                </View>
            </View>
            <View className="video_box data-v-c50eabf2" wx:if="{{!isPlay}}">
                <Video autoplay showMuteBtn className="data-v-c50eabf2" controls="controls" enableProgressGesture="false" id="swiperVideo" src="{{goodsData.Video}}"></Video>
                <View className="pause_play global_df_c data-v-c50eabf2">
                    <View bindtap="__e" className="pause_btn global_df_c data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'outPlay',['$event'] ] ] ] ]}}">退出播放</View>
                </View>
            </View>
        </View>
        <View className="info-box goods-info data-v-c50eabf2">
            <View className="price data-v-c50eabf2">￥<Text className="nowMoney data-v-c50eabf2">{{ goodsData.price }}</Text>
            </View>
            <View className="title data-v-c50eabf2">
                <Text className="titles data-v-c50eabf2">{{ goodsData.title }}</Text>
            </View>
        </View>
        <View className="info-box spec data-v-c50eabf2">
            <View bindtap="__e" className="row data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'showSelect2',['$event'] ] ] ] ]}}">
                <View className="Text data-v-c50eabf2">服务</View>
                <View className="content data-v-c50eabf2">
                    <Text className="data-v-c50eabf2" style="margin-right:10rpx;" wx:for="{{explain}}" wx:key="index">{{ item.title }}</Text>
                </View>
            </View>
        </View>
        <View className="description data-v-c50eabf2">
            <View className="items data-v-c50eabf2">
                <Text catchtap="__e" className="{{['flex1 data-v-c50eabf2',index===itemSelect?'active':'']}}" data-event-opts="{{[ [ 'tap',[ [ 'toChange',[index,'$0'],[ [ ['items','',index,'type'] ] ] ] ] ] ]}}" wx:for="{{items}}" wx:key="index">{{ ''+item.name + '' }}</Text>
            </View>
            <View className="con data-v-c50eabf2">
                <View className="data-v-c50eabf2" wx:if="{{type==='A'}}">
                    <rich-Text className="data-v-c50eabf2" nodes="{{scene}}"></rich-Text>
                </View>
                <Block>
                    <View className="data-v-c50eabf2" wx:if="{{type==='B'}}">
                        <rich-Text className="data-v-c50eabf2" nodes="{{goodsImg.brand}}"></rich-Text>
                    </View>
                    <Block wx:else>
                        <View className="data-v-c50eabf2" wx:if="{{type==='C'}}">
                            <rich-Text className="data-v-c50eabf2" nodes="{{goodsImg.order}}"></rich-Text>
                        </View>
                        <Block wx:else>
                            <View className="data-v-c50eabf2" wx:if="{{type==='D'}}">
                                <rich-Text className="data-v-c50eabf2" nodes="{{goodsImg.afterSale}}"></rich-Text>
                            </View>
                        </Block>
                    </Block>
                </Block>
            </View>
        </View>
        <View className="addCart data-v-c50eabf2">
            <View className="mean data-v-c50eabf2">
                <View bindtap="__e" className="list data-v-c50eabf2" data-event-opts="{{[ [ 'tap',[ [ 'mean',['$0'],[ [ ['addCartMean','',index,'name'] ] ] ] ] ] ]}}" wx:for="{{addCartMean}}" wx:key="index">
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
    </View>


}