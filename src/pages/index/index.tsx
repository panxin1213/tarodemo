import { View, Text, Image, Swiper, SwiperItem, Navigator, Button } from '@tarojs/components'
import { useState, useEffect } from 'react'
import './index.scss'
import sousuo from '../../static/SY-vav-sousuo.png';
import { getCarouselList, getHotList } from '../../common/api'
import m0 from '../../static/SY-fl-dingzhi.png';
import m1 from '../../static/SY-fl-ruzhu.png';
import m2 from '../../static/SY-fl-jiadian.png';
import m3 from '../../static/SY-fl-sheji.png';
import m4 from '../../static/btn_sharing@2x.png';
import m5 from '../../static/btn_order@2x.png';
import m6 from '../../static/btn_live@2x.png';
import m7 from '../../static/btn_consult@2x.png';
import m8 from '../../static/SY-gengduo-01.png';


export default function Index() {
  const [showSearchBar, setshowSearchBar] = useState(true)
  const [autoplay, setautoplay] = useState(true)
  const [carouselList, setcarouselList] = useState([])
  const [hotlist, sethotlist] = useState([])

  const swiperClick = (record: any) => {

  }

  useEffect(() => {
    getCarouselList().then((a: []) => {
      setcarouselList(a);
    });

    getHotList().then((a: []) => {
      sethotlist(a);
    });

  }, []);

  return (
    <View className="index-container">
      <View className={'mp-search-box ' + (showSearchBar ? 'show' : '')}>
        <View className="mp-search-input">
          <View className="ser-input">搜索你想要的好物</View>
          <Image className="search_img" mode="aspectFit" src={sousuo}></Image>
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
          <View className="index-nav-box-view">
            <Navigator hoverClass="none" url="/pages/spaceCustomization/spaceCustomization">
              <Image lazyLoad mode="aspectFill" src={m0}></Image>
              <Text className="index-nav-box-view-text">空间定制</Text>
            </Navigator>
          </View>
          <View className="index-nav-box-view">
            <Navigator hoverClass="none" url="/pages/housing/housing">
              <Image lazyLoad mode="aspectFill" src={m1}></Image>
              <Text className="index-nav-box-view-text">拎包入住</Text>
            </Navigator>
          </View>
          <View className="index-nav-box-view">
            <Navigator hoverClass="none" url="/pages/appliances/appliances">
              <Image lazyLoad mode="aspectFill" src={m2}></Image>
              <Text className="index-nav-box-view-text">家居家电</Text>
            </Navigator>
          </View>
          <View className="index-nav-box-view">
            <Image lazyLoad mode="aspectFill" src={m3}></Image>
            <Text className="index-nav-box-view-text">0元设计</Text>
          </View>
        </View>
        <View className="index-nav-box">
          <View className="index-nav-box-view">
            <View>
              <Image lazyLoad mode="aspectFill" src={m4}></Image>
              <Text className="index-nav-box-view-text">分享家</Text>
            </View>
          </View>
          <View className="index-nav-box-view">
            <Image lazyLoad mode="aspectFill" src={m5}></Image>
            <Text className="index-nav-box-view-text">预约定制</Text>
          </View>
          <View className="index-nav-box-view">
            <View>
              <Image lazyLoad mode="aspectFill" src={m6} className="miWA"></Image>
              <Text className="index-nav-box-view-text">分会场</Text>
            </View>
          </View>
          <View className="index-nav-box-view">
            <Image lazyLoad mode="aspectFill" src={m7} className="miWA"></Image>
            <Button className="contact" openType="contact">
              <Text className="index-nav-box-view-text">在线咨询</Text>
            </Button>
          </View>
        </View>
      </View>
      {
        hotlist && hotlist.length && <View className="hotPackage">
          <Navigator className="project-Title" hoverClass="none" url="/pages/hotProduct/hotProduct">
            <Text>热销套餐</Text>
            <Image lazyLoad className="on" mode="aspectFill" src={m8}></Image>
          </Navigator>
          <View className="hotContent">
            {
              hotlist.map((item: any, index) => {
                return <View className="hotContent-children" key={index}>
                  <Navigator hoverClass="none" url={'/pagesB/spaceInfo_hot/spaceInfo_hot?goodsId=' + item.goodsId}>
                    <Image lazyLoad mode="aspectFit" src={item.imageUrl}></Image>
                    <View className="title">{item.title}</View>
                    <View className="hot-moery">
                      <Text>{'¥' + item.price}</Text>
                      <Text>
                        <View className="_del"></View>
                      </Text>
                    </View>
                    <View className="hot-qianggou">立即抢购</View>
                  </Navigator>
                </View>
              })
            }
          </View>
        </View>
      }

    </View >
  )
}
