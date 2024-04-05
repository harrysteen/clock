var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var setClock = setInterval(function() {
    var dateNow = new Date();
    var hours = dateNow.getHours();
    var min = dateNow.getMinutes();
    var sec = dateNow.getSeconds();

    var cal_hr = (hours % 12) * 30 + (min / 2);
    var cal_min = min * 6;
    var cal_sec = sec * 6;

    hour.style.transform = "rotate(" + cal_hr + "deg)";
    minute.style.transform = "rotate(" + cal_min + "deg)";
    second.style.transform = "rotate(" + cal_sec + "deg)";
}, 1000);
