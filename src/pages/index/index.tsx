import { View, Text, Image, Swiper, SwiperItem, Navigator, Button } from '@tarojs/components'
import { useState, useEffect } from 'react'
import './index.scss'
import sousuo from '../../static/SY-vav-sousuo.png';
import { getCarouselList } from '../../common/api'


export default function Index() {
  const [showSearchBar, setshowSearchBar] = useState(true)
  const [autoplay, setautoplay] = useState(true)
  const [carouselList, setcarouselList] = useState([])

  const swiperClick = (record: any) => {

  }

  useEffect(() => {
    getCarouselList().then((a: []) => {
      setcarouselList(a);
    });

  }, []);

  return (
    <View className="index-container">
      <View className={'mp-search-box ' + (showSearchBar ? 'show' : '')}>
        <View className="mp-search-input">
          <View className="ser-input">搜索你想要的好物</View>
          <Image className="search_img" mode="aspectFill" src={sousuo}></Image>
        </View>
      </View>
      <View className="carousel-section">
        <View className="page-section">
          <View className="page-section-spacing">
            <Swiper autoplay={autoplay} circular={true} className="swiper" duration={500} indicatorActiveColor="#E92124" indicatorColor="#fff" indicatorDots={true} interval={5000}>
              {
                carouselList.map((a: any, index) => {
                  return <SwiperItem key={index} className="Navigator" onClick={swiperClick}>
                    <Image lazyLoad className="img" mode="aspectFill" src={a.pic}></Image>
                  </SwiperItem>
                })
              }
            </Swiper>
          </View>
        </View>
      </View>

      <View className="index-nav">
        <View className="index-nav-box">
          <View>
            <Navigator hoverClass="none" url="/pages/spaceCustomization/spaceCustomization">
              <Image lazyLoad mode="aspectFill" src="{{$root.m0}}"></Image>
              <Text>空间定制</Text>
            </Navigator>
          </View>
          <View>
            <Navigator hoverClass="none" url="/pages/housing/housing">
              <Image lazyLoad mode="aspectFill" src="{{$root.m1}}"></Image>
              <Text>拎包入住</Text>
            </Navigator>
          </View>
          <View>
            <Navigator hoverClass="none" url="/pages/appliances/appliances">
              <Image lazyLoad mode="aspectFill" src="{{$root.m2}}"></Image>
              <Text>家居家电</Text>
            </Navigator>
          </View>
          <View>
            <Image lazyLoad mode="aspectFill" src="{{$root.m3}}"></Image>
            <Text>0元设计</Text>
          </View>
        </View>
        <View className="index-nav-box">
          <View>
            <View>
              <Image lazyLoad mode="aspectFill" src="{{$root.m4}}"></Image>
              <Text>分享家</Text>
            </View>
          </View>
          <View>
            <Image lazyLoad mode="aspectFill" src="{{$root.m5}}"></Image>
            <Text>预约定制</Text>
          </View>
          <View>
            <View>
              <Image lazyLoad mode="aspectFill" src="{{$root.m6}}"></Image>
              <Text>分会场</Text>
            </View>
          </View>
          <View>
            <Image lazyLoad mode="aspectFill" src="{{$root.m7}}"></Image>
            <Button className="contact" openType="contact">
              <Text>在线咨询</Text>
            </Button>
          </View>
        </View>
      </View>

    </View >
  )
}
