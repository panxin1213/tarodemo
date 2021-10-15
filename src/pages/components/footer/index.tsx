import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import "./index.scss"

export default function Footer(props) {
    const phone = '18188882222';

    const takePhone = (phone) => {
        Taro.makePhoneCall({
            phoneNumber: phone,
            success: function (n) {
                console.log('takePhone', n);
            }
        });
    }

    const callphone = () => {
        Taro.getSystemInfo({
            success: function (o) {
                "android" === o.platform ? Taro.showModal({
                    title: "是否拨打电话",
                    content: phone,
                    success: function (n) {
                        n.confirm ? takePhone(phone) : n.cancel;
                    }
                }) : takePhone(phone);
            }
        });
    }

    return <View>
        <View className="bottom">
            <View className="first">
                <View className="a" onClick={callphone}>全国服务热线 :<Text className="a_text">{phone}</Text>
                </View>
            </View>
            <View className="second">{'Copyright © ' + new Date().getFullYear() + ' 粤ICP备14016448号广州诗尼曼家居股份有限公司'}</View>
        </View>
    </View>

}