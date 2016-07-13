$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    getColor(m);
    backgroundFive(m);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $("#txt").html(h + ":" + m + ":" + s + ampm);
    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  function getColor(i) {
    if (i % 2 === 0 ) {
        $("#txt").css({ color: "blue"});
    } else {
        $("#txt").css({ color: "red"});
    }
  }

  function backgroundFive(i) {
  	if (i <= 5) {
  		$("body").css({ "background-color": "yellow"}); 		
  	} else if (i > 5 && i <= 10) {
  		$("body").css({ "background-color": "orange"});
  	} else if (i > 10 && i <= 15) {
  		$("body").css({ "background-color": "yellow"});
  	} else if (i > 15 && i <= 20) {
  		$("body").css({ "background-color": "orange"});
    } else if (i > 20 && i <= 25) {
  		$("body").css({ "background-color": "yellow"});
  	} else if (i > 25 && i <= 30) {
  		$("body").css({ "background-color": "orange"});
  	} else if (i > 30 && i <= 35) {
  		$("body").css({ "background-color": "yellow"});
  	} else if (i > 35 && i <= 40) {
  		$("body").css({ "background-color": "orange"});
   	} else if (i > 40 && i <= 45) {
  		$("body").css({ "background-color": "yellow"});
   	} else if (i > 45 && i <= 50) {
  		$("body").css({ "background-color": "orange"});
   	} else if (i > 50 && i <= 55) {
  		$("body").css({ "background-color": "yellow"});
  	}
  }

  startTime();
});
