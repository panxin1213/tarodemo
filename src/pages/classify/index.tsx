import { View, Text, Image, ScrollView } from '@tarojs/components'
import { useState, useEffect } from 'react'
import './index.scss'
import noImg from '../../static/noImg.jpg'
import { getClassIndex } from '../../common/api'
import Taro from '@tarojs/taro'


const wheight = Taro.getSystemInfoSync().windowHeight;
export default function Index() {
    const [data, setdata] = useState(new Array<any>());
    const [catelist, setcatelist] = useState(new Array<any>())
    const [currentId, setcurrentId] = useState(-1)
    const [scrollTop, setscrollTop] = useState(0)
    const [banner, setbanner] = useState({ img: "", url: "" })
    const [fadeInUp, setfadeInUp] = useState(false)
    const [list, setlist] = useState(new Array<any>())
    const [scrollHeight, setscrollHeight] = useState(0)

    const height = wheight;


    useEffect(() => {
        getClassIndex().then((res: Array<any>) => {
            setcatelist(res.map((a: any) => a.title));
            setdata(res);
            setcurrentId(0);
            setfadeInUp(true);
        });
    }, []);

    useEffect(() => {
        if (currentId > -1) {
            setbanner(data[currentId] && data[currentId].banner ? { img: data[currentId].banner.imageUrl, url: data[currentId].banner.linkUrl } : { img: "", url: "" });
            setlist(data[currentId]?.data ?? new Array<any>());
        }
    }, [currentId, data]);

    const scroll = (e) => {
        setscrollHeight(e.detail.scrollHeight)
    }

    const tabtap: any = (a) => {
        setcurrentId(a);
        setscrollTop(-scrollHeight * a);
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
                url: "/pages/searchlist/index?id=" + id
            });
        }
    }

    return <View className="outer data-v-290b7163">
        <View className="classify data-v-290b7163">
            <ScrollView scrollY className="left-aside data-v-290b7163">
                {
                    catelist.map((item: any, index) => {
                        return <View onClick={() => { tabtap(index) }} className={"litem ratina-bd bd-b data-v-290b7163" + (index === currentId ? " active" : '')} key={index}>{'' + item + ''}</View>
                    })
                }
            </ScrollView>
            <ScrollView onScroll={scroll} scrollY className="right-aside data-v-290b7163" scrollTop={scrollTop} style={{ height: height }}>
                {banner.img && <View className="topImg animated data-v-290b7163">
                    <Image className="data-v-290b7163-image" mode="aspectFill" src={banner.img}></Image>
                </View>
                }
                <View className={'listInfo animated data-v-290b7163' + (fadeInUp ? "fadeInUp" : "")}>
                    {
                        list.map((a: any, index) => {
                            return <View className="list data-v-290b7163" key={index}>
                                <Text className="title data-v-290b7163">{'-' + a.name + '-'}</Text>
                                <View className="items data-v-290b7163">
                                    {
                                        (a.childList ?? a.shopAttributeValueList) && (a.childList ?? a.shopAttributeValueList).map((item: any, cindex) => {
                                            return <View className="itemList data-v-290b7163" key={cindex} onClick={() => {
                                                detailclick(item.id);
                                            }}>
                                                {!item.imageUrl ? <Image className="data-v-290b7163-image" lazyLoad mode="aspectFill" src={noImg}></Image> : ""}
                                                {item.imageUrl ? <Image className="data-v-290b7163-image" lazyLoad mode="aspectFill" src={item.imageUrl}></Image> : ""}
                                                <Text className="data-v-290b7163-text">{item.name}</Text>
                                            </View>
                                        })
                                    }
                                </View>
                            </View>
                        })
                    }
                </View>
            </ScrollView>
        </View >
    </View >

}