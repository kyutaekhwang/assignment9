$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    getColor(m);
    backgroundFive(s);
    fontSize(s);
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

//assignment 9 #1
  function getColor(i) {
    if (i % 2 === 0) {
        $("#txt").css({ color: "blue"});
    } else {
        $("#txt").css({ color: "red"});
    }
  }

//assignment 9 #2
  function backgroundFive(i) {
  	if (i % 10 === 0) {
  		$("body").css({ "background-color": "yellow"}); 
  	} else if (i % 5 === 0){
  		$("body").css({ "background-color": "orange"}); 
  	}
}

//assignment 9 #3
  function fontSize(i) {
  	if (i % 2 ===0) {
  		$("#txt").css({ fontSize: "20px"});
  	} else {
  	  	$("#txt").css({ fontSize: "30px"});
  	}
}

  startTime();
});
