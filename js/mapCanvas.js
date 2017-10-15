//map
var map = document.getElementById('theMap');
var ctx = map.getContext('2d');

//故障
ctx.fillStyle = 'rgba(221, 75, 57, .8)';
ctx.fillRect(10 * 12.45, 2 * 25, 12.45, 25);

//已预定
ctx.fillStyle = 'rgba(0, 192, 240, .8)';
ctx.fillRect(2 * 12.45, 3 * 25, 12.45, 25);

//正常使用
ctx.fillStyle = 'rgba(30, 166, 91, .8)';
ctx.fillRect(3 * 12.45, 0 * 25, 12.45, 25);
ctx.fillStyle = 'rgba(30, 166, 91, .8)';
ctx.fillRect(5 * 12.45, 0 * 25, 12.45, 25);
ctx.fillStyle = 'rgba(30, 166, 91, .8)';
ctx.fillRect(6 * 12.45, 0 * 25, 12.45, 25);
ctx.fillStyle = 'rgba(30, 166, 91, .8)';
ctx.fillRect(18 * 12.45, 5 * 25, 12.45, 25);



//mapsLegend
var Legend = document.getElementById('mapsLegend');
var ctx = Legend.getContext('2d');
Legend.height = 400;

//故障
ctx.fillStyle = 'rgba(221, 75, 57, .9)';
ctx.fillRect(50, 20, 50, 50);
ctx.fillStyle = '#DCDCDC';
ctx.font = "40px Georgia";
ctx.fillText("故障", 110, 58);

//已预定
ctx.fillStyle = 'rgba(0, 192, 240, .9)';
ctx.fillRect(50, 120, 50, 50);
ctx.fillStyle = '#DCDCDC';
ctx.font = "40px Georgia";
ctx.fillText("已预定", 110, 158);

//使用中
ctx.fillStyle = 'rgba(30, 166, 91, .9)';
ctx.fillRect(50, 220, 50, 50);
ctx.fillStyle = '#DCDCDC';
ctx.font = "40px Georgia";
ctx.fillText("使用中", 110, 258);

