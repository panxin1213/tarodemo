import { WebView, View } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'

import { useState, useEffect } from 'react'

export default function Index(props) {
    const [url, seturl] = useState("")
    const router = useRouter();

    useEffect(() => {
        Taro.showLoading({
            title: '加载中',
        })
        seturl(decodeURIComponent(router.params.path + ""));
        Taro.setNavigationBarTitle({ title: "活动详情" });
    }, [])

    const handleLoad: any = (e) => {
        Taro.hideLoading();
    }

    return <View className="active">
        {
            url && <WebView src={url} onLoad={handleLoad}></WebView>
        }
    </View>

}