import React, { useState, useEffect } from 'react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View, Text, Image, Swiper, SwiperItem, Navigator, Button } from '@tarojs/components'

export default function TabSwiper(props) {
    const [list, setlist] = useState([]);
    const [goodindex, setgoodindex] = useState(0);
    const [elements, setelements] = useState([]);
    const [items, setitems] = useState([])

    useEffect(() => {
        const data: [] = props.data ?? [];
        setlist(data);
        let hasEle = false;
        const eles: any = data.map((a: any) => {
            const ele = a.element ?? null;
            if (ele) {
                hasEle = true;
            }
            return ele;
        });
        if (hasEle) {
            setelements(eles);
        } else {
            let arr: any = data.map((a: any) => {
                const o = { title: a.title, img: a.img, url: a.url };
                return o;
            });
            setitems(arr);
        }
    }, [])

    if (!list || !list.length) {
        return <></>;
    }

    const goodhandleClick = (value) => {
        if (isNaN(parseFloat(value))) {
            setgoodindex(value?.detail?.current ?? 0);
        } else {
            setgoodindex(value);
        }
    }

    return <>
        <AtTabs current={goodindex} tabList={list.map((a: any) => ({ 'title': a.title }))} onClick={goodhandleClick}></AtTabs>
        {
            elements && elements.length ? elements.map((a: any, index) => {
                return <AtTabsPane current={goodindex} index={index} key={index}>
                    {a}
                </AtTabsPane>
            }) : ""
        }{
            items && items.length ? <Swiper className="swiper" autoplay={true} current={goodindex} onChange={goodhandleClick} circular={true} duration={500} indicatorActiveColor="#E92124" indicatorColor="#fff" indicatorDots={true} interval={5000}>
                {
                    items.map((a: any, index) => {
                        return <SwiperItem key={index}>
                            {
                                a.url ? <Navigator hoverClass="none" url={a.url}>
                                    <Image lazyLoad className="img" mode="aspectFill" src={a.img}></Image>
                                </Navigator> : <Image lazyLoad className="img" mode="aspectFill" src={a.img}></Image>
                            }
                        </SwiperItem>
                    })
                }
            </Swiper> : ""
        }
    </>
}