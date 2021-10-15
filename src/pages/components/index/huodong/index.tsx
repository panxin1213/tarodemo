import { useState, useEffect } from 'react'
import { getIndexhuodong } from '../../../../common/api'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro';

export default function Huodong(props) {
    const [list, setlist] = useState([]);

    useEffect(() => {
        getIndexhuodong().then((data: []) => {
            const arr: any = data && data.length ? data : [];
            setlist(arr);
        });
    }, [])

    const path = (e) => {
        const t = Taro;
        return null != e.url && -1 != e.url.indexOf("pages") ? void t.navigateTo({
            url: "".concat(e.url, "?id=").concat(e.id)
        }) : null != e.url && "" != e.url ? void t.navigateTo({
            url: "/pages/active/index?path=".concat(encodeURIComponent(e.url), "&title=").concat(e.name)
        }) : null != e.linkUrl && -1 != e.linkUrl.indexOf("pages") ? void t.navigateTo({
            url: "".concat(e.linkUrl, "?id=").concat(e.id)
        }) : void t.navigateTo({
            url: "/pages/active/index?path=".concat(encodeURIComponent(e.linkUrl), "&title=").concat(e.name)
        });
    }

    return <ScrollView scrollWithAnimation scrollX className="scroll-view_H">
        {
            list && list.length && list.map((item: any, index) => {
                return <View className="scroll-view-item_H" id="demo1" key={index}>
                    <View className="activity" onClick={() => { path(item) }}>
                        <Image lazyLoad mode={process.env.TARO_ENV === 'h5' ? "aspectFit" : "aspectFill"} src={item.imageUrl}></Image>
                        <View className="sheji view">
                            {'' + item.title + ''}
                            {item.title == '' ? <Text>暂无描述</Text> : ""}
                        </View>
                        <View className="view">
                            {'' + item.reason + ''}
                            {item.reason == '' ? <Text>暂无描述</Text> : ""}
                        </View>
                    </View>
                </View>
            })
        }
    </ScrollView>
}