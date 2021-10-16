
import Data from '../data.json'
import Taro from '@tarojs/taro'

function get(options) {
    Taro.showLoading();
    return new Promise((resole, reject) => {
        resole(Data[options.type]);
    }).finally(() => {
        Taro.hideLoading();
    });
}

export function getCarouselList() {
    return get({
        type: "carouselList"
    });
}

export function getHotList() {
    return get({
        type: "hotlist"
    });
}

export function getGoodist() {
    return get({
        type: "goodlist"
    });
}

export function getTypeGoodist() {
    return get({
        type: "goodtypes"
    });
}

export function getJiadiangoods() {
    return get({
        type: "jiadiangoods"
    });
}


export function getIndexhuodong() {
    return get({
        type: "indexhuodong"
    });
}


export function getClassIndex() {
    return get({
        type: "class_list"
    });
}

export function getSearchList() {
    return get({
        type: "searchlistdata"
    });
}


export function getInfodetail() {
    return get({
        type: "infodetail"
    });
}
