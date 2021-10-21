import { View, Image } from '@tarojs/components'

import icon_nor from '../../static/icon_nor@2x.png'
import "./lastestNews.scss"

export default function LastestNews() {
    return <View className="content data-v-10a78915">
        {/* <View className="list-wrap data-v-10a78915" wx:for="{{$root.l0}}" wx:key="index">
            <View className="news-list data-v-10a78915">
                <View className="icon header data-v-10a78915">
                    <Image className="_img data-v-10a78915" mode="aspectFill" src="{{item[$orig].msg_icon}}" wx:if="{{item[$orig].msg_flag==1}}"></Image>
                    <Image className="_img data-v-10a78915" mode="aspectFill" src="{{$root.m0}}" wx:if="{{item[$orig].msg_flag==2}}"></Image>
                    <View className="msg_read_flag data-v-10a78915" wx:if="{{item[$orig].msg_status==-1}}"></View>
                </View>
                <View className="msg_right_box data-v-10a78915">
                    <View bindtap="__e" className="right data-v-10a78915" data-event-opts="{{[ [ 'tap',[ [ 'goto',['$0'],[ [ ['messageList','',index] ] ] ] ] ] ]}}">
                        <View className="row data-v-10a78915">
                            <View className="group-name data-v-10a78915">
                                <text className="data-v-10a78915" style="margin-right:10rpx;" wx:if="{{item[$orig].msg_flag==2}}">[群消息]</text>{{ ''+item[$orig].msg_name }}</View>
                        </View>
                        <View className="row data-v-10a78915">
                            <View className="world data-v-10a78915" wx:if="{{item[$orig].content.type==1}}">{{ item.m1 }}</View>
                            <Image alt className="type_2_img  _img data-v-10a78915" src="{{item[$orig].content.content}}" wx:if="{{item[$orig].content.type==2}}"></Image>
                            <View className="world data-v-10a78915" wx:if="{{item[$orig].content.type==3}}">{{ item[$orig].content.title }}</View>
                        </View>
                    </View>
                    <View bindtap="__e" className="msg_del global_df_c data-v-10a78915" data-event-opts="{{[ [ 'tap',[ [ 'delMsg',['$0'],[ [ ['messageList','',index] ] ] ] ] ] ]}}">
                        <uni-icons bind:__l="__l" className="global_df_c data-v-10a78915" color="#ffffff" size="18" type="trash" vueId="{{'1-'+index}}"></uni-icons>
                    </View>
                </View>
            </View>
        </View> */}
        <View className="none-list data-v-10a78915">
            <Image className="img data-v-10a78915" src={icon_nor}></Image>
            <View className="data-v-10a78915">暂无消息，快去和客户多聊聊吧</View>
        </View>
    </View>

}