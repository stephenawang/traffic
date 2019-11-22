
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
        [32.1950,32.1283,32.0180,32.1469,32.2906,32.5483,32.3557]

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
                min: 30,
                max: 33,
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
            min:22,
            //max:5,
        },
        series: [
            {
                name:'周一',
                type:'line',
                data:[36.715,37.847,39.520,33.593,37.532,40.872,34.752,26.260,27.409,26.857,28.614,31.729,32.431,32.640,30.010,28.510,27.760,27.197,29.131,29.115,30.535,33.511,33.431,37.752]
            },
            {
                name:'周二',
                type:'line',
                data:[36.700,36.879,34.073,37.246,32.909,38.333,32.947,25.320,25.405,26.405,26.926,29.152,31.467,32.328,30.434,28.763,29.402,27.554,29.641,28.536,26.000,32.193,33.520,35.113]
            },
            {
                name:'周三',
                type:'line',
                data:[37.747,35.533,34.155,41.314,38.954,36.737,34.806,27.970,24.193,26.614,28.234,29.287,31.900,31.147,30.720,28.239,29.955,27.552,29.787,26.800,29.815,31.473,35.562,36.341]
            },
            {
                name:'周四',
                type:'line',
                data:[37.450,35.755,37.650,37.565,38.013,37.329,33.050,30.391,26.212,29.395,28.260,31.293,30.941,30.750,28.628,29.855,29.729,27.850,29.988,28.589,28.460,33.274,34.901,36.379]
            },
            {
                name:'周五',
                type:'line',
                data:[36.663,36.894,36.140,38.693,34.969,41.238,32.436,27.307,27.964,27.375,28.946,31.372,33.277,31.802,30.306,30.891,30.310,27.490,28.416,28.547,30.014,32.476,36.000,36.615]
            },
            {
                name:'周六',
                type:'line',
                data:[36.404,35.862,35.260,33.500,34.526,35.700,34.702,32.785,29.590,28.500,31.411,29.695,32.833,30.590,30.555,29.052,29.450,27.117,30.263,29.166,31.461,30.619,35.083,33.928]
            },
            {
                name:'周日',
                type:'line',
                data:[37.173,32.777,38.466,35.071,34.187,33.133,35.761,32.150,29.645,27.888,28.557,28.397,30.187,29.884,30.829,29.180,29.484,29.000,31.133,27.466,30.196,31.425,36.777,37.283]
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
        [17674,17793,17383,17314,17623,17650,16574]

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
                min: 16000,
                max: 18000,
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
                data:[1,1,1,1,1,1,2,5,5,5,5,5,3,4,5,5,5,5,4,4,4,4,2,1]
            },
            {
                name:'周二',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,5,5,5,4,4,5,5,5,5,4,4,4,4,2,1]
            },
            {
                name:'周三',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,5,5,5,4,4,5,5,5,5,4,3,4,4,2,1]
            },
            {
                name:'周四',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,5,5,5,4,3,5,5,5,5,5,3,4,3,2,1]
            },
            {
                name:'周五',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,5,5,5,4,4,5,5,4,5,5,4,4,3,2,1]
            },
            {
                name:'周六',
                type:'line',
                data:[1,1,1,1,1,1,2,4,5,5,5,5,5,4,4,5,4,5,4,4,4,3,2,1]
            },
            {
                name:'周日',
                type:'line',
                data:[1,1,1,1,1,1,1,3,5,5,5,5,4,4,5,4,5,4,4,5,4,3,2,1]
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
                    data:[2.645,2.433,2.283,1.583,1.420,0.258,0.847],
                    color: '#FF1493'
                },
                {
                    name:'中度拥堵',
                    type:'bar',
                    stack: '总量',
                    //barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.190,0.379,0.128,0.143,0.217,0.002,0.085],
                    color :'#7FFF00'
                },
                {
                    name:'严重拥堵',
                    type:'bar',
                    stack: '总量',
                   // barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.161,0.331,0.004,0.018,0.000,0.000,0.020],
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
                        data:[1,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
                    },
                    {
                        name:'周二',
                        type:'line',
                        data:[1,1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
                    },
                    {
                        name:'周三',
                        type:'line',
                        data:[1,1,2,1,1,1,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1]
                    },
                    {
                        name:'周四',
                        type:'line',
                        data:[1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
                    },
                    {
                        name:'周五',
                        type:'line',
                        data:[1,1,1,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1]
                    },
                    {
                        name:'周六',
                        type:'line',
                        data:[1,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2]
                    },
                    {
                        name:'周日',
                        type:'line',
                        data:[1,2,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1]
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
                    data:[28.268,26.009,24.837,17.027,15.352,2.674,9.439]
                },
                {
                    name:'中度拥堵',
                    type:'line',
                    data:[1.300,2.473,0.817,1.027,1.364,0.012,0.614]
                },
                {
                    name:'严重拥堵',
                    type:'line',
                    data:[0.603,1.245,0.016,0.081,0.000,0.000,0.071]
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
                        data:[6.780,7.811,5.944,4.397,4.839,1.880,3.900],
                        color: '#FF7F50'
                    }
                ]
              });
            }