import { View } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

export default function Index(props) {
    const [showTopBar, setshowTopBar] = useState(false)
    const [option, setoption] = useState({ height: 0, top: 0 })

    useEffect(() => {
        Taro.getSystemInfo({
            success: function (t) {
                var o = Taro.getMenuButtonBoundingClientRect();
                setoption({ height: o.top + 32, top: o.top });
            }
        });
    }, [])

    return <View className={"topBar data-v-7cec76db" + (showTopBar ? "showTopBar" : "")} style={{ height: option.height }} >
        <View className="con data-v-7cec76db">
            <View className="home_box data-v-7cec76db" style={{ top: option.top }} wx:if="{{to_home}}">
                <View className="home data-v-7cec76db"></View>
            </View>
            <View className="arrow data-v-7cec76db" data-event-opts="{{[ [ 'tap',[ [ 'back',['$event'] ] ] ] ]}}" style="{{'top:'+top+'px'+';'}}" wx:else>
                <View className="back data-v-7cec76db"></View>
            </View>
            <text className="title data-v-7cec76db" style="{{'top:'+top+'px'+';'}}">{{ ''+title + '' }}</text>
        </View>
    </View >

}