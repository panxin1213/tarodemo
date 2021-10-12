
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