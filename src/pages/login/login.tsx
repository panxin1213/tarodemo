import { View, Text, Image, Navigator, Button, Input, Label } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { useState, useEffect } from 'react'

import wechat from '../../static/wechat.png'
import changeMobile02 from '../../static/changeMobile02.png'
import changeMobile01 from '../../static/changeMobile01.png'
import changePwd02 from '../../static/changePwd02.png'
import changePwd01 from '../../static/changePwd01.png'
import change from '../../static/change.png'
import person from '../../static/person.png'
import codeImg from '../../static/codeImg.png'
import findImageCode from '../../static/findImageCode.jpg'
import yanzhengma from '../../static/ZC-yanzhengma.png'

import './login.scss'


const list = [{
    title: "微信登录"
}, {
    title: "手机账号登录"
}];

export default function Login() {
    const [currentindex, setcurrentindex] = useState(0)
    const [selectIndex, setselectIndex] = useState(0)
    const [rotate, setrotate] = useState(-50)


    const handleClick = (e) => {
        setcurrentindex(e);
    }

    const getphonenumber = () => {

    }

    const weixinBack = () => {

    }

    const selectBox2 = () => {
        setrotate(rotate + 180);
        setselectIndex(0 === selectIndex ? 1 : 0);
    }

    return <View className="login_content">
        <View className="topLine"></View>
        <AtTabs swipeable={false} current={currentindex} tabList={list.map((a: any) => ({ 'title': a.title }))} onClick={handleClick}>
            <AtTabsPane current={currentindex} index={0} key={0}>
                <View>
                    <View className="login-wechat-box animated">
                        <Button className="img" onClick={getphonenumber} openType="getPhoneNumber">
                            <Image className="login_img" mode="aspectFit" src={wechat}></Image>
                        </Button>
                        <View className="btn view">
                            <Button className="button" onClick={getphonenumber} openType="getPhoneNumber">微信授权</Button>
                        </View>
                        <View className="back-btn view">
                            <Button className="button" onClick={weixinBack} type="primary">取消</Button>
                        </View>
                    </View>
                </View>
            </AtTabsPane>
            <AtTabsPane current={currentindex} index={1} key={1}>
                <View>
                    <View className="changeBox">
                        <View className="box lf" onClick={() => {
                            setselectIndex(0);
                        }}>
                            <View className="changeImg">
                                <View className={'imgList' + (selectIndex === 0 ? ' select' : '')}>
                                    <Image className="showImg" mode="aspectFit" src={changeMobile02}></Image>
                                    <Image className="showImg" mode="aspectFit" src={changeMobile01}></Image>
                                </View>
                            </View>
                        </View>
                        <View className="box rt" onClick={() => {
                            setselectIndex(1);
                        }}>
                            <View className="changeImg">
                                <View className={'imgList' + (selectIndex === 1 ? ' select' : '')}>
                                    <Image className="showImg" mode="aspectFit" src={changePwd02}></Image>
                                    <Image className="showImg" mode="aspectFit" src={changePwd01}></Image>
                                </View>
                            </View>
                        </View>
                        <Image className="rotate" onClick={selectBox2} mode="aspectFill" src={change} style={{ transform: 'rotate(' + rotate + 'deg)' }}></Image>
                    </View>
                    {selectIndex === 0 ? <View>
                        <View className="with-fun">
                            <View className="an person">
                                <Image mode="aspectFill" src={person}></Image>
                            </View>
                            <View className="bn">
                                <Input className="uni-Input" placeholder="请输入手机号码" placeholderStyle="color:#999999;font-size:24upx;"></Input>
                            </View>
                            <View className="cn uni-icon-clear">
                                {/* <Image mode="aspectFill" src="{{$root.m1}}" wx:if="{{showClearTel}}"></Image> */}
                            </View>
                        </View>
                        <View className="with-fun">
                            <View className="an person">
                                <Image mode="aspectFill" src={codeImg}></Image>
                            </View>
                            <View className="bn">
                                <Input className="uni-Input" placeholder="图形验证码" placeholderStyle="color:#999999;font-size:24upx;"></Input>
                            </View>
                            <View className="cn uni-icon-clear codeImg">
                                <Image mode="aspectFill" src={findImageCode}></Image>
                            </View>
                        </View>
                        <View className="with-fun lastFun">
                            <View className="an person">
                                <Image mode="aspectFill" src={yanzhengma}></Image>
                            </View>
                            <View className="bn">
                                <Input className="uni-Input" placeholder="手机验证码" placeholderStyle="color:#999999;font-size:24upx;"></Input>
                            </View>
                            <View className="cn code">
                                <View className="getmodBtn data-v-35154194">
                                    <Label className="_span data-v-35154194">获取验证码</Label>
                                </View>
                            </View>
                        </View>
                        <View className="finally_Login">登录</View>
                        <View className="finally_back">取消</View>
                    </View> : <View>
                        <View className="with-fun">
                            <View className="an person">
                                <Image mode="aspectFill" src={person}></Image>
                            </View>
                            <View className="bn">
                                <Input className="uni-Input" placeholder="请输入CRM账号" placeholderStyle="color:#999999;font-size:24upx;"></Input>
                            </View>
                            <View className="cn uni-icon-clear">
                                {/* <Image mode="aspectFill" src="{{$root.m4}}" wx:if="{{showClearName}}"></Image> */}
                            </View>
                        </View>
                        <View className="with-fun">
                            <View className="an person">
                                <Image mode="aspectFill" src={codeImg}></Image>
                            </View>
                            <View className="bn">
                                <Input className="uni-Input" password placeholder="请输入密码" placeholderStyle="color:#999999;font-size:24upx;"></Input>
                            </View>
                            <View className="cn uni-icon-clear eye">
                                {/* <Image bindtap="__e" data-event-opts="{{[ [ 'tap',[ [ 'changePassword',['$event'] ] ] ] ]}}" mode="aspectFill" src="{{$root.m5}}" wx:if="{{showClearPass}}"></Image> */}
                            </View>
                        </View>
                        <View className="finally_Login">登录</View>
                        <View className="finally_back">取消</View>
                    </View>
                    }
                    <View className="finally_href">
                        <Navigator url="/pages/register/register">
                            <Text>新用户注册</Text>
                        </Navigator>
                        <Navigator url="/pages/forgetPassword/forgetPassword">
                            <Text>忘记密码</Text>
                        </Navigator>
                    </View>
                </View>
            </AtTabsPane>
        </AtTabs>
    </View>
}