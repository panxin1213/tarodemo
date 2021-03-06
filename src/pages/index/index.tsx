import { View, Text, Image, Swiper, SwiperItem, Navigator, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import './index.scss'
import sousuo from '../../static/SY-vav-sousuo.png';
import { getCarouselList, getHotList, getGoodist } from '../../common/api'
import m0 from '../../static/SY-fl-dingzhi.png';
import m1 from '../../static/SY-fl-ruzhu.png';
import m2 from '../../static/SY-fl-jiadian.png';
import m3 from '../../static/SY-fl-sheji.png';
import m4 from '../../static/btn_sharing@2x.png';
import m5 from '../../static/btn_order@2x.png';
import m6 from '../../static/btn_live@2x.png';
import m7 from '../../static/btn_consult@2x.png';
import m8 from '../../static/SY-gengduo-01.png';

import TabSwiper from '../../components/tabswiper'
import Typegood from '../components/index/typegood'
import Jiadian from '../components/index/jiadian'
import Huodong from '../components/index/huodong'
import Footer from '../components/footer';

export default function Index() {
  const showSearchBar = (true)
  const autoplay = (true)
  const [carouselList, setcarouselList] = useState([])
  const [hotlist, sethotlist] = useState([])
  const [goodlist, setgoodlist] = useState([])

  const swiperClick = (record: any) => {

  }

  useEffect(() => {
    getCarouselList().then((a: []) => {
      setcarouselList(a);
    });

    getHotList().then((a: []) => {
      sethotlist(a);
    });

    getGoodist().then((a: []) => {
      const arr: any = a.map((a: any) => {
        return { title: a.title, img: a.imageUrl, url: '/pages/spaceInfo/index?id=' + a.goodsId }
      });
      setgoodlist(arr);
    });


  }, []);

  const phoneStoreBind = () => {
    Taro.navigateTo({
      url: '/pages/selectStore/selectStore'
    })
  }

  const Binding = (n) => {
    "book" == n ? phoneStoreBind() : "video" == n ? Taro.navigateToMiniProgram({
      appId: "wx92d650b253f8f2e3",
      path: "pages/index/index?zbid=1274844423",
      extraData: {},
      success: function (t) {
        console.log("upToTap", t);
      }
    }) : "share" == n && Taro.navigateToMiniProgram({
      appId: "wx10a594a813a30a7c",
      path: "pages/index/index?orgId=3FO4K4U35TW3",
      extraData: {},
      success: function (t) {
        console.log("upToTap", t);
      }
    });
  }

  return (
    <View className="index-container">
      <View className={'mp-search-box ' + (showSearchBar ? 'show' : '')}>
        <View className="mp-search-input">
          <View className="ser-input">????????????????????????</View>
          <Image className="search_img" mode="aspectFit" src={sousuo}></Image>
        </View>
      </View>
      <View className="carousel-section">
        <View className="page-section">
          <View className="page-section-spacing">
            <Swiper autoplay={autoplay} circular={true} className="swiper" duration={500} indicatorActiveColor="#E92124" indicatorColor="#fff" indicatorDots={true} interval={5000}>
              {
                carouselList.map((a: any, index) => {
                  return <SwiperItem key={index} className="navigator" onClick={swiperClick}>
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
              <Text className="index-nav-box-view-text">????????????</Text>
            </Navigator>
          </View>
          <View className="index-nav-box-view">
            <Navigator hoverClass="none" url="/pages/housing/housing">
              <Image lazyLoad mode="aspectFill" src={m1}></Image>
              <Text className="index-nav-box-view-text">????????????</Text>
            </Navigator>
          </View>
          <View className="index-nav-box-view">
            <Navigator hoverClass="none" url="/pages/appliances/appliances">
              <Image lazyLoad mode="aspectFill" src={m2}></Image>
              <Text className="index-nav-box-view-text">????????????</Text>
            </Navigator>
          </View>
          <View className="index-nav-box-view" onClick={
            () => {
              Taro.navigateTo({
                url: "/pages/active/index?path=".concat(encodeURIComponent("https://www.snimay.com/activity/details-283.shtml?source=1069&hd_name=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%93%E9%A2%98"), "&title=", "0?????????")
              });
            }
          }>
            <Image lazyLoad mode="aspectFill" src={m3}></Image>
            <Text className="index-nav-box-view-text">0?????????</Text>
          </View>
        </View>
        <View className="index-nav-box">
          <View className="index-nav-box-view" onClick={
            () => { Binding("share") }
          }>
            <View>
              <Image lazyLoad mode="aspectFill" src={m4}></Image>
              <Text className="index-nav-box-view-text">?????????</Text>
            </View>
          </View>
          <View className="index-nav-box-view" onClick={
            () => { Binding("book") }
          }>
            <Image lazyLoad mode="aspectFill" src={m5}></Image>
            <Text className="index-nav-box-view-text">????????????</Text>
          </View>
          <View className="index-nav-box-view" onClick={
            () => { Binding("video") }
          }>
            <View>
              <Image lazyLoad mode="aspectFill" src={m6} className="miWA"></Image>
              <Text className="index-nav-box-view-text">?????????</Text>
            </View>
          </View>
          <View className="index-nav-box-view">
            <Image lazyLoad mode="aspectFill" src={m7} className="miWA"></Image>
            <Button className="contact" openType="contact">
              <Text className="index-nav-box-view-text">????????????</Text>
            </Button>
          </View>
        </View>
      </View>
      {
        hotlist && hotlist.length && <View className="hotPackage">
          <Navigator className="project-Title" hoverClass="none" url="/pages/hotProduct/hotProduct">
            <Text>????????????</Text>
            <Image lazyLoad className="on" mode="aspectFill" src={m8}></Image>
          </Navigator>
          <View className="hotContent">
            {
              hotlist.map((item: any, index) => {
                return <View className="hotContent-children" key={index}>
                  <Navigator hoverClass="none" url={'/pages/spaceInfo/index?id=' + item.goodsId}>
                    <Image lazyLoad mode={process.env.TARO_ENV === 'h5' ? "aspectFit" : "aspectFill"} src={item.imageUrl}></Image>
                    <View className="title">{item.title}</View>
                    <View className="hot-moery">
                      <Text>{'??' + item.price}</Text>
                      <Text>
                        <View className="_del"></View>
                      </Text>
                    </View>
                    <View className="hot-qianggou">????????????</View>
                  </Navigator>
                </View>
              })
            }
          </View>
        </View>
      }
      {
        goodlist && goodlist.length && <View className="projectTab">
          <Navigator className="project-Title" hoverClass="none" url="/pages/spaceCustomization/spaceCustomization">
            <Text>????????????</Text>
            <Image lazyLoad className="on" mode="aspectFill" src={m8}></Image>
          </Navigator>
          <TabSwiper data={goodlist} />
          {/* <wuc-tab textFlex backgroundColor="#fff" bind:__l="__l" bind:updateTabCur="__e" data-event-opts="{{[ [ '^updateTabCur',[ [ '__set_sync',['$0','TabCur','$event'],[''] ] ] ],[ '^updateTabCur',[ [ '__set_sync',['$0','TabCur','$event'],[''] ] ] ] ]}}" fontColor="#333" selectBottom="10rpx" selectColor="#E92124" selectwidth="30rpx" tabList="{{tabList}}" tabCur="{{TabCur}}" vueId="1"></wuc-tab>
        <swiper bindchange="__e" circular="{{true}}" className="swiper" current="{{TabCur}}" data-event-opts="{{[ [ 'change',[ [ 'swiperChange',['$event'] ] ] ] ]}}" duration="300" indicatorActiveColor="rgba(255,255,255,0)" indicatorColor="rgba(255,255,255,0)">
          <swiper-item wx:for="{{spaceList}}" wx:key="index">
            <Navigator className="Navigator-hover" hoverClass="none" url="{{'/pagesB/spaceInfo/spaceInfo?goodsId='+item.goodsId}}">
              <Image lazyLoad mode="aspectFill" src="{{item.appletImageUrl}}"></Image>
            </Navigator>
          </swiper-item>
        </swiper> */}
        </View>
      }
      <View className="house-ruzhu">
        <Navigator className="project-Title" hoverClass="none" url="/pages/housing/housing">
          <Text>????????????</Text>
          <Image lazyLoad className="on" mode="aspectFill" src={m8}></Image>
        </Navigator>
        <Typegood />
      </View>

      <View className="home-dianqi">
        <Navigator className="project-Title" hoverClass="none" url="/pages/appliances/appliances">
          <Text>????????????</Text>
          <Image lazyLoad className="on" mode="aspectFill" src={m8}></Image>
        </Navigator>
        <View className="home-content">
          <Jiadian />
        </View>
      </View>

      <View className="new-activity">
        <Navigator className="activity-Title" hoverClass="none" url="/pages/activityList/activityList">
          <Text>????????????</Text>
          <Image lazyLoad className="on" mode="aspectFill" src={m8}></Image>
        </Navigator>
        <Huodong />
      </View>

      <Footer />

    </View >
  )
}
