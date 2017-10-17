let data = getJSON();
drawMap(data);
mapsLegend();
addEvents(data);

//getJSON
function getJSON(){
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
    let map = document.getElementById('theMap');
    let ctx = map.getContext('2d');
    data = JSON.parse(data).value;
    // console.log(data);
    
    for (var value of data) {
        // console.log(value);
        if (value.status === "使用中") {
            normal(value);
        } else if(value.status === "已预定") {
            predetermined(value);
        } else if (value.status === "故障") {
            error(value);
        }
    }

    //故障
    function error({X: X, Y: Y}) {
        ctx.fillStyle = 'rgba(221, 75, 57, .8)';
        ctx.fillRect(X * 12.45, Y * 25, 12.45, 25);
    }

    //已预定
    function predetermined({ X: X, Y: Y }) {
        ctx.fillStyle = 'rgba(0, 192, 240, .8)';
        ctx.fillRect(X * 12.45, Y * 25, 12.45, 25);
    }

    //使用中
    function normal({ X: X, Y: Y }) {
        ctx.fillStyle = 'rgba(30, 166, 91, .8)';
        ctx.fillRect(X * 12.45, Y * 25, 12.45, 25);
    }
}



//mapsLegend
function mapsLegend(){
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


function addEvents(data) {
    let theCanvas = document.getElementById('theMap');
    data = JSON.parse(data).value;
    theCanvas.addEventListener('click', event=>{
        event = event || window.event;
        theWidth = event.target.offsetWidth / 24;
        theHeight = event.target.offsetHeight / 6;
        
        let X = ~~(event.offsetX / theWidth);
        let Y = ~~(event.offsetY / theHeight);
        
        for (let value of data) {
            if(X === value.X && Y === value.Y) {
                showModal(value);
            }
        }
    })
}


function showModal({num, X, Y, status}) {
    document.getElementById("mySmallModalLabel").innerHTML = "#A-" + num;
    document.getElementById("modal-status").innerHTML = status;    
    $("#smallmodal").modal("show");
}