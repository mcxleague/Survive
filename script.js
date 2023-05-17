// Setting the Launch Date.
var comingdate = new Date("June 10, 2023 11:00:00");

// Accepting the elements.
var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

// Making Countdown work.
var x = setInterval(function(){
  var now = new Date();
  var des = comingdate.getTime() - now.getTime();
  var days = Math.floor(des/(1000 * 60 * 60 * 24));
  var hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 *60));
  var mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
  var secs = Math.floor(des%(1000 * 60) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  if(des <= 0){
    clearInterval(x);
    d.innerHTML = "00";
    h.innerHTML = "00";
    m.innerHTML = "00";
    s.innerHTML = "00";
  }

},1000);

function getTrueNumber(x) {
  if (x<10) return '0'+x;
  else return x;
}

functiondisable() {
// To get the scroll position of current webpage
TopScroll = window.pageYOffset || document.documentElement.scrollTop;
LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

// if scroll happens, set it to the previous value
window.onscroll = function() {
window.scrollTo(LeftScroll, TopScroll);
        };
}

functionenable() {
window.onscroll = function() {};
}
