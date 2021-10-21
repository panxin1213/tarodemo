import { View } from '@tarojs/components'

import "./questionDetail.scss"

export default function Index() {
    const question = {
        name: "如何收取运费？",
        content: "足不出户，享受送货安装服务，最低200元起，贴心“五包服务”，全网最低价。\r\n五包服务指：包物流运货、包搬楼（7楼以下/电梯层）、包配送上门、包安装、包终身维修。如有疑问，您可以联系客服为您解答。"
    }

    return <View className="questionDetail-content">
        <View className="title">{question.name}</View>
        <View className="content">{question.content}</View>
    </View>


}