'use strict';
var id_week_number = document.getElementById('corona');
var id_date = document.getElementById('date');

function abc() {
	id_week_number = counter();
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
