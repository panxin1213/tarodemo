import { View, Image } from '@tarojs/components'
import ListItem from '../components/list/itemlist'
import { useState, useEffect } from 'react'
import { getSearchList } from '../../common/api'
import Taro from '@tarojs/taro'
import './hotProduct.scss'

const selectItem = [{
    name: "全屋定制套餐",
    arrow: !1,
    noSelectImg: "",
    SelectImg: ""
}, {
    name: "家私家具套餐",
    arrow: !1,
    noSelectImg: "",
    SelectImg: ""
}];

export default function Index() {
    const [list, setlist] = useState([])
    const [status, setstatus] = useState('more')
    const [selectIndex, setselectIndex] = useState(0)

    useEffect(() => {
        setlist([]);
        Taro.showLoading();
        setTimeout(() => {
            getSearchList().then((res: any) => {
                setlist(res);
            }).finally(() => {
                Taro.hideLoading();
            });
        }, 500)
    }, [selectIndex])


    const handleClick = () => {
        // 开始加载
        setstatus('loading');
        // 模拟异步请求数据
        setTimeout(() => {
            // 没有更多了
            setstatus('noMore');
        }, 2000)
    }

    const selectItems = (index) => {
        setselectIndex(index);
    }

    return <View className="hotProduct data-v-063508aa">
        <View className="topLine data-v-063508aa"></View>
        <View className="condition data-v-063508aa">
            {
                selectItem.map((item: any, index) => {
                    return <View className={'flex1 data-v-063508aa' + (index === selectIndex ? ' select' : '')} onClick={() => { selectItems(index) }} key={index}>{'' + item.name + ''}{item.arrow ? <View className="arrow data-v-063508aa"></View> : ""}
                        {item.noSelectImg ? <Image className="noSelectImg data-v-063508aa" mode="aspectFill" src={item.noSelectImg}></Image> : ""}
                        {item.SelectImg ? <Image className="SelectImg data-v-063508aa" mode="aspectFill" src={item.SelectImg}></Image> : ""}
                        <View className="red_line data-v-063508aa"></View>
                    </View>
                })
            }
        </View>
        <ListItem list={list} handleClick={handleClick} status={status} />
    </View>

}