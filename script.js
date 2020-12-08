'use strict';
var id_week_number = counter();
var id_date = document.getElementById('date');

function isLeap(year) {
    if (year % 400 == 0) return true;
    if (year % 100 == 0) return false;
    if (year % 4 == 0) return true;
    return false;
}

function pYear(year) {
    return (year + Math.floor(year / 4)
                 - Math.floor(year / 100)
                 + Math.floor(year / 400)) % 7;
}

function lastWeek(year) {
    if (pYear(year) == 4 || pYear(year - 1) == 3)
        return 53;
    return 52;
}

function ordinalDay(date) {
    var ordinal_table = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    if (isLeap(date.getFullYear()))
        for (var i = 2; i < ordinal_table.length; i++)
            ordinal_table[i] += 1;

    return ordinal_table[date.getMonth()] + date.getDate();
}

function weekNumber(date) {
    var ordinal_day = ordinalDay(date);
    var current_year = date.getFullYear();
    var weekday = date.getDay();
    var week = Math.floor((ordinal_day - weekday + 10) / 7);

    if (week < 1) return lastWeek(current_year- 1);
    if (week > lastWeek(current_year)) return 1;
    return week;
}

function renderPage(date) {
    var week_number = weekNumber(date);

    id_week_number.innerText = week_number;
    id_date.innerText = date.toLocaleString();
}

function counter(){
    var dday = new Date("Dec 12,2019,09:00:00").getTime(); //디데이
	setInterval(function(){
		var now = new Date(); //현재 날짜 가져오기
		var distance = dday - now;
		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((distance % (1000 * 60)) / 1000);
		if(s < 10){
			s = '0'+s;
		}
		$('.content').html(d+':'+h+':'+m+':'+s)
	}, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    renderPage(date);
    setInterval(function() {
        var now = new Date();
        id_date.innerText = now.toLocaleString();

        if (now.getDate != date.getDate) {
            date = now;
            renderPage(date);
        }
    }, 1000);
});
