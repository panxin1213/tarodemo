import { View, Image, Navigator, Text } from '@tarojs/components'

import "./setting.scss"
import touxiang from '../../static/touxiang.png'

export default function Index() {

    const showAvatar = () => {

    }

    return <View className="setting-content">
        <View>
            <View className="box-one">
                <View className="avatar" onClick={showAvatar}>
                    <View className="word">头像</View>
                    <View className="Image">
                        <Image mode="aspectFill" src={touxiang}></Image>
                    </View>
                </View>
                <View className="account">
                    <View className="first">账号</View>
                    <View className="second">19188221111</View>
                </View>
                <View className="pet-name">
                    <Navigator className="nav" hoverClass="none" url="/pages/petName/petName">
                        <View className="first">昵称</View>
                        <View className="second">
                            <Text className="text">网牛人</Text>
                        </View>
                    </Navigator>
                </View>
            </View>
            <View className="account-safe">账号安全</View>
            <View className="box-two">
                <View className="bind-Telphone">
                    <Navigator className="nav" hoverClass="none" url="/pages/bindTelphone/bindTelphone">
                        <View className="first">绑定手机号</View>
                        <View className="second">
                            <Text className="text"></Text>
                        </View>
                    </Navigator>
                </View>
                <View className="bind-Telphone modify">
                    <Navigator className="nav" hoverClass="none" url="/pages/changePassword/changePassword">
                        <View className="first">修改密码</View>
                        <View className="second">
                            <Text className="text"></Text>
                        </View>
                    </Navigator>
                </View>
                <View className="bind-Telphone modify">
                    <Navigator className="nav" hoverClass="none" url="/pages/modifyPayment/modifyPayment">
                        <View className="first">修改支付密码</View>
                        <View className="second">
                            <Text className="text"></Text>
                        </View>
                    </Navigator>
                </View>
            </View>
            <View className="box-three">
                <View className="shiping-address">
                    <Navigator className="nav" hoverClass="none" url="/pages/shippingAddress/shippingAddress">
                        <View className="first">收货地址</View>
                        <View className="second">
                            <Text className="text"></Text>
                        </View>
                    </Navigator>
                </View>
            </View>
            <View className="box-three">
                <View className="shiping-address" >
                    <View className="first quit">微信解绑</View>
                </View>
                <View className="shiping-address modify" >
                    <View className="first quit">退出账号</View>
                </View>
            </View>
        </View>
    </View>
}