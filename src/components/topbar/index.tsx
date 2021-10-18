import { View, Text } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Index(props) {
    const [option, setoption] = useState({ height: 0, top: 0 })
    const [tohome, settohome] = useState(false)


    useEffect(() => {
        if (Taro.getCurrentPages().length > 1) {
            settohome(false);
        } else {
            settohome(true);
        }
        Taro.getSystemInfo({
            success: function (t) {
                if (process.env.TARO_ENV !== 'h5') {
                    var o = Taro.getMenuButtonBoundingClientRect();
                    setoption({ height: o.top + 32, top: o.top });
                } else {
                    setoption({ height: 32, top: 10 });
                }
            }
        });
    }, [])

    const toHome = () => {
        Taro.redirectTo({
            url: "/pages/index/index"
        });
    }

    const back = () => {
        Taro.navigateBack({
            delta: 1
        });
    }

    return <View className={"topBar data-v-7cec76db" + (props.showTopBar ? " showTopBar" : "")} style={{ height: option.height }} >
        <View className="con data-v-7cec76db">
            {
                tohome ? <View className="home_box data-v-7cec76db" style={{ top: option.top }} onClick={toHome}>
                    <View className="home data-v-7cec76db"></View>
                </View> : <View className="arrow data-v-7cec76db" style={{ top: option.top }} onClick={back}>
                    <View className="back data-v-7cec76db"></View>
                </View>
            }
            <Text className="title data-v-7cec76db" style={{ top: option.top }}>{'' + props.title + ''}</Text>
        </View>
    </View >

}