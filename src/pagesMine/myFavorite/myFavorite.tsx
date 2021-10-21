import { View, Text, Image, Input, Button } from '@tarojs/components'
import { useState, useEffect } from 'react';

import Taro from '@tarojs/taro'
import { getShoucangList, getSheJiShoucangList } from '../../common/api'

import './myFavorite.scss'
import isCheck from '../../static/isCheck.png'
import noCheck from '../../static/noCheck.png'
import noData from '../../static/noData.png'

const selectItem = [{
    name: "商品"
}, {
    name: "设计方案"
}]

export default function Index() {

    const [isEdit, setisEdit] = useState(0)
    const [selectIndex, setselectIndex] = useState(0)
    const [allChecked, setallChecked] = useState(false)
    const [cartList, setcartList] = useState<any>([])
    const [designList, setdesignList] = useState<any>([])

    useEffect(() => {
        getShoucangList().then((res: any) => {
            setcartList(res);
        })
        getSheJiShoucangList().then((res: any) => {
            setdesignList(res);
        })
    }, [])


    const manage = () => {
        setisEdit(isEdit ? 0 : 1);
        setallChecked(false);
        setdesignList(designList.map((a: any) => {
            delete a.isActive;
            return a;
        }));

        setcartList(cartList.map((a: any) => {
            delete a.isActive;
            return a;
        }));
    }

    const selectItems = (index) => { setselectIndex(index) }

    const check = () => {
        const active = !allChecked;

        setallChecked(active);

        if (selectIndex) {
            setdesignList(designList.map((a: any) => {
                a.isActive = active;
                return a;
            }));
        } else {
            setcartList(cartList.map((a: any) => {
                a.isActive = active;
                return a;
            }));
        }
    }

    const itemcheck = (index) => {
        if (selectIndex) {
            designList[index].isActive = designList[index].isActive ? 0 : 1;
            setdesignList([...designList]);
        } else {
            cartList[index].isActive = cartList[index].isActive ? 0 : 1;
            setcartList([...cartList]);
        }
    }

    const toDetails = () => { }

    const turnTo3D = () => { }

    const deleteItem = () => {
        if (selectIndex) {
            setdesignList(designList.filter(a => !a.isActive));
        } else {
            setcartList(cartList.filter(a => !a.isActive));
        }
        setisEdit(0);
        setallChecked(false);
    }

    return <View className="myFavorite-content data-v-9fab63ce">
        <View className="data-v-9fab63ce">
            {isEdit == 0 ? <View className="manage data-v-9fab63ce">
                <View className="condition data-v-9fab63ce">
                    {selectItem.map((item: any, index) => {
                        return <View onClick={() => { selectItems(index) }} className={'flex1 data-v-9fab63ce' + (index === selectIndex ? ' select' : '')} key={index}>{'' + item.name + ''}<View className="red_line data-v-9fab63ce"></View></View>
                    })}
                </View>
                <Text className="data-v-9fab63ce" onClick={manage}>管理</Text>
            </View> : ""
            }
            {isEdit == 1 ? <View className="manage data-v-9fab63ce">
                <View onClick={check} className={'toCheckAll data-v-9fab63ce' + (allChecked ? ' actives' : '')}>
                    <Image className="checks isChecks data-v-9fab63ce" mode="aspectFill" src={isCheck}></Image>
                    <Image className="checks noChecks data-v-9fab63ce" mode="aspectFill" src={noCheck}></Image>全选</View>
                <Text className="data-v-9fab63ce" onClick={manage}>完成</Text>
            </View> : ""
            }
            {
                selectIndex === 0 ? <View className="list data-v-9fab63ce">
                    {
                        cartList.map((item: any, index) => {
                            return <View className="listItem data-v-9fab63ce" key={index}>
                                <View className="listInfo data-v-9fab63ce">
                                    {isEdit == 1 ? <View className="circle data-v-9fab63ce" onClick={() => { itemcheck(index) }}>
                                        <View className={'checkbox data-v-9fab63ce' + (item.isActive ? ' active' : '')}>
                                            <Image className="check isCheck data-v-9fab63ce" mode="aspectFill" src={isCheck}></Image>
                                            <Image className="check noCheck data-v-9fab63ce" mode="aspectFill" src={noCheck}></Image>
                                        </View>
                                    </View> : ""}
                                    <View className="itemImg data-v-9fab63ce" onClick={toDetails}>
                                        <Image className="data-v-9fab63ce" mode="aspectFill" src={item.imageUrl}></Image>
                                    </View>
                                    <View className="info data-v-9fab63ce" onClick={toDetails}>
                                        <Text className="itemName data-v-9fab63ce">{item.goodsName}</Text>
                                        <Text className="itemInfo data-v-9fab63ce">{item.attr_val}</Text>
                                        <View className="count data-v-9fab63ce">
                                            <Text className="nums data-v-9fab63ce">{'￥' + (item.price || '') + ''}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        })
                    }
                    {cartList.length === 0 ? <View className="noData data-v-9fab63ce">
                        <View className="noDataImg data-v-9fab63ce">
                            <Image className="noImg data-v-9fab63ce" mode="aspectFill" src={noData}></Image>
                        </View>
                        <View className="noDataKwd data-v-9fab63ce">暂无收藏</View>
                    </View> : ""}
                </View> : ""
            }
            {
                selectIndex === 1 ? <View className="list data-v-9fab63ce">
                    {
                        designList.map((item: any, index) => {
                            return <View className="listItem data-v-9fab63ce" key={index}>
                                <View className="listInfo data-v-9fab63ce">
                                    {isEdit === 1 ? <View className="circle data-v-9fab63ce" onClick={() => { itemcheck(index) }}>
                                        <View className={'checkbox data-v-9fab63ce' + (item.isActive ? ' active' : '')}>
                                            <Image className="check isCheck data-v-9fab63ce" mode="aspectFill" src={isCheck}></Image>
                                            <Image className="check noCheck data-v-9fab63ce" mode="aspectFill" src={noCheck}></Image>
                                        </View>
                                    </View> : ""}
                                    <View className="itemImg data-v-9fab63ce" onClick={toDetails}>
                                        <Image className="data-v-9fab63ce" mode="aspectFill" src={item.good_img}></Image>
                                    </View>
                                    <View className="info data-v-9fab63ce" onClick={toDetails}>
                                        <Text className="itemName data-v-9fab63ce">{item.good_name}</Text>
                                        <Text className="itemInfo data-v-9fab63ce">{item.attr_val}</Text>
                                        <View className="count data-v-9fab63ce">
                                            <Text className="nums data-v-9fab63ce">{'￥' + (item.price || '') + ''}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        })
                    }
                    {designList.length === 0 ? <View className="noData data-v-9fab63ce">
                        <View className="noDataImg data-v-9fab63ce">
                            <Image className="noImg data-v-9fab63ce" mode="aspectFill" src={noData}></Image>
                        </View>
                        <View className="noDataKwd data-v-9fab63ce">暂无收藏</View>
                    </View> : ""}
                </View> : ""
            }
            {isEdit === 1 ? <View className="deleteAll data-v-9fab63ce">
                <View className="deleteCount data-v-9fab63ce" onClick={deleteItem}>删除</View>
            </View> : ""}
        </View>
    </View>

}