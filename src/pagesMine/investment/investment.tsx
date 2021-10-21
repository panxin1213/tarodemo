import { View, Text, Image, Input, Button } from '@tarojs/components'
import { useState } from 'react';

import './investment.scss'
import banner from '../../static/banner.png'
import competitiveness from '../../static/competitiveness.png'
import creative from '../../static/creative.png'
import product from '../../static/product.png'
import huanbao from '../../static/huanbao.png'
import yingxiao from '../../static/yingxiao.png'
import qudao from '../../static/qudao.png'
import research from '../../static/research.png'
import college from '../../static/college.png'
import sell from '../../static/sell.png'
import qoute from '../../static/quote.png'

import t1 from '../../static/01.png'
import t2 from '../../static/02.png'
import t3 from '../../static/03.png'
import t4 from '../../static/04.png'
import t5 from '../../static/05.png'
import t6 from '../../static/06.png'
import t7 from '../../static/07.png'
import t8 from '../../static/08.png'
import t9 from '../../static/09.png'
import t10 from '../../static/10.png'
import background from '../../static/background.png'
import processIcon from '../../static/processIcon.png'


const btn_list = [{
    title: "诗尼曼全屋定制"
}, {
    title: "诗尼曼橱柜"
}, {
    title: "诗尼曼门窗"
}];

const infos = [
    [{
        icon: competitiveness,
        title: "竞争力",
        content: "诗尼曼严守产品质量关，经过16年的口碑积累，已成为行业具强势竞争力和影响力的品牌。"
    }, {
        icon: creative,
        title: "创造力",
        content: "诗尼曼在全国布局 3 大智能生产基地，标配德国豪迈智造设备，与意大利百隆、德国海蒂诗等战略合作，确保匠心品质。"
    }, {
        icon: product,
        title: "产品力",
        content: "诗尼曼拥有全屋定制系统、厨房系统、智能门窗系统等全品类大家居产品，融合 O2O+ 整装，形成全方位的大家居生态格局。"
    }, {
        icon: huanbao,
        title: "环保力",
        content: "诗尼曼恪守绿色环保，早在2012年，诗尼曼便和万华板业达成战略合作伙伴关系，在业内较早采用无甲醛添加的禾香板。"
    }, {
        icon: yingxiao,
        title: "营销力",
        content: "明星代言助力品牌升级跨越，买衣柜送橱柜独具品牌战略优势，明星签售助阵营销屡创佳绩，品牌广告纵贯海陆空强势投放。"
    }, {
        icon: qudao,
        title: "渠道力",
        content: "诗尼曼1500 +家专卖店，通过官方商城、京东、天猫、新媒体平台及线下整装体验馆全矩阵引流，为经销商全面赋能。"
    }],
    [{
        icon: competitiveness,
        title: "竞争力",
        content: "诗尼曼全屋定制扎根定制衣柜行业16年，全国 1000余门店，为橱柜合作商提供成熟可复制的盈利模式。问鼎成功，快人一步！"
    }, {
        icon: creative,
        title: "创造力",
        content: "诗尼曼在全国布局三大智能生产基地，标配德国豪迈智造设备，打造智能化、信息化和个性化的工业4.0“未来工厂”；在全球严选原材、配件供应商，与意大利百隆、德国海蒂诗等展开战略合作，确保匠心品质。"
    }, {
        icon: product,
        title: "产品力",
        content: "诗尼曼厨房系统打破传统设计理念，将人体工程学的原理融入传统造型中，充分考虑厨房生活的实际需要，科学合理设计厨房内每一寸空间，实现空间的高效利用，让下厨变得轻松舒适。"
    }, {
        icon: huanbao,
        title: "环保力",
        content: "诗尼曼恪守绿色环保，采用环保石英石台面，努力为家有老人、家有小孩、家有孕妇、家有新婚夫妇的四类家庭创造健康舒适的厨房环境。"
    }, {
        icon: yingxiao,
        title: "营销力",
        content: "买衣柜送橱柜独具品牌战略优势，明星签售助阵营销屡创佳绩，全国微信爆破带动业绩强势增长，品牌广告纵贯海陆空强势高频投放。。"
    }, {
        icon: qudao,
        title: "渠道力",
        content: "诗尼曼1500+家专卖店覆盖全国30余个省、市、自治区，通过官方商城、京东、天猫等线上零售渠道，微信、抖音、小红书等新媒体平台以及线下智慧整装体验馆全矩阵引流，开拓装修渠道，为经销商全面赋能。"
    }],
    [{
        icon: creative,
        title: "生产智造系统",
        content: "诗尼曼拥有三大生产基地，全线引进德系精工生产设备，衔接公司成熟的ERP系统，实现全电子化、自动化、精密化即时制造，真正保证交货品质、缩短交货周期。"
    }, {
        icon: research,
        title: "产品自主研发",
        content: "公司在广州总部成立了门窗产品研发中心，秉承“家”的服务理念，将产品和生活融为一体，不断推陈出新，根据消费市场的需求研发新产品，真正定制门窗，解决消费者痛点。"
    }, {
        icon: yingxiao,
        title: "主动营销",
        content: "主动营销团队常驻店面，协助经销商管理店面、组建团队、策划爆款活动、执行销售、帮扶经销商拿下订单，实现业绩增长。上手快、盈利快。"
    }, {
        icon: college,
        title: "诗尼曼商学院",
        content: "线上线下培训体系，门窗专业 + 店面运营，全方面为加盟经销商打造高水平的终端管理、销售、设计、业务等精英人才。"
    }, {
        icon: sell,
        title: "新零售·新赛道：全域营销",
        content: "拥有成熟的新零售团队，线上线下完美融合，相互引流获客，创新消费者体验，不断开拓新渠道，提供一站式整装服务。"
    }, {
        icon: qoute,
        title: "酷家乐签单利器",
        content: "10 秒快速出图，5 分钟提供解决方案，720°全景展示，提升消费者体验度，快速成交。"
    }]
];


const supportList = [
    [{
        icon: t1,
        title: "0元加盟",
        content: "无需加盟费，人性化服务，全程信息化管理，全国千亿空白市场待掘金。"
    }, {
        icon: t2,
        title: "免费设计",
        content: "免费店面设计，统一装修方案及上样标准 ，统一 VI、SI 标准规范，提升品牌形象，助力终端成单。"
    }, {
        icon: t3,
        title: "高效建店",
        content: "店面装修流程标准化，建立高效建店系统，提升服务支持效率，助力高标准快速建店。"
    }, {
        icon: t4,
        title: "安装指导",
        content: "制定完善规范的安装流程标准 ，提供标准化的免费安装指导，安装员工经培训合格者上岗。"
    }, {
        icon: t5,
        title: "政策支持",
        content: "按照优惠标准给予新商进行装修返现及上样优惠支持，助推新店快速适应市场，实现业绩目标。"
    }, {
        icon: t6,
        title: "新商帮扶",
        content: "组建新商支持部 ，提供管理、营销、活动、培训、设计全方位新店 运营系统，助力新商快速成长盈利。"
    }, {
        icon: t7,
        title: "免费培训",
        content: "商学院，提供店长、导购、设计师等全方位线下培训，保姆式帮扶；曼学堂，诗尼曼百科全书，系统化学习平台形式丰富；老诗机学堂直播，专业大咖分享干货满满。"
    }, {
        icon: t8,
        title: "广告支持",
        content: "2019年全渠道各类广告投放覆盖全国，提升品牌在当地影响力，为终端获取精准意向客户。"
    }, {
        icon: t9,
        title: "设计赋能",
        content: "与酷家乐深度合作，自主研发“分享家“设计共享平台，让设计助力销售，实现终端引流。"
    }], [{
        icon: t1,
        title: "0元加盟",
        content: "无需加盟费，人性化服务，全程信息化管理，全国千亿空白市场待掘金。"
    }, {
        icon: t2,
        title: "政府支持",
        content: "按照优惠标准给予新商进行装修返现及上样优惠支持，助推新店快速适应市场，实现业绩目标。"
    }, {
        icon: t3,
        title: "电商引流",
        content: "开拓电商渠道，衔接线上线下流量端口，为终端店面引流客户，推送客户资源。"
    }, {
        icon: t4,
        title: "新媒体支持",
        content: "2017年逐步完善微信服务功能，顾问跟单足不出户，设计服务周密到位。"
    }, {
        icon: t5,
        title: "免费培训",
        content: "商学院，提供店长、导购、设计师等全方位线下培训，保姆式帮扶；曼学堂，诗尼曼百科全书，系统化学习平台形式丰富；老诗机学堂直播，专业大咖分享干货满满。"
    }, {
        icon: t6,
        title: "安装指导",
        content: "制定完善规范的安装流程标准 ，提供标准化的免费安装指导，安装员工经培训合格者上岗。"
    }, {
        icon: t7,
        title: "广告支持",
        content: "2019年全渠道各类广告投放覆盖全国，提升品牌在当地影响力，为终端获取精准意向客户。"
    }, {
        icon: t8,
        title: "设计赋能",
        content: "与酷家乐深度合作，自主研发“分享家“设计共享平台，让设计助力销售，实现终端引流。"
    }, {
        icon: t9,
        title: "开业支持",
        content: "开业时向终端专卖店输出方案、输出团队，全程监控并支持开业活动，与前线人员一起战斗。"
    }, {
        icon: t10,
        title: "3D软件",
        content: "联手智能云设计服务平台巨头酷家乐，10秒钟呈现家装效果，5分钟出图，给顾客带来便捷体验。"
    }], [{
        icon: t1,
        title: "开业支持",
        content: "专业营销、开业团队策划开业活动，现场指挥、全程监控及支持。"
    }, {
        icon: t2,
        title: "活动支持",
        content: "强大帮扶团队，拥有操控千场活动策划、执行、推广、营销整合能力。"
    }, {
        icon: t3,
        title: "设计支持",
        content: "免费店面设计，高度统一的标准化VI系统展示，保障品牌高度与营销需求。"
    }, {
        icon: t4,
        title: "培训支持",
        content: "行业独有“黄埔军校”商学院，一对一名师授课，专业教学，让新商速成大商。"
    }, {
        icon: t5,
        title: "广告支持",
        content: "签约海清为形象代言人，机场、高铁、公交车等高端户外广告遍布全国各地，多角度线上线下整合投入。"
    }, {
        icon: t6,
        title: "电商支持",
        content: "线上引流，线下交付，O2O模式为经销商吸引大量顾客自由商城、天猫商城、京东商城、微信公众号全面开花。"
    }]
]


const conditionList = [
    {
        title: "店面要求",
        content: "店面不低于100平，装修公司按标准SI方案进行装修;"
    }, {
        title: "专卖要求",
        content: "必须诗尼曼专卖，以及诗尼曼提供的相关配套产品;"
    }, {
        title: "品牌保证金",
        content: "保证金10000元—20000元(合作终止时凭原始单据可退换);"
    }, {
        title: "团队要求",
        content: "店面配置独立的运作团队(导购、设计师、安装工程师等);"
    }, {
        title: "风险意识",
        content: "有充分的思想认识，独立核算和自负盈亏，在形象和经营上接受公司的管理和监督，对风险控制有比较正确的认识;投资有风险，加盟需谨慎;"
    }
]

const processList = [{
    icon: t1,
    title: "提交申请"
}, {
    icon: t2,
    title: "总部评估"
}, {
    icon: t3,
    title: "签订合同"
}, {
    icon: t4,
    title: "建店筹备"
}, {
    icon: t5,
    title: "免费培训"
}, {
    icon: t6,
    title: "正式开业"
}]

export default function Index() {
    const [currentIdx, setcurrentIdx] = useState(0)
    const [list, setlist] = useState<any>([])
    const [slist, setslist] = useState<any>([])

    const choose = (index) => {
        setcurrentIdx(index);
        setlist(infos[index]);
        setslist(supportList[index]);
    }

    return <View className="investment data-v-0e1caa22">
        <View className="bannerBox data-v-0e1caa22">
            <Image className="bannerImg data-v-0e1caa22" mode="aspectFill" src={banner}></Image>
        </View>
        <View className="serviceBtnBox data-v-0e1caa22">
            {
                btn_list.map((item: any, index) => {
                    return <View className={'serviceBtn data-v-0e1caa22' + (index === currentIdx ? ' active' : '')} onClick={() => { choose(index) }} key={index}>{'' + item.title + ''}</View>
                })
            }
        </View>
        <View className="advantage data-v-0e1caa22">
            <View className="title data-v-0e1caa22">
                <View className="title_zh_CN data-v-0e1caa22">加盟优势</View>
                <Text className="littleIcon data-v-0e1caa22"></Text>
                <View className="title_nl data-v-0e1caa22">JSON ADVANTAGE</View>
            </View>
            <View className="introductionCard data-v-0e1caa22">
                {
                    list.map((item: any, index) => {
                        return <View className="introduction data-v-0e1caa22" key={index}>
                            <View className="picBox data-v-0e1caa22" style={{ backgroundImage: `url(${item.icon})` }}></View>
                            <Text className="littleTitle data-v-0e1caa22">{item.title}</Text>
                            <View className="detail data-v-0e1caa22">{'' + item.content + ''}</View>
                            <Text className="littleIcon data-v-0e1caa22"></Text>
                        </View>
                    })
                }
            </View>
        </View>
        <View className="support data-v-0e1caa22" style={{ background: `url(${background}) no-repeat center bottom;` }}>
            <View className="title data-v-0e1caa22">
                <View className="title_zh_CN data-v-0e1caa22">加盟支持</View>
                <Text className="littleIcon data-v-0e1caa22"></Text>
                <View className="title_nl data-v-0e1caa22">JSON SUPPORT</View>
            </View>
            {slist.map((supportItem: any, index) => {
                return <View className="supportCard data-v-0e1caa22" key={index}>
                    <View className="number data-v-0e1caa22">
                        <Image className="data-v-0e1caa22" mode="aspectFill" src={supportItem.icon}></Image>
                        <Text className="line data-v-0e1caa22"></Text>
                    </View>
                    <View className="detail data-v-0e1caa22">
                        <View className="littleTitle data-v-0e1caa22">{'' + supportItem.title + ''}</View>
                        <View className="content data-v-0e1caa22">{'' + supportItem.content + ''}</View>
                    </View>
                </View>
            })
            }
        </View>
        <View className="condition data-v-0e1caa22">
            <View className="title data-v-0e1caa22">
                <View className="title_zh_CN data-v-0e1caa22">加盟支持</View>
                <Text className="littleIcon data-v-0e1caa22"></Text>
                <View className="title_nl data-v-0e1caa22">JSON SUPPORT</View>
            </View>
            <View className="conditionBox data-v-0e1caa22">
                {
                    conditionList.map((item: any, index) => {
                        return <View className="detail data-v-0e1caa22" key={index}>
                            <View className="littleTitle data-v-0e1caa22">{'' + item.title + ''}</View>
                            <View className="content data-v-0e1caa22">{'' + item.content + ''}</View>
                        </View>
                    })
                }
            </View>
        </View>
        <View className="process data-v-0e1caa22">
            <View className="title data-v-0e1caa22">
                <View className="title_zh_CN data-v-0e1caa22">加盟流程</View>
                <Text className="littleIcon data-v-0e1caa22"></Text>
                <View className="title_nl data-v-0e1caa22">JSON SUPPORT</View>
            </View>
            <View className="processBox data-v-0e1caa22">
                {
                    processList.map((item: any, index) => {
                        return <View className="detail data-v-0e1caa22" key={index}>
                            <Image className="numberIcon data-v-0e1caa22" mode="aspectFill" src={item.icon}></Image>
                            <Image className="processIcon data-v-0e1caa22" mode="aspectFill" src={processIcon}></Image>
                            <View className="circle data-v-0e1caa22">
                                <View className="littleCircle data-v-0e1caa22">
                                    <View className="content data-v-0e1caa22">{'' + item.title + ''}</View>
                                </View>
                            </View>
                        </View>
                    })
                }
            </View>
        </View>
        <View className="apply data-v-0e1caa22">
            <View className="title data-v-0e1caa22">
                <View className="title_zh_CN data-v-0e1caa22">申请加盟</View>
            </View>
            <View className="applyFrom data-v-0e1caa22">
                <View className="searchbox data-v-0e1caa22">
                    <View className="searchText data-v-0e1caa22">姓名</View>
                    <Input className="searchInput data-v-0e1caa22" type="text" ></Input>
                </View>
                <View className="searchbox data-v-0e1caa22">
                    <View className="searchText data-v-0e1caa22">电话</View>
                    <Input className="searchInput data-v-0e1caa22" type="number" ></Input>
                </View>
                <View className="searchbox data-v-0e1caa22" >
                    <View className="searchText data-v-0e1caa22">地址</View>
                    <Input className="searchInput data-v-0e1caa22" type="text" ></Input>
                </View>
            </View>
            <View className="saveBtn data-v-0e1caa22">
                <Button className="saveBottom data-v-0e1caa22" type="primary">申请加盟</Button>
            </View>
        </View>

    </View>


}