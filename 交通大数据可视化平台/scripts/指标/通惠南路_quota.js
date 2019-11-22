
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
        [36.2578,36.8594,35.8951,36.2828,35.7493,37.6258,37.6272]

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
                min: 35,
                max: 38,
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
            min:28,
            //max:5,
        },
        series: [
            {
                name:'周一',
                type:'line',
                data:[37.789,41.712,44.329,43.119,42.991,40.152,34.900,30.435,30.319,32.166,34.932,35.203,37.601,36.057,36.121,34.947,34.542,29.172,30.365,34.127,34.734,37.674,40.485,39.801]
            },
            {
                name:'周二',
                type:'line',
                data:[41.192,38.753,42.200,40.695,40.672,42.238,38.714,30.806,31.428,32.495,34.090,36.984,37.261,36.511,39.000,35.890,33.219,32.151,34.428,34.781,38.476,39.443,38.042,37.285]
            },
            {
                name:'周三',
                type:'line',
                data:[37.383,38.592,38.238,42.822,37.390,41.107,37.228,30.742,32.613,31.699,33.047,35.296,36.520,35.596,34.885,35.578,34.648,31.729,33.690,35.518,33.419,36.255,37.133,38.344]
            },
            {
                name:'周四',
                type:'line',
                data:[40.128,42.613,38.215,39.712,38.666,40.843,34.708,32.125,30.522,31.833,34.491,36.227,37.277,36.283,36.622,34.912,34.833,33.050,33.614,35.280,34.877,36.616,39.964,40.617]
            },
            {
                name:'周五',
                type:'line',
                data:[38.849,42.161,38.581,37.357,39.642,37.750,38.396,30.125,28.785,33.285,33.244,34.500,35.928,34.420,37.302,34.801,32.035,31.692,33.000,33.902,33.032,37.619,37.155,42.285]
            },
            {
                name:'周六',
                type:'line',
                data:[]
            },
            {
                name:'周日',
                type:'line',
                data:[]
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
        [17893,17821,18030,18008,18177,17371,16080]

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
                min: 15000,
                max: 19000,
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
                data:[1,1,1,1,1,1,2,5,5,5,5,5,4,4,5,5,5,5,5,4,4,3,2,1]
            },
            {
                name:'周二',
                type:'line',
                data:[1,1,1,1,1,1,1,4,5,5,5,5,4,4,4,5,5,5,5,4,3,3,2,1]
            },
            {
                name:'周三',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,5,5,5,4,4,5,5,5,5,5,4,4,3,2,1]
            },
            {
                name:'周四',
                type:'line',
                data:[1,1,1,1,1,1,2,4,5,5,5,4,4,4,4,5,5,5,5,3,4,3,2,1]
            },
            {
                name:'周五',
                type:'line',
                data:[1,1,1,1,1,1,2,4,5,5,5,5,4,4,5,5,5,5,5,4,4,3,2,1]
            },
            {
                name:'周六',
                type:'line',
                data:[1,1,1,1,1,1,1,4,5,5,5,5,4,4,5,4,5,5,4,4,4,4,2,1]
            },
            {
                name:'周日',
                type:'line',
                data:[1,1,1,1,1,1,1,3,4,5,4,4,4,4,4,5,5,5,5,4,3,3,2,1]
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
                    data:[1.462,0.897,1.344,1.106,1.112,0.046,0.364],
                    color: '#FF1493'
                },
                {
                    name:'中度拥堵',
                    type:'bar',
                    stack: '总量',
                    //barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.195,0.041,0.031,0.104,0.090,0.017,0.016],
                    color :'#7FFF00'
                },
                {
                    name:'严重拥堵',
                    type:'bar',
                    stack: '总量',
                   // barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.613,0.144,0.106,0.000,0.005,0.000,0.074],
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
                        data:[1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,1,1]
                    },
                    {
                        name:'周二',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,1]
                    },
                    {
                        name:'周三',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,1,1,1,2,1,2,2,2,1,2,1,1,1]
                    },
                    {
                        name:'周四',
                        type:'line',
                        data:[1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,2,2,2,2,1,2,1,1,1]
                    },
                    {
                        name:'周五',
                        type:'line',
                        data:[1,1,1,1,1,1,1,2,2,2,2,2,1,2,1,2,2,2,2,2,2,1,1,1]
                    },
                    {
                        name:'周六',
                        type:'line',
                        //data:[1,1,1,1,1,2,1,2,2,2,5,2,1,1,5,5,5,5,5,5,5,1,1,1]
                    },
                    {
                        name:'周日',
                        type:'line',
                       // data:[1,5,5,5,5,5,2,2,2,1,2,1,1,1,1,2,2,2,2,2,1,1,1,1]
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
                    data:[23.042,14.613,21.704,17.721,17.992,0.792,6.032]
                },
                {
                    name:'中度拥堵',
                    type:'line',
                    data:[1.824,0.418,0.289,0.928,0.889,0.184,0.145]
                },
                {
                    name:'严重拥堵',
                    type:'line',
                    data:[3.34,0.891,0.5,0,0.036,0,0.481]
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
                        data:[4.992,2.818,4.285,3.392,4.382,1.820,2.640],
                        color: '#FF7F50'
                    }
                ]
              });
            }