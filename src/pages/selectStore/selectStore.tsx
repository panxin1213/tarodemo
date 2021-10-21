import { View, Text, Image, ScrollView, Navigator, RadioGroup, Label, Radio } from '@tarojs/components'
import { useState, useEffect } from 'react'
import none from '../../static/none.png'
import kefu from '../../static/kefu.png'
import { getShopList } from '../../common/api';
import "./selectStore.scss"

export default function HouSing() {

    const [shopList, setshopList] = useState([])
    const [currIndex, setcurrIndex] = useState(null)
    const [workbench, setworkbench] = useState("")

    useEffect(() => {
        getShopList().then((res: any) => {
            setshopList(res);
        })
    }, [])

    const loadBottom = () => {

    }

    const radioChange = (index) => {
        console.log(index);
        setcurrIndex(index);
    }

    const toNext = () => {

    }

    return <View className="flex-wrap data-v-8ea74568">
        <ScrollView className="flex1 list-wrap data-v-8ea74568" onScrollToLower={loadBottom} lowerThreshold={40} scrollY={true} style={{ height: "calc(100vh - 160px)" }}>
            {
                shopList.map((item: any, index) => {
                    return <RadioGroup className="radio-group data-v-8ea74568" onClick={() => { radioChange(index) }} key={index}>
                        <Label className={'list data-v-8ea74568' + (index == currIndex ? ' checked' : ' icon')}>
                            <Image className="data-v-8ea74568" src="https://Image.snimay.com/applet/indexManager/20190830/92liwt.jpg"></Image>
                            <View className="flex1 data-v-8ea74568" onClick={toNext}>
                                <View className="company data-v-8ea74568">{item.store_name}</View>
                                <View className="address data-v-8ea74568">{'' + (item.store_province_name || item.province_name || '') + ' - ' + (item.store_city_name || item.city_name || '') + ' - ' + (item.store_area_name || item.area_name || '') + ''}</View>
                            </View>
                            <Radio className="data-v-8ea74568" value="0"></Radio>
                            <View className="icon data-v-8ea74568"></View>
                        </Label>
                    </RadioGroup>
                })
            }
            {
                !shopList || shopList.length === 0 ? <View className="none data-v-8ea74568" >
                    <Image className="data-v-8ea74568" src={none}></Image>
                    <View className="data-v-8ea74568">暂无对应门店</View>
                </View> : ""
            }
        </ScrollView>
        <View className="book data-v-8ea74568" style="display:none;">
            <Image className="data-v-8ea74568" src={kefu}></Image>
            <View className="flex1 data-v-8ea74568">
                <View className="name data-v-8ea74568">姚婷婷</View>
                <View className="job data-v-8ea74568">[诗曼妮] 家居顾问</View>
            </View>
            <View className="button data-v-8ea74568">预约设计</View>
        </View>
        <View className="change data-v-8ea74568">
            <View className="data-v-8ea74568">没有找到对应门店？</View>
            {
                workbench ? <Navigator className="data-v-8ea74568" hoverClass="none" url="../changePhone/changePhone" >
                    <View className="btn data-v-8ea74568">切换手机</View>
                </Navigator> : <Navigator className="data-v-8ea74568" hoverClass="none" url={'../../pages/login/login?page=' + workbench}>
                    <View className="btn data-v-8ea74568">切换手机</View>
                </Navigator>
            }
        </View>
    </View>

}