let data = getJSON();
drawMap(data);
mapsLegend();

//getJSON
function getJSON() {
    let theJSON = {
        "value": [
            {
                "num": 3,
                "X": 2,
                "Y": 0,
                "status": "故障"
            },
            {
                "num": 18,
                "X": 17,
                "Y": 0,
                "status": "使用中"
            },
            {
                "num": 17,
                "X": 16,
                "Y": 0,
                "status": "使用中"
            },
            {
                "num": 15,
                "X": 14,
                "Y": 0,
                "status": "使用中"
            },
            {
                "num": 29,
                "X": 9,
                "Y": 2,
                "status": "已预定"
            },
            {
                "num": 38,
                "X": 2,
                "Y": 3,
                "status": "使用中"
            },
            {
                "num": 51,
                "X": 15,
                "Y": 3,
                "status": "使用中"
            },
            {
                "num": 2452,
                "X": 20,
                "Y": 5,
                "status": "故障"
            }
        ]
    };
    theJSON = JSON.stringify(theJSON);

    //用请求获取

    // (function(){
    //     let xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = () => {
    //         if(xhr.readyState === 4 && xhr.status === 200) {
    //             theJSON = xhr.responseText;
    //             console.log(xhr);
    //         }
    //         console.log(xhr.status);
    //     }
    //     xhr.open('get', "url", true);
    //     xhr.send();
    // })();

    // console.log(theJSON);
    return theJSON;
}


//drawMap
function drawMap(data) {
    const manageMap = document.getElementById("manage-map"),
          value = JSON.parse(data).value;
    let boxes = "",
        color = "white";

    //初始化弹出框
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    for (let item of value) {
        if (item.status === "使用中") {
            color = 'rgba(30, 166, 91, .7)'
        } else if(item.status === "已预定") {
            color = 'rgba(0, 192, 240, .7)'
        } else if (item.status === "故障") {
            color = 'rgba(221, 75, 57, .7)'
        }
        boxes +=`<div style="
            position: absolute;
            left: ${ item.X * 4.15}%;
            top: ${ item.Y * 16.7}%;
            margin: .2%;
            width: 3.8%;
            height: 15.5%;
            background-color: ${color}" 
        data-toggle="popover" data-trigger="hover" data-HTML="true" data-placement="bottom" data-content="
            <h4>#A-01</h4>
            <div>车牌号：陕A8888888</div>
            <div>车位状态：${item.status}</div>
            <div>停车时间：2016-2-15 19:25</div>
        "></div>`;
    }
    
    manageMap.innerHTML += boxes;
}



//mapsLegend
function mapsLegend() {
    let Legend = document.getElementById('mapsLegend');
    let ctx = Legend.getContext('2d');
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
}