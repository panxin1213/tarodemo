
import Data from '../data.json'
function get(options) {
    return new Promise((resole, reject) => {
        resole(Data[options.type]);
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
