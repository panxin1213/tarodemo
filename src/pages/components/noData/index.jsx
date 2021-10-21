import noData from '../../../static/noData.png';
import { View, Image } from '@tarojs/components'
import './index.scss'

export default function NoData() {
    return <View className="noData" >
        <View className="noDataImg">
            <Image className="noImg" mode="aspectFill" src={noData}></Image>
        </View>
        <View className="noDataKwd">暂无数据</View>
    </View>
}