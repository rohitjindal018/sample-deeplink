export const MOBILE_PLATFORM = {
    ANDROID: 'ANDROID',
    IOS: 'IOS',
    WINDOWS: 'WINDOWS',
    UNKNOWN: 'UNKNOWN'
}
export function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return MOBILE_PLATFORM.WINDOWS;
    }

    if (/android/i.test(userAgent)) {
        return MOBILE_PLATFORM.ANDROID;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return MOBILE_PLATFORM.IOS;
    }

    return MOBILE_PLATFORM.UNKNOWN;
}