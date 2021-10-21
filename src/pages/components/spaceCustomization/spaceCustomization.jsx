import ListItem from '../list/itemlist/'
import { View, Image, ScrollView } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { useState, useEffect } from 'react'
import { getClassIndex, getSearchList } from '../../../common/api'
import Taro from '@tarojs/taro'
import './spaceCustomization.scss'
import select2 from '../../../static/select2.png'
import select1 from '../../../static/select1.png'

const tips = [{
    name: "综合",
    val: 0
}, {
    name: "价格升序",
    val: 1
}, {
    name: "价格降序",
    val: 2
}];

export default function SpaceCustomization(props) {
    const [tabList, settabList] = useState([]);
    const [goodindex, setgoodindex] = useState(0)
    const [data, setdata] = useState([])
    const [selectIndex, setselectIndex] = useState(0)
    const [selectItem, setselectItem] = useState([{
        name: "综合",
        arrow: !0,
        noSelectImg: "",
        SelectImg: ""
    }, {
        name: "新品",
        arrow: !1,
        noSelectImg: "",
        SelectImg: ""
    }, {
        name: "人气",
        arrow: !1,
        noSelectImg: "",
        SelectImg: ""
    }, {
        name: "筛选",
        arrow: !1,
        noSelectImg: select2,
        SelectImg: select1
    }])
    const [fadeDownTips, setfadeDownTips] = useState(false)
    const [selectTips, setselectTips] = useState(0)
    const [params, setparams] = useState(null)
    const [isshowrightBox, setisshowrightBox] = useState(false)
    const [attributeList2, setattributeList2] = useState({ name: '品名' })
    const [shopGoodsCategoryList, setshopGoodsCategoryList] = useState([])
    const [attributeList, setattributeList] = useState([])
    const [shopAttributeValueList, setshopAttributeValueList] = useState([])
    const [selectOneIndex, setselectOneIndex] = useState(null);
    const [selectObj, setselectObj] = useState({})
    const [status, setstatus] = useState('more')

    const [list, setlist] = useState([])

    const { type } = props;


    useEffect(() => {
        Taro.showLoading();
        getClassIndex().then(res => {
            console.log('res', res);
            settabList(res[type].data.map(a => ({ title: a.name })));
            setdata(res);

            Taro.hideLoading();
            setparams({});
        });
    }, []);

    useEffect(() => {
        if (data && data[type]) {
            setshopGoodsCategoryList(data[type].data[goodindex].childList ?? data[type].data[goodindex].shopAttributeValueList);
        }
        setparams({});
    }, [goodindex, data])

    useEffect(() => {
        if (params) {
            setlist([]);
            Taro.showLoading();
            setTimeout(() => {
                getSearchList().then((res) => {
                    setlist(res);
                }).finally(() => {
                    Taro.hideLoading();
                });
            }, 500);
            setstatus('more');
        } else {
            setlist([]);
        }
    }, [params])

    const goodhandleClick = (e) => {
        setgoodindex(e);
    }

    const selectItems = (index) => {
        setselectIndex(index)
        if (index === 0) {
            setfadeDownTips(!fadeDownTips)
        } else if (index === 1) {
            params.new = 1;

            setparams({ order: params.order, new: 1 });
        } else if (index === 2) {
            setparams({ order: params.order, hot: 1 });
        } else {
            setisshowrightBox(!isshowrightBox);
        }
    }
    const showTips = () => {
        setfadeDownTips(!fadeDownTips);
    }

    const setVal = (v) => {
        if (v === 0) {
            delete params.order;
        } else {
            params.order = v;
        }
        setparams({ ...params, page: 1 });
        setselectTips(v);
    }

    const selectOne = () => {

    }

    const changeCategory = (index, v) => {
        setparams({ ...params, page: 1, category: v });
        selectCategory(index, v);
        setisshowrightBox(false);
    }

    const selectCategory = (index, v) => {
        setselectOneIndex(index);
        setselectObj({ index, value: v });
    }


    const handleClick = () => {
        // 开始加载
        setstatus('loading');
        // 模拟异步请求数据
        setTimeout(() => {
            // 没有更多了
            setstatus('noMore');
        }, 2000)
    }

    return <View className="spaceCustomization data-v-250bbf44">
        <AtTabs swipeable={false} className="tabbox" scroll={true} current={goodindex} tabList={tabList} onClick={goodhandleClick}></AtTabs>
        <ListItem list={list} status={status} handleClick={handleClick} />
        <View className="condition data-v-250bbf44">
            {
                selectItem.map((item, index) => {
                    return <View className={"flex1 data-v-250bbf44" + (index === selectIndex ? ' select' : '')} onClick={() => { selectItems(index) }} key={index}>{'' + item.name + ''}{item.arrow ? <View className="arrow data-v-250bbf44"></View> : ""}
                        {item.noSelectImg != '' ? <Image className="noSelectImg data-v-250bbf44" mode="aspectFill" src={item.noSelectImg}></Image> : ""}
                        {item.SelectImg != '' ? <Image className="SelectImg data-v-250bbf44" mode="aspectFill" src={item.SelectImg}></Image> : ""}
                    </View>
                })
            }
        </View>
        <View className={'allTips data-v-250bbf44' + (fadeDownTips ? ' fadeDownTips' : '')} onClick={showTips}>
            {
                tips.map((item, index) => {
                    return <View className={'tips data-v-250bbf44' + (index === selectTips ? ' selectTips' : '')} onClick={() => { setVal(index) }} key={index}>{'' + item.name + ''}</View>
                })
            }
        </View>
        <View className={'rightBox data-v-250bbf44' + (isshowrightBox ? ' showrightBox' : '')}>
            <ScrollView scrollWithAnimation scrollY className="scroll-y data-v-250bbf44">
                <View className="classify data-v-250bbf44">
                    <View className="classList data-v-250bbf44">
                        <View className="title data-v-250bbf44">{attributeList2.name}</View>
                        <View className="item data-v-250bbf44">
                            {
                                shopGoodsCategoryList.map((item, index) => {
                                    return <View onClick={() => { selectCategory(index, item.id) }} className={'list data-v-250bbf44' + (index === selectOneIndex ? ' active' : '') + ((index + 1) % 4 === 0 ? ' noRightMargin' : '')} key={index}>{'' + item.name + ''}</View>
                                })
                            }
                        </View>
                    </View>
                    {
                        attributeList.map((item, index) => {
                            return <View className="classList data-v-250bbf44" key={index}>
                                <View className="title data-v-250bbf44">{item.name}</View>
                                <View className="item data-v-250bbf44">
                                    {
                                        shopAttributeValueList.map((items, index) => {
                                            return <View className={'list data-v-250bbf44' + (indexs === isCheck[index].id ? ' active' : '') + ((indexs + 1) % 4 === 0 ? 'noRightMargin' : '')} key={indexs}>{'' + items.name + ''}</View>
                                        })
                                    }
                                </View>
                            </View>
                        })
                    }
                </View>
                <View className="submit data-v-250bbf44">
                    <View className="btn data-v-250bbf44">
                        <View className="data-v-250bbf44" onClick={() => { changeCategory(null, null) }}>重置</View>
                        <View className="data-v-250bbf44" onClick={() => { changeCategory(selectObj.index, selectObj.value) }}>确定</View>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
}