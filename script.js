// 初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    initializeInstagramGrowth();
});

function initializeInstagramGrowth() {
    const chart = echarts.init(document.getElementById('instagramGrowth'));
    
    const dates = ['Jan 5', 'Jan 9', 'Jan 13', 'Jan 17', 'Jan 20', 'Jan 23', 'Jan 25', 'Jan 24', 'Jan 29'];
    const gainedData = [15000, 25000, 18000, 38000, 58000, 68000, 62000, 18000, 12000];
    const lostData = [-6000, -8000, -5000, -25000, -15000, -12000, -10000, -5000, -8000];
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: {
                lineStyle: {
                    color: '#dfe6e9'
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#dfe6e9'
                }
            },
            axisLabel: {
                formatter: function(value) {
                    if (value >= 1000) {
                        return (value / 1000) + 'K';
                    }
                    return value;
                }
            }
        },
        series: [
            {
                name: 'Gained',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#4299e1'
                },
                data: gainedData
            },
            {
                name: 'Lost',
                type: 'bar',
                stack: 'total',
                itemStyle: {
                    color: '#48bb78'
                },
                data: lostData
            }
        ]
    };
    
    chart.setOption(option);
    
    // 响应式处理
    window.addEventListener('resize', function() {
        chart.resize();
    });
}
