import { useState, useEffect } from 'react'
import { Image, Swiper, SwiperItem, Navigator } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Swiper3D(props) {
    const [list, setlist] = useState([]);
    const [nowIndex, setnowIndex] = useState(0);
    const [swiperH, setswiperH] = useState('')

    useEffect(() => {
        const data: [] = props.data ?? [];
        setlist(data);
    }, [])

    if (!list || !list.length) {
        return <></>;
    }

    const getHeight = (e) => {
        var winWid = Taro.getSystemInfoSync().windowWidth - 2 * 50;//获取当前屏幕的宽度
        var imgh = e.detail.height;//图片高度
        var imgw = e.detail.width;//图片宽度
        var sH = winWid * imgh / imgw + "px"
        setswiperH(sH);
    }

    const swiperChange = (e) => {
        setnowIndex(e.detail.current);
    }

    const getImage = (index, item) => {
        return <Image onLoad={getHeight} style={`height:${swiperH}`} className={`swiper-img ${nowIndex === index ? "swiper-active" : ""}`} src={item.img}></Image>
    }

    return <>
        <Swiper
            previousMargin='50px'
            nextMargin='50px'
            onChange={swiperChange}
            className='swiper3d'
            circular
            interval={2000}
            style={`height:${swiperH}`}
            autoplay={false}>
            {list.map((item: any, index) => {
                return <SwiperItem key={index}>
                    {
                        item.url ? <Navigator hoverClass="none" url={item.url}>{getImage(index, item)}</Navigator> : getImage(index, item)
                    }
                </SwiperItem>
            })}
        </Swiper>
    </>
}