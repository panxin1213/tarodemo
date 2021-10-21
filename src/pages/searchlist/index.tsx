import { View } from '@tarojs/components'
import { useState, useEffect } from 'react'
import { getSearchList } from '../../common/api'
import List from '../components/list/itemlist';
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


    return <View className="searchList data-v-2578033e">
        <List list={list} handleClick={handleClick} status={status} />
    </View >

}