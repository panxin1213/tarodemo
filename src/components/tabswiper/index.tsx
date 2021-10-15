import { useState, useEffect } from 'react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { Image, Swiper, SwiperItem, Navigator } from '@tarojs/components'

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
    }, [props.data])

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
        <AtTabs swipeable={false} scroll={list.length > 4} current={goodindex} tabList={list.map((a: any) => ({ 'title': a.title }))} onClick={goodhandleClick}>
            {
                !props.swiper && elements && elements.length ? elements.map((a: any, index) => {
                    return <AtTabsPane current={goodindex} index={index} key={index}>
                        {a}
                    </AtTabsPane>
                }) : ""
            }
        </AtTabs>{
            ((items && items.length) || (elements && elements.length && props.swiper)) ? <Swiper className="swiper" autoplay={false} current={goodindex} onChange={goodhandleClick} circular={true} duration={500} indicatorActiveColor="#E92124" indicatorColor="#fff" indicatorDots={true} interval={5000}>
                {
                    props.swiper ? elements.map((a: any, index) => {
                        return <SwiperItem key={index}>
                            {a}
                        </SwiperItem>
                    }) : items.map((a: any, index) => {
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