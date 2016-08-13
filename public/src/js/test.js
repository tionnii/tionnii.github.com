/*
var dayarray = new Array("SUN","MON","TUE","WED","THU","FRI","SAT");

function getthedate(){
	var w_date = new Date();
	var day = w_date.getDay();
	var hours = w_date.getHours();
	var minutes = w_date.getMinutes();
	var seconds = w_date.getSeconds();	

	var dn = "AM";
	if (hours>=12) dn="PM";
	if (hours>12) hours = hours-12;
	if (hours==0) hours = 12;
	if (minutes<=9) minutes = "0"+minutes;
	if (seconds<=9) seconds = "0"+seconds;
	//change font size here
	var c_date = dayarray[day]+" "+hours+":"+minutes+":"+seconds+" "+dn;
	document.getElementById("clock").innerHTML=c_date;
}
getthedate();
function goforit(){
	setInterval("getthedate()",1000);
}
goforit();
*/
/*
var lv = new ProgressBar.Circle('.header_lv', {
 text: {
        value: '',
        className: 'txt-lv',
        style: {
            position: 'absolute',
            left: '50%',
            top: '76px',
            padding: 0,
            margin: 0,
            color: '#fff',
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },
	},	
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: '#c7c7c7',
  easing: 'easeInOut',
  duration: 1000,
  from: { color: '#464646', width: 6 },
  to: { color: '#464646', width: 6 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100) + ' %';
    if ((value === 0) || (value === '0 %')) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  }
});
*/
/*
var over_lv = document.getElementById('lv');
over_lv.addEventListener('mouseenter', function() {
	lv.animate(0.88);
});
over_lv.addEventListener('mouseleave', function() {
	lv.animate(0);
});
*/


/*
var btn_sch = document.getElementById('search');
btn_sch.addEventListener('mouseenter', function() {
	var ipt_search = btn_sch.getElementByTagName('div');
	
});
*/