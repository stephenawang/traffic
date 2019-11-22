
$(function(){
    echart1();
    echart2();
    echart3();
    echart4();
    echart5();
    echart6();
    echart7();
    echart8();
   // init();
  })

  function echart1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    var xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    var legendData= ['','',''];
    var title = "";
    var serieData = [];
    var metaDate = [
        [38.8205,38.5308,38.5653,38.7990,38.1343,38.3582,38.6605]

    ]
    for(var v=0; v < legendData.length ; v++){
        var serie = {
            name:legendData[v],
            type: 'line',
            symbol:"circle",
            symbolSize:10,
            data: metaDate[v]
        };
        serieData.push(serie)
    }
    var colors = ["#ffff43"];
    var option = {
        backgroundColor: 'transparent',
        title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},

        color:colors,
        grid: {left: '4%',bottom: "5%",right:"4%",containLabel: true},
        tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'},
        formatter: "{a}<br/>{b}<br/>{c}km/h" 
    },
        xAxis: [
            {
                type: 'category',
                axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                axisTick : {show: false},
                data:xAxisData,
            },
        ],
        yAxis: [
            {
                axisTick : {show: false},
                splitLine: {show:false},
                axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                min: 37,
                max: 40,
            },
        ],
        series:serieData
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
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
            data:['周一','周二','周三','周四','周五','周六','周日'],
            textStyle:{
                color: '#fff'
            },
            top: '8%',
            selected:{
            	'周一':true,
            	'周二':true,
            	'周三':true,
            	'周四':true,
            	'周五':true,
            	'周六':true,
            	'周日':true}
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
            min:30,
            //max:45,
        },
        series: [
            {
                name:'周一',
                type:'line',
                data:[42.096,43.050,42.768,44.981,42.415,45.365,44.700,34.991,34.933,35.350,36.083,38.075,38.035,37.916,36.825,35.900,36.883,35.275,36.719,36.134,36.627,36.129,40.136,41.092]
            },
            {
                name:'周二',
                type:'line',
                data:[43.200,42.116,43.535,42.191,43.663,45.726,42.191,35.298,34.552,36.377,36.561,37.816,37.641,37.491,36.640,36.375,36.466,34.710,34.450,36.521,34.572,37.000,39.616,40.796]
            },
            {
                name:'周三',
                type:'line',
                data:[42.043,41.808,40.250,45.208,45.301,45.375,42.658,35.366,33.525,36.133,36.681,35.622,37.456,38.250,37.308,35.758,36.139,33.733,36.427,36.285,35.068,36.605,39.310,42.090]
            },
            {
                name:'周四',
                type:'line',
                data:[41.566,42.725,44.140,43.039,46.398,48.734,43.908,34.365,34.683,36.400,37.433,36.543,37.683,37.791,37.610,36.600,36.504,34.341,35.291,35.026,36.512,35.621,39.527,39.807]
            },
            {
                name:'周五',
                type:'line',
                data:[41.250,41.191,43.375,43.341,43.890,45.316,41.252,36.391,34.175,36.733,35.807,36.780,38.149,37.379,35.816,37.116,36.533,34.166,33.216,35.714,34.103,34.895,38.537,39.392]
            },
            {
                name:'周六',
                type:'line',
                data:[42.186,43.089,41.512,43.836,43.866,45.000,41.170,38.716,38.398,37.805,36.589,36.873,36.586,35.576,37.779,36.176,35.525,32.025,33.050,35.292,33.565,35.367,39.308,41.888]
            },
            {
                name:'周日',
                type:'line',
                data:[42.933,43.512,42.400,42.299,43.025,44.267,45.523,42.118,38.966,37.400,37.316,35.833,36.075,37.125,36.916,35.391,36.183,34.191,35.300,34.436,33.460,34.035,38.305,40.892]
            }
        ]
    };
    myChart.setOption(option);
}

function echart3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart3'));
    var xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    var legendData= ['','',''];
    var title = "";
    var serieData = [];
    var metaDate = [
        [31233,33328,31910,31536,32882,33360,31135]

    ]
    for(var v=0; v < legendData.length ; v++){
        var serie = {
            name:legendData[v],
            type: 'line',
            symbol:"circle",
            symbolSize:10,
            data: metaDate[v]
        };
        serieData.push(serie)
    }
    var colors = ["#7CFC00"];
    var option = {
        backgroundColor: 'transparent',
        title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},

        color:colors,
        grid: {left: '4%',bottom: "5%",right:"4%",containLabel: true},
        tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'},
        formatter: "{a}<br/>{b}<br/>{c}辆" 
    },
        xAxis: [
            {
                type: 'category',
                axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                axisTick : {show: false},
                data:xAxisData,
            },
        ],
        yAxis: [
            {
                axisTick : {show: false},
                splitLine: {show:false},
                axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                min: 30000,
               // max: 22000,
            },
        ],
        series:serieData
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
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
            data:['周一','周二','周三','周四','周五','周六','周日'],
            textStyle:{
                color: '#fff'
            },
            top: '8%'
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
            min:0,
            max:5,
        },
        series: [
            {
                name:'周一',
                type:'line',
                data:[1,1,1,1,1,2,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3]
            },
            {
                name:'周二',
                type:'line',
                data:[1,2,1,1,1,1,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3]
            },
            {
                name:'周三',
                type:'line',
                data:[2,2,1,1,1,1,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3]
            },
            {
                name:'周四',
                type:'line',
                data:[2,1,1,1,1,1,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3]
            },
            {
                name:'周五',
                type:'line',
                data:[2,1,1,1,1,1,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3]
            },
            {
                name:'周六',
                type:'line',
                data:[2,2,1,1,1,2,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4]
            },
            {
                name:'周日',
                type:'line',
                data:[2,2,1,1,1,1,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2]
            }
        ]
    };
    myChart.setOption(option);
}

function echart5() {
    var histogramChart3 = echarts.init(document.getElementById('echart5'));
          histogramChart3.setOption( {
            grid:{
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            tooltip : {
            //    trigger: 'item',
            //    formatter: "{a}<br/>{b}<br/>{c}时"
                     trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
           },
           legend: {
            data:['轻度拥堵', '中度拥堵','严重拥堵'],
            textStyle : {
                color : '#ffffff',
            }
        },
            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLine:{
                         lineStyle:{
                             color: '#87cefa'
                         },
                     },
                     axisLabel : { 
                         textStyle: {
                             color: '#fff',
                             fontSize:13
                         }
                     }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                        lineStyle:{
                            color: '#87cefa'
                        },
                    },
                    splitLine: {
                        "show": false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        },
                        formatter: function (value) {
                            return value + "时"
                        },
                    },
                }
            ],
            series : [
                {
                    name:'轻度拥堵',
                    type:'bar',
                    stack: '总量',
                   // barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[1.528,1.721,1.491,1.509,1.653,1.196,1.317],
                    color: '#FF1493'
                },
                {
                    name:'中度拥堵',
                    type:'bar',
                    stack: '总量',
                    //barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.114,0.153,0.254,0.212,0.305,0.257,0.214],
                    color :'#7FFF00'
                },
                {
                    name:'严重拥堵',
                    type:'bar',
                    stack: '总量',
                   // barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.057,0.193,0.035,0.063,0.137,0.199,0.114],
                    color:'red'
                },
            ]
          });
        }
    
    
        function echart6() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart6'));
            myChart.clear();
            option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['周一','周二','周三','周四','周五','周六','周日'],
                    textStyle:{
                        color: '#fff'
                    },
                    top: '8%'
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
                    min:0,
                    max:5,
                },
                series: [
                    {
                        name:'周一',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1]
                    },
                    {
                        name:'周二',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
                    },
                    {
                        name:'周三',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
                    },
                    {
                        name:'周四',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    },
                    {
                        name:'周五',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    },
                    {
                        name:'周六',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
                    },
                    {
                        name:'周日',
                        type:'line',
                        data:[1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
                    }
                ]
            };
            myChart.setOption(option);
        }
    
    function echart7() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart7'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['轻度拥堵','中度拥堵','严重拥堵'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%',
                selected:{
                    '轻度拥堵':true,
                    '中度拥堵':true,
                    '严重拥堵':true}
            },
            grid: {
               // top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#4BF0FF','#FFEA51'],
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
                name: '里程(km)',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                
                //min:1,
                //max:5,
            },
            series: [
                {
                    name:'轻度拥堵',
                    type:'line',
                    data:[25.894,29.084,25.006,25.509,28.09,20.136,22.528]
                },
                {
                    name:'中度拥堵',
                    type:'line',
                    data:[1.317,1.695,2.793,2.339,3.455,2.794,2.335]
                },
                {
                    name:'严重拥堵',
                    type:'line',
                    data:[0.434,1.633,0.193,0.402,0.974,1.224,0.814]
                },
            ],
            
        };
        myChart.setOption(option);
    }


    function echart8() {
        var histogramChart3 = echarts.init(document.getElementById('echart8'));
              histogramChart3.setOption( {
                grid:{
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                tooltip : {
                         trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: "{a}<br/>{b}<br/>{c}%" 
               },
               legend: {
                data:['拥堵里程比例'],
                textStyle : {
                    color : '#ffffff',
                }
            },
                calculable : false,
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日'],
                        axisLine:{
                             lineStyle:{
                                 color: '#87cefa'
                             },
                         },
                         axisLabel : { 
                             textStyle: {
                                 color: '#fff',
                                 fontSize:13
                             }
                         }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            lineStyle:{
                                color: '#87cefa'
                            },
                        },
                        splitLine: {
                            "show": false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            },
                            formatter: function (value) {
                                return value + "%"
                            },
                        },
                    }
                ],
                series : [
                    {
                        name:'拥堵里程比例',
                        type:'bar',
                        stack: '总量',
                       // barWidth:30,
                        itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                        data:[4.029,4.797,3.969,4.013,4.619,3.491,3.605],
                        color: '#FF7F50'
                    }
                ]
              });
            }