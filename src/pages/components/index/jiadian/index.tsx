import { useState, useEffect } from 'react'
import { getJiadiangoods } from '../../../../common/api'
import TabSwiper from '../../../../components/tabswiper'
import { View, Text, Image, Navigator } from '@tarojs/components'

export default function Jiadian(props) {
    const [list, setlist] = useState([]);

    useEffect(() => {
        getJiadiangoods().then((data: []) => {
            const arr: any = data && data.length ? data.map((a: any) => {
                return {
                    title: a.title, element: (
                        <View className="uni-product-list">
                            {
                                a.data.map((product: any, index) => {
                                    const url = (product.goodsType === 0 ? "/pages/spaceInfo/index?id=" : (product.goodsType === 1 ? "/pages/spaceInfo/index?id=" : "/pages/spaceInfo/index?id=")) + product.goodsId;
                                    return <View className="uni-product" key={index}>
                                        <View className="image-view">
                                            <Navigator hoverClass="none" url={url}>
                                                <Image lazyLoad className="uni-product-image" mode="aspectFit" src={product.imageUrl}></Image>
                                            </Navigator>
                                        </View>
                                        <View className="uni-product-title">{product.title}</View>
                                        <View className="uni-product-content">{product.goodsName}</View>
                                        <View className="uni-product-price">
                                            <Text className="uni-product-price-favour" hidden={!(product.price != '')}>
                                                {'￥' + product.price}
                                            </Text>
                                        </View>
                                    </View>
                                })
                            }
                        </View>
                    )
                };
            }) : [];
            setlist(arr);
        });
    }, [])

    return <>
        <TabSwiper data={list} swiper={true} />
    </>
}