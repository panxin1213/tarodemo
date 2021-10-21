import { useState, useEffect } from 'react'
import { getTypeGoodist } from '../../../../common/api'
import TabSwiper from '../../../../components/tabswiper'
import Swiper3D from '../../../../components/3d_swiper';

export default function Typegood(props) {
    const [list, setlist] = useState([]);

    useEffect(() => {
        getTypeGoodist().then((data: []) => {
            const arr: any = data && data.length ? data.map((a: any) => {
                return {
                    title: a.title, element: (<Swiper3D data={a.data.map((b: any) => {
                        return { img: b.imageUrl, url: `/pages/spaceInfo/index?id=${b.goodsId}` };
                    })} />)
                };
            }) : [];
            setlist(arr);
        });
    }, [])

    return <>
        <TabSwiper data={list} />
    </>
}