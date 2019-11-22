
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
        [42.8672,43.2699,43.8665,43.2853,43.5805,43.7203,44.0305]

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
                min: 42,
                max: 45,
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
            min:35,
            //max:5,
        },
        series: [
            {
                name:'周一',
                type:'line',
                data:[46.078,47.191,48.564,47.403,45.791,46.269,43.933,38.350,38.133,39.175,40.900,42.450,43.403,42.191,42.175,41.850,42.233,39.466,41.026,41.101,41.924,42.250,42.196,45.203]
            },
            {
                name:'周二',
                type:'line',
                data:[44.841,47.241,46.210,48.600,43.482,47.814,45.575,39.543,38.763,39.842,41.631,42.425,43.908,43.219,43.938,41.958,42.041,39.789,40.083,39.983,42.741,44.491,44.933,46.370]
            },
            {
                name:'周三',
                type:'line',
                data:[49.008,47.883,48.433,45.116,43.846,46.408,44.866,40.000,38.250,40.716,40.767,42.925,44.240,43.525,42.500,42.058,42.645,38.475,40.862,41.991,43.116,43.220,44.598,42.722]
            },
            {
                name:'周四',
                type:'line',
                data:[46.716,49.333,46.692,45.230,44.925,46.333,45.583,40.365,39.400,40.966,43.291,43.722,45.008,44.975,43.464,43.375,43.154,41.125,41.783,42.000,42.474,44.288,43.226,45.666]
            },
            {
                name:'周五',
                type:'line',
                data:[47.991,46.666,47.533,44.016,43.815,48.883,45.579,40.241,38.625,40.658,41.973,43.921,44.157,43.537,44.133,43.208,43.533,40.491,40.191,40.550,42.178,43.890,44.460,45.427]
            },
            {
                name:'周六',
                type:'line',
                data:[47.586,47.900,47.991,46.446,42.422,47.946,47.796,40.475,39.491,41.379,42.526,44.389,43.750,44.068,44.379,43.500,41.250,39.105,39.076,40.482,43.614,43.508,44.990,45.888]
            },
            {
                name:'周日',
                type:'line',
                data:[45.686,49.735,47.571,48.051,47.360,47.840,45.676,42.510,43.838,42.800,43.290,43.380,44.580,44.190,44.900,44.940,43.030,40.250,39.840,40.585,42.821,43.421,44.390,45.588]
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
        [13660,13419,13487,13368,13609,13292,12610]

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
                min: 12000,
                max: 14000,
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
                data:[1,1,1,1,1,1,1,3,4,5,4,3,3,4,4,4,4,5,3,3,2,2,1,1]
            },
            {
                name:'周二',
                type:'line',
                data:[1,1,1,1,1,1,1,3,3,5,5,4,3,3,4,4,4,5,4,2,2,2,1,1]
            },
            {
                name:'周三',
                type:'line',
                data:[1,1,1,1,1,1,1,3,3,5,4,4,3,3,4,4,4,5,4,3,3,2,1,1]
            },
            {
                name:'周四',
                type:'line',
                data:[1,1,1,1,1,1,1,3,3,5,4,3,3,3,4,4,4,5,3,2,3,2,1,1]
            },
            {
                name:'周五',
                type:'line',
                data:[1,1,1,1,1,1,1,3,4,5,4,4,3,4,4,4,3,4,4,3,3,2,1,1]
            },
            {
                name:'周六',
                type:'line',
                data:[1,1,1,1,1,1,1,3,3,4,4,4,4,3,4,4,4,4,4,3,3,2,1,1]
            },
            {
                name:'周日',
                type:'line',
                data:[1,1,1,1,1,1,1,2,3,4,3,3,3,3,4,4,4,3,3,3,2,2,1,1]
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
                    data:[0.341,0.188,0.250,0.138,0.257,0.124,0.120],
                    color: '#FF1493'
                },
                {
                    name:'中度拥堵',
                    type:'bar',
                    stack: '总量',
                    //barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.001,0.001,0.001,0.000,0.000,0.000,0.000],
                    color :'#7FFF00'
                },
                {
                    name:'严重拥堵',
                    type:'bar',
                    stack: '总量',
                   // barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.000,0.000,0.000,0.000,0.000,0.000,0.000],
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
                        data:[1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1]
                    },
                    {
                        name:'周二',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,2,1,1,1,1]
                    },
                    {
                        name:'周三',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1]
                    },
                    {
                        name:'周四',
                        type:'line',
                        data:[1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    },
                    {
                        name:'周五',
                        type:'line',
                        data:[1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    },
                    {
                        name:'周六',
                        type:'line',
                        data:[1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1]
                    },
                    {
                        name:'周日',
                        type:'line',
                        data:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
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
                    data:[5.896,3.271,4.208,2.368,4.404,2.141,2.014]
                },
                {
                    name:'中度拥堵',
                    type:'line',
                    data:[0.01,0.011,0.011,0,0,0,0]
                },
                {
                    name:'严重拥堵',
                    type:'line',
                    data:[0,0,0,0,0,0,0]
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
                        data:[1.718,0.953,1.277,0.731,1.435,0.692,0.635],
                        color: '#FF7F50'
                    }
                ]
              });
            }