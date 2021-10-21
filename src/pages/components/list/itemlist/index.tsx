import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import NoData from '../../noData';
import "./index.scss"
import { AtLoadMore } from 'taro-ui'

export default function Index(props) {
    if (!props.list || !props.list.length) {
        return <NoData />;
    }

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

    return <>
        {
            <View className="itemList">
                {props.list.map((item: any, index) => {
                    return <View className="item animated fadeInUp" key={index}>
                        <View className="views" onClick={() => { detailclick(item.id) }}>
                            <Image lazyLoad className="itemImg" mode="aspectFit" src={item.image}></Image>
                            <View className="titles">{(item.title === undefined ? '' : item.title) + (item.name === undefined ? '' : item.name)}</View>
                            {item.price && <View className="price">{'￥' + item.price}</View>}
                        </View>
                    </View>
                })
                }
            </View>
        }
        {
            props.list && props.list.length ? <AtLoadMore
                onClick={props.handleClick}
                status={props.status}
                moreBtnStyle={{ border: 0 }}
            /> : ""}
    </>
}