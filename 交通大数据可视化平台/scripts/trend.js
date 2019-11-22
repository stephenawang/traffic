
$(function(){
    echart1();
    echart2();
    echart3();
    echart4();
   // init();
  })

  function echart1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    myChart.clear();
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['市心北路','市心中路','市心南路','通惠北路','通惠中路','通惠南路'],
            textStyle:{
                color: '#fff'
            },
            top: '8%',
            selected:{
            	'市心北路':true,
            	'市心中路':true,
            	'市心南路':true,
            	'通惠北路':true,
            	'通惠中路':true,
            	'通惠南路':true,}
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '速度(km/h)',
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            min:30,
            //max:45,
        },
        series: [
            {
                name:'市心北路',
                type:'line',
                data:[43.8453,43.8633,43.8487,43.9059,43.4872,44.5616,45.3689]
            },
            {
                name:'市心中路',
                type:'line',
                data:[38.8205,38.5308,38.5653,38.7990,38.1343,38.3582,38.6605]
            },
            {
                name:'市心南路',
                type:'line',
                data:[32.1950,32.1283,32.0180,32.1469,32.2906,32.5483,32.3557]
            },
            {
                name:'通惠北路',
                type:'line',
                data:[42.8672,43.2699,43.8665,43.2853,43.5805,43.7203,44.0305]
            },
            {
                name:'通惠中路',
                type:'line',
                data:[36.2321,36.6593,36.6814,37.5194,37.6099,37.0127,38.1673]
            },
            {
                name:'通惠南路',
                type:'line',
                data:[36.2578,36.8594,35.8951,36.2828,35.7493,37.6258,37.6272]
            },
        ]
    };
    myChart.setOption(option);
}


function echart2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart2'));
    myChart.clear();
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['市心北路','市心中路','市心南路','通惠北路','通惠中路','通惠南路'],
            textStyle:{
                color: '#fff'
            },
            top: '8%',
            selected:{
            	'市心北路':true,
            	'市心中路':true,
            	'市心南路':true,
            	'通惠北路':true,
            	'通惠中路':true,
            	'通惠南路':true,}
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '车流量(辆)',
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            min:10000,
            //max:45,
        },
        series: [
            {
                name:'市心北路',
                type:'line',
                data:[16293, 21148, 19433, 17192, 19394, 17678, 13930]
            },
            {
                name:'市心中路',
                type:'line',
                data:[31233,33328,31910,31536,32882,33360,31135]
            },
            {
                name:'市心南路',
                type:'line',
                data:[17674,17793,17383,17314,17623,17650,16574]
            },
            {
                name:'通惠北路',
                type:'line',
                data:[13660,13419,13487,13368,13609,13292,12610]
            },
            {
                name:'通惠中路',
                type:'line',
                data:[12249,12102,12045,11809,12241,11324,10406]
            },
            {
                name:'通惠南路',
                type:'line',
                data:[17893,17821,18030,18008,18177,17371,16080]
            },
        ]
    };
    myChart.setOption(option);
}

function echart3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart3'));
    myChart.clear();
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['市心北路','市心中路','市心南路','通惠北路','通惠中路','通惠南路'],
            textStyle:{
                color: '#fff'
            },
            top: '8%',
            selected:{
            	'市心北路':true,
            	'市心中路':true,
            	'市心南路':true,
            	'通惠北路':true,
            	'通惠中路':true,
            	'通惠南路':true}
        },
        grid: {
            top: '40%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '速度(km/h)',
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            min:25,
            //max:55,
        },
        series: [
            {
                name:'市心北路',
                type:'line',
                data:[48.3919,49.2370,49.1191,49.1067,49.2400,50.7391,49.0803,42.5833,38.8489,40.0956,41.2480,43.2143,44.4771,43.0601,42.1499,41.4096,40.1490,38.9294,39.6683,41.5974,42.2391,42.2703,45.7401,46.8871]
            },
            {
                name:'市心中路',
                type:'line',
                data:[42.1820,42.4987,42.5686,43.5564,44.0797,45.6833,43.0574,36.7493,35.6046,36.5997,36.6386,36.7917,37.3750,37.3611,36.9849,36.1880,36.3190,34.0630,34.9219,35.6297,34.8439,35.6646,39.2484,40.8510]
            },
            {
                name:'市心南路',
                type:'line',
                data:[36.9789,35.9353,36.4663,36.7117,35.8700,37.6203,34.0649,28.8833,27.2026,27.5763,28.7069,30.1321,31.8623,31.3059,30.2117,29.2129,29.4414,27.6800,29.7656,28.3170,29.4973,32.1387,35.0391,36.2016]
            },
            {
                name:'通惠北路',
                type:'line',
                data:[46.8437,47.9927,47.5706,46.4089,44.5201,47.3561,45.5726,40.2120,39.5000,40.7909,42.0540,43.3160,44.1494,43.6721,43.6413,42.9841,42.5551,39.8144,40.4087,40.9560,42.6954,43.5811,44.1133,45.2663]
            },
            {
                name:'通惠中路',
                type:'line',
                data:[39.6086,40.7041,39.9999,40.1840,42.5200,43.0397,39.6680,33.5716,31.2414,33.9656,35.1876,37.4300,37.8370,38.1929,37.8183,36.5620,34.1367,32.3133,33.9117,34.9370,35.9204,37.5313,37.4557,38.3701]
            },
            {
                name:'通惠南路',
                type:'line',
                data:[39.0682,40.7662,40.3126,40.7410,39.8722,40.4180,36.7892,30.8466,30.7334,32.2956,33.9608,35.6420,36.9174,35.7734,36.7860,35.2256,33.8554,31.5588,33.0194,34.7216,34.9076,37.5214,38.5558,39.6664]
            },
        ],
        
    };
    myChart.setOption(option);
}


function echart4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart4'));
    myChart.clear();
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['市心北路','市心中路','市心南路','通惠北路','通惠中路','通惠南路'],
            textStyle:{
                color: '#fff'
            },
            top: '8%',
            selected:{
            	'市心北路':true,
            	'市心中路':true,
            	'市心南路':true,
            	'通惠北路':true,
            	'通惠中路':true,
            	'通惠南路':true}
        },
        grid: {
            top: '40%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '指标',
            type: 'value',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            min:1,
            //max:55,
        },
        series: [
            {
                name:'市心北路',
                type:'line',
                data:[1,1,1,1,1,1,1,3,4,5,4,4,5,5,5,5,5,5,5,4,4,4,3,1]
            },
            {
                name:'市心中路',
                type:'line',
                data:[2,2,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3]
            },
            {
                name:'市心南路',
                type:'line',
                data:[1,1,1,1,2,1,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
            },
            {
                name:'通惠北路',
                type:'line',
                data:[1,1,1,1,1,1,1,3,3,5,4,4,3,3,4,4,4,4,4,3,3,2,1,1]
            },
            {
                name:'通惠中路',
                type:'line',
                data:[1,1,1,1,1,1,2,4,5,4,3,3,2,2,3,3,3,3,2,2,2,1,1,1]
            },
            {
                name:'通惠南路',
                type:'line',
                data:[1,1,1,1,1,1,2,4,5,5,5,5,4,4,5,5,5,5,5,4,4,3,2,1]
            },
        ],
        
    };
    myChart.setOption(option);
}