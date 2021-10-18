
export function richText2(l) {
    return null === l ? "" : l.replace(/style=""/gi, "").replace(/font-size:=""/gi, "").replace(/<h4>/gi, '<h4 style="font-size:14px;font-weight:normal;padding:10px;">').replace(/<p>/gi, '<p style="color:#000;width:100%;box-sizing:border-box;font-size:16px;font-weight:normal;padding:0 10px;margin:10px 0;">').replace(/<strong>/gi, '<strong style="line-height:45px;color:#000;">').replace(/<br\s*\/?>/gi, "\r\n").replace(/ style="font-size: 18px;"/gi, ' style="font-size: 15px;"').replace(/img/gi, 'img style="width:96% !important;vertical-align:middle;margin-left:2%;"').replace(/\u67e5\u770b\u5168\u5c4b\u65b9\u6848/gi, "");
}

export function richText(l) {
    return null === l ? "" : l.replace(/<table([\s\w"-=\/\.:;]+)/gi, '<table$1 style="border-collapse: collapse;margin:10px;color:#666;"').replace(/ style=""/gi, "").replace(/ aid="undefined"\//gi, "").replace(/ title=""/gi, "").replace(/ aid="undefined"/gi, "").replace(/.jpg"\//gi, '.jpg"').replace(/.gif"\//gi, '.gif"').replace(/.png"\//gi, '.png"').replace(/<img([\s\w"-=\/\.:;]+)/gi, '<img$1 style="width:100% !important;vertical-align:middle;"');
}