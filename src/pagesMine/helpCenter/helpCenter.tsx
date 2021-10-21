import { View, Image, Navigator, Textarea } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { getQuestionCategoryList } from '../../common/api'

import "./helpCenter.scss"
import PJxiangji from '../../static/PJ-xiangji.png'

const tabList = [{
    name: "常见问题"
}, {
    name: "意见反馈"
}];

export default function Index() {
    const [tabcr, settabcr] = useState(0)
    const [probl, setprobl] = useState(0)
    const [proList, setproList] = useState<any>([])
    const [quantityList, setquantityList] = useState([])
    const [imageList, setimageList] = useState<any>([])
    const [content, setcontent] = useState("")

    useEffect(() => {
        getQuestionCategoryList().then((res: any) => {
            setproList(res);
        })
    }, []);

    useEffect(() => {
        if (proList.length) {
            setquantityList(proList[probl].data);
        }
    }, [proList, probl])

    const tabChange = (index) => {
        settabcr(index)
    }

    const tab = (index) => {
        setprobl(index);
    }

    const previewImage = (e) => {
        var n = e.target.dataset.src;
        Taro.previewImage({
            current: n,
            urls: imageList
        });
    }

    const deleteImg = (e) => {
        var n = e.target.dataset.src;
        Taro.showModal({
            title: "提示",
            content: "确认删除吗",
            success: function (t) {
                t.confirm ? setimageList(imageList.filter(function (t) {
                    return t != n;
                })) : t.cancel;
            }
        });
    }

    const chooseImage = () => {
        if (imageList.length > 8) {
            Taro.showToast({
                title: "最多只能传9张图片",
                icon: "none",
                duration: 2000
            });
            return;
        }

        Taro.chooseImage({
            count: 9 - imageList.length,
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
            success: function (t) {
                setimageList(imageList.concat(t.tempFilePaths));
            }
        });
    }

    const inForm = () => {
        Taro.showToast({
            title: "反馈成功",
            duration: 2000,
            success: () => {
                setimageList([]);
                setcontent("");
            }
        })
    }
    console.log('imageList', imageList);

    return <View className="helpCenter-content">
        <View className="topLine"></View>
        <View className="tab">
            {
                tabList.map((item: any, index) => {
                    return <View className="item" onClick={() => {
                        tabChange(index)
                    }} key={index}>
                        <View className={"second" + (index === tabcr ? ' cur' : '')}>{'' + item.name + ''}<View className="view"></View>
                        </View>
                    </View>
                })
            }
        </View>
        {tabcr === 0 ? <View>
            <View className="problems">
                <View className="title">问题类型：</View>
                <View className="content">
                    {
                        proList.map((item: any, index) => {
                            return <View className={'item' + (index == probl ? ' active' : '')} onClick={() => {
                                tab(index);
                            }} key={index}>{item.name}</View>
                        })
                    }
                </View>
            </View>
            <View className="kindsProblems">
                {
                    quantityList.map((item: any, index) => {
                        return <View className="kind-item" key={index}>
                            <Navigator hoverClass="none" url={'/pagesMine/questionDetail/questionDetail?id=' + item.id}>{item.name}</Navigator>
                        </View>
                    })
                }
            </View>
        </View> : <View>
            <View className="opinion">
                <View className="content">
                    <Textarea className="text-area" value={content} onInput={(e) => { setcontent(e.detail.value) }} maxlength={400} placeholder="欢迎提出意见和建议，我们会认真对待您的反馈，感谢您的关注和支持！" placeholderStyle="color:#cccccc;font-size:22upx"></Textarea>
                </View>
            </View>
            <View className="uni-common-mt">
                <View className="uni-list list-pd">
                    <View className="uni-list-cell cell-pd">
                        <View className="uni-uploader">
                            <View className="uni-uploader-body">
                                <View className="uni-uploader__files">
                                    {
                                        imageList.map((image: any, index) => {
                                            return <View className="uni-uploader__file" key={index}>
                                                <Image className="uni-uploader__img" onClick={previewImage} data-src={image} src={image}></Image>
                                                <View className="error" onClick={deleteImg} data-src={image}>×</View>
                                            </View>
                                        })
                                    }
                                    <View className="uni-uploader__input-box">
                                        <View className="uni-uploader__input">
                                            <Image onClick={chooseImage} mode="aspectFill" src={PJxiangji}></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="inform" onClick={inForm}>提交</View>
        </View>
        }
    </View>
}