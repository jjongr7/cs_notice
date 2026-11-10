// 쿠키저장
function setCookie(name, value, hours) {
    var date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    document.cookie =
        name + '=' + value +
        '; expires=' + date.toUTCString() +
        '; path=/';
}

// 쿠키조회
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// 오늘하루숨기기
function hideNoticeToday() {
    var now = new Date();
    var midnight = new Date();
    // 다음날 0시
    midnight.setHours(24, 0, 0, 0);
    var hoursLeft = (midnight.getTime() - now.getTime()) / 1000 / 60 / 60;
    setCookie('hide_cs_notice', 'Y', hoursLeft);
    document.getElementById('cs_notice').style.display = 'none';
}

// 페이지 로드 시 체크
window.onload = function() {
    if (getCookie('hide_cs_notice') === 'Y') {
        document.getElementById('cs_notice').style.display = 'none';
    }
};