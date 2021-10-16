import { View, Image } from '@tarojs/components'
import { useState, useEffect } from 'react'
import noData from '../../static/noData.png';
import { AtLoadMore } from 'taro-ui'
import { getSearchList } from '../../common/api'
import './index.scss'

export default function Index() {
    const [list, setlist] = useState(new Array<any>())
    const [status, setstatus] = useState('more')


    useEffect(() => {
        getSearchList().then((res: Array<any>) => {
            setlist(res);
        });
    }, []);

    const handleClick = () => {
        // 开始加载
        setstatus('loading');
        // 模拟异步请求数据
        setTimeout(() => {
            // 没有更多了
            setstatus('noMore');
        }, 2000)
    }
    const ts: any = status;


    const detailclick = (id) => {
        if (!id) {
            Taro.showToast({
                title: 'ID不存在',
                icon: 'none',
                duration: 2000
            });
        } else {
            Taro.navigateTo({
                url: "/pages/spaceInfo/index?id=" + id
            });
        }
    }

    return <View className="searchList data-v-2578033e">
        {
            !list || list.length == 0 ? <View className="noData data-v-2578033e" >
                <View className="noDataImg data-v-2578033e">
                    <Image className="noImg data-v-2578033e-image" mode="aspectFill" src={noData}></Image>
                </View>
                <View className="noDataKwd data-v-2578033e">暂无数据</View>
            </View> : <View className="itemList data-v-2578033e">
                {list.map((item: any, index) => {
                    return <View className="item animated fadeInUp data-v-2578033e" key={index}>
                        <View className="views data-v-2578033e" onClick={() => { detailclick(item.id) }}>
                            <Image lazyLoad className="itemImg data-v-2578033e" mode="aspectFit" src={item.image}></Image>
                            <View className="titles data-v-2578033e">{(item.title === undefined ? '' : item.title) + (item.name === undefined ? '' : item.name)}</View>
                            {item.price && <View className="price data-v-2578033e">{'￥' + item.price}</View>}
                        </View>
                    </View>
                })
                }
            </View>
        }
        {list && list.length ? <AtLoadMore
            onClick={handleClick}
            status={ts}
            moreBtnStyle={{ border: 0 }}
        /> : ""}
    </View >

}