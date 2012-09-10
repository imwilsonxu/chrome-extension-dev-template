/**
 * My js kit.
 *
 * By imwilsonxu(http://imwilsonxu.net)
 */

function registerEventHandler(ele, type, func, bubbled) {
    if (typeof ele == "string") {
        ele = document.getElementById(ele);
        if (!ele) {
            return false;
        }
    }
    if (ele.attachEvent) {
        ele.attachEvent('on'+type, func);
    } else if (ele.addEventListener) {
        ele.addEventListener(type, func, bubbled);
    }
}

function stopPropagation(e) {
    var evt = e || window.event;
    if (evt.stopPropagation) {
        evt.stopPropagation();
        evt.preventDefault();
    } else {
        evt.cancelBubble = true;
        evt.returnValue = false;
    }
}

function is_fullscreen() {
    if (document.fullscreen) {
        return document.fullscreen;
    } else if (document.mozFullScreen) {
        return document.mozFullScreen;
    } else if (document.webkitIsFullScreen) {
        return document.webkitIsFullScreen;
    } else {
        return undefined;
    }
}

