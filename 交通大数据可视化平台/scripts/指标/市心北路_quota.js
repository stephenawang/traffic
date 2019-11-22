
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
        [43.8453, 43.8633, 43.8487, 43.9059, 43.4872, 44.5616, 45.3689]

    ]
    for(var v=0; v < legendData.length ; v++){
        var serie = {
            name:legendData[v],
            type: 'line',
            symbol:"circle",
            symbolSize:10,
            //itemStyle : { normal: {label : {show: true, position: 'insideTop'}}},
            data: metaDate[v],
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
                max: 46,
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
            max:55,
        },
        series: [
            {
                name:'周一',
                type:'line',
                data:[47.885,49.425,50.870,50.964,47.941,52.039,49.866,40.208,37.033,38.587,38.775,43.375,44.377,42.275,40.041,40.216,39.741,37.983,39.991,41.890,43.418,42.305,47.151,47.972]
            },
            {
                name:'周二',
                type:'line',
                data:[50.158,50.775,48.570,49.275,48.122,49.787,48.225,42.359,37.614,39.526,39.596,42.691,43.983,42.280,41.298,40.958,39.508,39.210,38.925,41.773,42.427,42.552,47.083,46.629]
            },
            {
                name:'周三',
                type:'line',
                data:[48.280,48.775,47.966,51.625,49.795,50.766,47.825,42.466,38.250,38.725,41.732,41.763,44.473,41.841,41.625,39.825,41.026,39.058,39.412,40.957,41.500,42.000,45.206,46.401]
            },
            {
                name:'周四',
                type:'line',
                data:[47.900,49.316,49.026,46.685,49.855,50.877,50.300,42.055,37.525,39.458,41.616,43.780,44.641,43.275,41.964,40.550,39.444,38.233,39.200,40.640,42.198,42.605,45.545,48.850]
            },
            {
                name:'周五',
                type:'line',
                data:[46.616,47.058,49.358,50.100,49.291,52.433,49.611,41.258,37.458,38.033,39.315,42.473,43.640,43.407,41.225,40.416,39.516,38.608,39.091,40.966,41.077,42.095,44.925,44.991]
            },
            {
                name:'周六',
                type:'line',
                data:[49.271,49.758,48.581,46.594,50.601,49.078,47.926,43.441,40.466,41.974,43.136,44.252,45.060,44.093,44.313,43.319,40.408,39.273,40.084,42.646,42.515,42.572,44.214,46.240]
            },
            {
                name:'周日',
                type:'line',
                data:[48.633,49.552,49.463,48.504,49.075,50.194,49.809,46.296,43.596,44.366,44.566,44.166,45.166,44.250,44.583,44.583,41.400,40.141,40.975,42.310,42.539,41.763,46.057,47.127]
            },
        ],
        
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
        [16293, 21148, 19433, 17192, 19394, 17678, 13930]
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
                max: 22000,
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
                data:[1,1,1,1,1,1,1,3,4,5,5,5,3,5,5,5,5,5,4,5,4,4,2,1]
            },
            {
                name:'周二',
                type:'line',
                data:[1,1,1,1,1,1,1,3,5,5,5,5,4,5,5,5,5,5,5,5,5,4,4,1]
            },
            {
                name:'周三',
                type:'line',
                data:[1,1,1,1,1,1,1,3,4,5,5,5,5,5,5,5,5,4,5,3,3,3,2,1]
            },
            {
                name:'周四',
                type:'line',
                data:[1,1,1,1,1,1,1,3,4,5,5,5,4,4,5,5,5,5,5,3,3,3,2,1]
            },
            {
                name:'周五',
                type:'line',
                data:[1,1,1,1,1,1,1,3,5,5,5,5,5,5,4,5,4,5,5,5,4,4,2,1]
            },
            {
                name:'周六',
                type:'line',
                data:[1,1,1,1,1,1,1,3,3,4,3,5,5,5,5,5,4,5,5,5,5,4,2,1]
            },
            {
                name:'周日',
                type:'line',
                data:[1,1,1,1,1,1,1,2,3,4,3,4,3,4,4,4,4,4,4,3,4,3,2,1]
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
                data:[0.941,0.709,0.982,0.650,0.833,0.277,0.046],
                color: '#FF1493'
            },
            {
                name:'中度拥堵',
                type:'bar',
                stack: '总量',
                //barWidth:30,
                itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                data:[0.142,0.006,0.000,0.031,0.004,0.001,0.000],
                color :'#7FFF00'
            },
            {
                name:'严重拥堵',
                type:'bar',
                stack: '总量',
               // barWidth:30,
                itemStyle : { normal: {label : {show: false, position: 'inside'}}},
                data:[0.006,0.040,0.000,0.000,0.000,0.000,0.000],
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
                    data:[1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,2,1,1,1,1,1]
                },
                {
                    name:'周二',
                    type:'line',
                    data:[1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,2,1,1,1,1,1]
                },
                {
                    name:'周三',
                    type:'line',
                    data:[1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,1,2,2,1,1,1,1,1]
                },
                {
                    name:'周四',
                    type:'line',
                    data:[1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,2,2,1,1,1,1,1]
                },
                {
                    name:'周五',
                    type:'line',
                    data:[1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,2,1,1,1,1,1]
                },
                {
                    name:'周六',
                    type:'line',
                    data:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1]
                },
                {
                    name:'周日',
                    type:'line',
                    data:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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
                data:[15.558,11.904,16.601,10.755,13.974,4.734,0.795]
            },
            {
                name:'中度拥堵',
                type:'line',
                data:[1.636,0.069,0.000,0.360,0.045,0.021,0.000]
            },
            {
                name:'严重拥堵',
                type:'line',
                data:[0.055,0.133,0.000,0.000,0.000,0.000,0.000]
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
                    data:[4.684,3.295,4.485,3.008,3.707,1.309,0.219],
                    color: '#FF7F50'
                }
            ]
          });
        }