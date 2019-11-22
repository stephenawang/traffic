
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
        [36.2321,36.6593,36.6814,37.5194,37.6099,37.0127,38.1673]

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
                min: 36,
                max: 39,
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
            min:26,
            //max:5,
        },
        series: [
            {
                name:'周一',
                type:'line',
                data:[39.526,41.000,42.361,41.289,42.125,43.738,38.800,30.150,26.625,32.421,32.775,35.750,36.184,35.325,36.375,35.525,33.875,33.550,33.657,34.100,34.157,35.944,37.000,37.888]
            },
            {
                name:'周二',
                type:'line',
                data:[38.950,40.475,40.594,42.350,39.090,43.916,38.275,32.894,30.815,32.263,34.763,35.400,36.425,37.078,34.578,34.225,34.325,32.368,35.800,33.825,36.425,35.789,42.300,40.555]
            },
            {
                name:'周三',
                type:'line',
                data:[39.184,41.850,43.000,41.625,39.976,43.026,38.650,34.350,30.625,32.850,33.300,34.925,35.425,35.550,36.725,35.075,34.550,32.725,33.000,35.875,37.800,38.900,34.900,36.515]
            },
            {
                name:'周四',
                type:'line',
                data:[39.800,37.450,39.289,37.952,43.972,49.810,40.000,31.357,29.125,33.775,36.500,40.000,39.825,40.425,39.500,36.634,33.707,31.325,34.075,35.500,36.047,40.325,37.631,38.184]
            },
            {
                name:'周五',
                type:'line',
                data:[40.200,43.200,40.775,38.970,44.945,42.775,41.761,34.950,31.400,33.775,36.000,37.710,39.000,38.972,39.700,36.900,34.075,32.675,33.250,36.175,35.325,35.525,35.657,39.368] 
            },
            {
                name:'周六',
                type:'line',
                data:[41.625,39.526,36.375,36.846,40.675,39.750,40.119,34.725,33.650,35.325,35.400,39.675,37.950,39.775,38.150,38.025,33.525,31.025,34.825,34.684,34.264,38.500,36.631,37.111]
            },
            {
                name:'周日',
                type:'line',
                data:[37.975,41.428,37.605,42.256,46.857,38.263,40.071,36.575,36.450,37.350,37.575,38.550,40.050,40.225,39.700,39.550,34.900,32.525,32.775,34.400,37.425,37.736,38.071,38.970]
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
        [12249,12102,12045,11809,12241,11324,10406]

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
                min: 10000,
                max: 13000,
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
                data:[1,1,1,1,1,1,1,5,5,4,4,3,2,3,3,3,3,3,2,2,2,1,1,1]
            },
            {
                name:'周二',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,4,3,3,2,2,3,4,3,3,2,2,2,1,1,1]
            },
            {
                name:'周三',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,5,3,3,2,2,3,3,3,4,2,2,2,1,1,1]
            },
            {
                name:'周四',
                type:'line',
                data:[1,1,1,1,1,1,2,5,5,4,3,2,2,2,3,3,3,3,2,1,2,1,1,1]
            },
            {
                name:'周五',
                type:'line',
                data:[1,1,1,1,1,1,2,4,5,4,4,3,2,3,3,3,3,3,3,2,2,2,1,1]
            },
            {
                name:'周六',
                type:'line',
                data:[1,1,1,1,1,1,1,4,4,4,3,2,2,2,2,3,3,4,2,2,2,2,1,1]
            },
            {
                name:'周日',
                type:'line',
                data:[1,1,1,1,1,1,1,2,4,3,3,2,2,2,3,2,3,3,2,2,2,2,1,1]
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
                    data:[3.891,2.559,3.000,2.928,2.498,2.413,1.802],
                    color: '#FF1493'
                },
                {
                    name:'中度拥堵',
                    type:'bar',
                    stack: '总量',
                    //barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.282,0.095,0.139,0.233,0.056,0.064,0.000],
                    color :'#7FFF00'
                },
                {
                    name:'严重拥堵',
                    type:'bar',
                    stack: '总量',
                   // barWidth:30,
                    itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                    data:[0.210,0.009,0.000,0.025,0.000,0.000,0.000],
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
                        data:[2,1,1,1,1,1,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    },
                    {
                        name:'周二',
                        type:'line',
                        data:[2,1,1,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1]
                    },
                    {
                        name:'周三',
                        type:'line',
                        data:[2,1,1,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    },
                    {
                        name:'周四',
                        type:'line',
                        data:[2,2,2,2,1,1,2,2,3,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2]
                    },
                    {
                        name:'周五',
                        type:'line',
                        data:[1,1,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    },
                    {
                        name:'周六',
                        type:'line',
                        data:[1,2,2,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    },
                    {
                        name:'周日',
                        type:'line',
                        data:[2,1,2,1,1,2,1,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2]
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
                    data:[21.828,14.325,16.802,16.222,13.858,13.649,10.116]
                },
                {
                    name:'中度拥堵',
                    type:'line',
                    data:[1.079,0.356,0.531,0.889,0.196,0.248,0]
                },
                {
                    name:'严重拥堵',
                    type:'line',
                    data:[0.541,0.029,0,0.072,0,0,0]
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
                        data:[21.464,14.122,15.406,14.001,11.266,11.377,8.084],
                        color: '#FF7F50'
                    }
                ]
              });
            }