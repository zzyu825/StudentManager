import pie from './pie';

const Echarts = class {
    constructor({pieObj, data}) {
        this.option = null;
        this.pieObj = pieObj;
        this.data = data;
        this.init();
    }

    init() {
        this.option = {
            title: {
                text: '',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: []
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }
}

Echarts.prototype.pie = pie;

export default Echarts;