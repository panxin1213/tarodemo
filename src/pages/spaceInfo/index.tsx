import { Image, View, Swiper, SwiperItem, Video, Text, Button, Navigator, Input, RichText } from '@tarojs/components'
import Taro, { usePageScroll } from '@tarojs/taro'

import { useState, useEffect } from 'react'
import { getInfodetail, getCarNumber } from '../../common/api'
import { richText2, richText } from '../../common/util'
import TopBar from '../../components/topbar';
import videoplay from '../../static/video_play.png';
import m1 from '../../static/linghongbao.png';
import m2 from '../../static/tanChuangDelete.png';
import m3 from '../../static/quickGet.png';
import isInfo from '../../static/isInfo.png'
import shoppingCart from '../../static/shoppingCart.png'
import collect from '../../static/collect.png'
import customerService from '../../static/customerService.png'
import haveCollect from '../../static/haveCollect.png'
import './index.scss'

const serveritems = [{
    name: "商品详情",
    type: "A"
}, {
    name: "定制流程",
    type: "C"
}, {
    name: "品牌实力",
    type: "B"
}, {
    name: "服务保障",
    type: "D"
}]

const formatSeconds = (t) => {
    var e = Math.round(t), o = 0;
    return e > 60 && (o = parseInt((e / 60) + ""), e = parseInt((e % 60) + "")), "".concat(o > 9 ? (o + "") : "0" + o, "′").concat(e > 9 ? (e + "") : "0" + e, "″");
}

const explain = [{
    title: "免费量尺",
    info: "设计师免费上门量尺"
}, {
    title: "免费设计",
    info: "设计师免费出设计方案"
}, {
    title: "免费配送安装",
    info: "订单满5000元，可享受市区内电梯房免费配送安装服务"
}, {
    title: "终身维护",
    info: "5年质保，终身维护"
}];

let tvideoContext: any = "";

export default function Index(props) {
    const [showTopBar, setshowTopBar] = useState(false);
    const [swiperList, setswiperList] = useState(new Array<any>());
    const [isPlay, setisPlay] = useState(true);
    const [currentSwiper, setcurrentSwiper] = useState(0);
    const [goodsData, setgoodsData] = useState<any>({});
    const [videoTime, setvideoTime] = useState<any>(0);
    const [itemSelect, setitemSelect] = useState(0);
    const [scene, setscene] = useState('');
    const [goodsImg, setgoodsImg] = useState({
        brand: "",
        order: "",
        afterSale: ""
    });
    const [addCartMean, setaddCartMean] = useState([{
        name: "购物车",
        img: shoppingCart
    }, {
        name: Taro.getStorageSync("detail_collotion") ? "已收藏" : "收藏",
        img: Taro.getStorageSync("detail_collotion") ? haveCollect : collect
    }, {
        name: "客服",
        img: customerService
    }]);
    const [cartSize, setcartSize] = useState(0)
    const [toggle, settoggle] = useState(1)
    const [showCover, setshowCover] = useState(false)
    const [isboxTop2, setisboxTop2] = useState(false)


    useEffect(() => {
        Taro.showLoading();
        getInfodetail().then((res: any) => {
            setgoodsData(res.spaceExamples);
            let videoContext = Taro.createInnerAudioContext();
            videoContext.volume = 0, videoContext.autoplay = !0, videoContext.src = res.video || "";
            videoContext.onCanplay(function () {
                videoContext.duration, videoContext.buffered, setTimeout(function () {
                    if (1 * videoContext.duration > 0 || 1 * videoContext.buffered > 0) {
                        setvideoTime(formatSeconds(0 == videoContext.duration ? videoContext.buffered : videoContext.duration));
                    } else {
                        setvideoTime("播放");
                    }
                    videoContext.destroy();
                }, 1e3);
            });

            let images = res.spaceExamples.appletImageUrl;

            if (images) {
                setswiperList(images.split(",").map(function (t) {
                    return t;
                }));
            }


            var s = res.spaceExamples.appletScene, c = res.spaceExamples.brandPower, r = res.spaceExamples.afterSales, d = res.spaceExamples.customProcess;
            setscene(void 0 === s ? "" : richText2(s));
            //e.history(e.goodsId, 0, e.goodsData.title), 
            goodsImg.brand = void 0 === c ? "" : richText(c);
            goodsImg.afterSale = void 0 === r ? "" : richText(r);
            goodsImg.order = void 0 === d ? "" : richText(d);
            setgoodsImg({ ...goodsImg });
            setTimeout(function () {
                Taro.hideLoading();
            }, 300);
        });
        setcartSize(getCarNumber() || 0);
    }, [])





    usePageScroll(t => {
        if (t.scrollTop < 350) {
            setshowTopBar(false);
        } else {
            setshowTopBar(true);
        }
    });


    const toPlay = () => {
        tvideoContext = Taro.createVideoContext("swiperVideo"), setisPlay(false), tvideoContext.play();
    }

    const outPlay = () => {
        tvideoContext.pause();
        tvideoContext.stop();
        tvideoContext.seek();
        tvideoContext = "";
        setisPlay(true)
    }

    const showSelect2 = () => {
        setshowCover(true);
        setisboxTop2(true);
    }

    const toChange = (index) => {
        setitemSelect(index);
    }

    const mean = (e) => {
        if ("收藏" === e) {
            Taro.setStorageSync("detail_collotion", 1);
            addCartMean[1]["name"] = "已收藏";
            addCartMean[1]["img"] = haveCollect;
            setaddCartMean([...addCartMean]);
        } else if ("已收藏" === e) {
            Taro.removeStorageSync("detail_collotion")
            addCartMean[1]["name"] = "收藏";
            addCartMean[1]["img"] = collect;
            setaddCartMean([...addCartMean]);
        } else if ("购物车" === e) {

        }

    }

    const order = () => {
        settoggle(0);
    }

    const toggleUp = () => {
        settoggle(1);
    }

    const order2 = () => {

    }

    const moveHandle: any = () => {

    }

    const close2 = () => {
        setshowCover(false);
        setisboxTop2(false);
    }

    return <View className="goods data-v-c50eabf2">
        <TopBar className="data-v-c50eabf2" showTopBar={showTopBar} title="方案详情" vueId="1"></TopBar>
        <View className="swiper-box data-v-c50eabf2">
            <Swiper autoplay={false} circular={true} className="swiper data-v-c50eabf2" onChange={
                (e) => {
                    setcurrentSwiper(e.detail.current);
                }
            }>
                {

                    swiperList.map((a: any, index) => {
                        return <SwiperItem className="swiper-item data-v-c50eabf2" key={index}>
                            <Image className="data-v-c50eabf2" mode="aspectFill" src={a}></Image>
                        </SwiperItem>
                    })
                }
            </Swiper>
            <View className="indicator data-v-c50eabf2">{currentSwiper + 1 + '/' + swiperList.length}</View>
            {
                isPlay && goodsData?.video ? <View className="video_play data-v-c50eabf2" onClick={toPlay}>
                    <View className="play_icon data-v-c50eabf2" style={{ backgroundImage: `url('${videoplay}')` }} >
                        <View className="video_time data-v-c50eabf2">{videoTime}</View>
                    </View>
                </View> : ""
            }
            {
                !isPlay && goodsData?.video ? <View className="video_box data-v-c50eabf2">
                    <Video autoplay showMuteBtn className="data-v-c50eabf2" controls enableProgressGesture={false} id="swiperVideo" src={goodsData.video}></Video>
                    <View className="pause_play global_df_c data-v-c50eabf2">
                        <View className="pause_btn global_df_c data-v-c50eabf2" onClick={outPlay}>退出播放</View>
                    </View>
                </View> : ""
            }
        </View>
        <View className="info-box goods-info data-v-c50eabf2">
            <View className="price data-v-c50eabf2">￥<Text className="nowMoney data-v-c50eabf2">{goodsData.price}</Text>
            </View>
            <View className="title data-v-c50eabf2">
                <Text className="titles data-v-c50eabf2">{goodsData.title}</Text>
            </View>
        </View>
        <View className="info-box spec data-v-c50eabf2">
            <View className="row data-v-c50eabf2" onClick={showSelect2}>
                <View className="text data-v-c50eabf2">服务</View>
                <View className="content data-v-c50eabf2">
                    {
                        explain.map((item: any, index) => {
                            return <Text className="text data-v-c50eabf2" style={{ marginRight: 10 }} key={index}>{item.title}</Text>
                        })
                    }
                </View>
            </View>
        </View>
        <View className="description data-v-c50eabf2">
            <View className="items data-v-c50eabf2">
                {
                    serveritems.map((item: any, index) => {
                        return <Text onClick={(e) => { e.stopPropagation(); toChange(index) }} className={"flex1 data-v-c50eabf2" + (index === itemSelect ? ' active' : '')} key={index}>{'' + item.name + ''}</Text>
                    })
                }
            </View>
            <View className="con data-v-c50eabf2">
                <View className="con_view data-v-c50eabf2">
                    <RichText className="rich-text data-v-c50eabf2" nodes={itemSelect === 0 ? scene : (itemSelect === 1 ? goodsImg.brand : (itemSelect === 2 ? goodsImg.order : goodsImg.afterSale))}></RichText>
                </View>
            </View>
        </View>
        <View className="addCart data-v-c50eabf2">
            <View className="mean data-v-c50eabf2">
                {
                    addCartMean.map((item: any, index) => {
                        return <View className="list data-v-c50eabf2" onClick={() => { mean(item.name) }} key={index}>
                            {
                                (index !== addCartMean.length - 1) ? <View className="cart data-v-c50eabf2">
                                    <Image className="data-v-c50eabf2" mode="aspectFit" src={item.img}></Image>
                                    <Text className="cartInfo data-v-c50eabf2">{item.name}</Text>
                                    {index === 0 && cartSize !== 0 ? <Text className="cartSize data-v-c50eabf2" >{cartSize}</Text> : ""}
                                </View> : ""
                            }
                            {
                                index === addCartMean.length - 1 ? <Button className="chat data-v-c50eabf2" openType="contact">
                                    <Image className="data-v-c50eabf2" mode="aspectFit" src={item.img}></Image>
                                    <Text className="cartInfo data-v-c50eabf2">{item.name}</Text>
                                </Button> : ""
                            }
                        </View>
                    })
                }
            </View>
            <View className="btn data-v-c50eabf2">
                <View className="btns data-v-c50eabf2" onClick={order}>立即预约</View>
            </View>
        </View>
        <View className={"data-v-c50eabf2 modal" + (toggle === 0 ? ' actives' : '')}>
            <View className="modal-content data-v-c50eabf2">
                <Navigator className="modal-img data-v-c50eabf2" hoverClass="none" url="#">
                    <Image lazyLoad className="bgImg data-v-c50eabf2" mode="aspectFill" src={m1}></Image>
                </Navigator>
                <View className="modal-close data-v-c50eabf2" onClick={toggleUp}>
                    <Image lazyLoad className="bgImg data-v-c50eabf2" mode="aspectFill" src={m2}></Image>
                </View>
                <View className="modal-body data-v-c50eabf2">
                    <Input className="uni-Input data-v-c50eabf2" cursorSpacing={140} placeholder="您的姓名" />
                    <Input className="uni-Input data-v-c50eabf2" cursorSpacing={140} placeholder="您的联系方式" />
                </View>
                <View className="quickGet data-v-c50eabf2" onClick={order2}>
                    <Image lazyLoad className="bgImg data-v-c50eabf2" mode="aspectFill" src={m3}></Image>
                </View>
            </View>
        </View>
        {showCover ? <View className="cover data-v-c50eabf2"></View> : ""}
        <View className={'state data-v-c50eabf2' + (isboxTop2 ? " boxTop2" : "")} catchMove={moveHandle}>
            <View className="closeCover data-v-c50eabf2" onClick={close2}></View>
            <View className="box data-v-c50eabf2">
                <View className="close data-v-c50eabf2" onClick={close2}>×</View>
                <View className="title data-v-c50eabf2">说明</View>
                <View className="list data-v-c50eabf2">
                    {
                        explain.map((item, index) => {
                            return <View className="listItem data-v-c50eabf2" key={index}>
                                <View className="itemImg data-v-c50eabf2">
                                    <Image className="data-v-c50eabf2" mode="aspectFit" src={isInfo}></Image>{'' + item.title + ''}</View>
                                <View className="itemKws data-v-c50eabf2">{item.info}</View>
                            </View>
                        })
                    }
                </View>
            </View>
        </View>
    </View >


}