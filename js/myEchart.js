var parkData = document.getElementsByClassName("inner");
var freeParkNum = parkData[1].children[0].innerText;
var fullParkNum = parkData[2].children[0].innerText;
var brokenParkNum = fullParkNum / parkData[3].children[0].childNodes[0].data * 100 - freeParkNum - fullParkNum;
console.log(freeParkNum, fullParkNum, brokenParkNum, parkData[3].children[0].childNodes[0].data);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echarts'));
// 指定图表的配置项和数据
option = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'车位使用情况',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value: freeParkNum, name:'空闲车位'},
                {value: fullParkNum, name:'正在使用'},
                {value: brokenParkNum, name:'车位故障'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);