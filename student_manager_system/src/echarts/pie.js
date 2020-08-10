import echarts from 'echarts';
export default function () {
    // [{ dom: '', text: '', name: '', type: '' }]
    const { pieObj, data } = this;
    const { dom, text, name, type } = pieObj;
    const myChart = echarts.init(dom);
    let numObj = {},
        legendArr = [],
        seriesArr = [];
    if (type === 'area') {
        for (const item of data) {
            if (!numObj[item.address]) {
                numObj[item.address] = 1;
                legendArr.push(item.address);
            } else {
                numObj[item.address]++;
            }
        }
        for (const prop in numObj) {
            const obj = {};
            obj.value = numObj[prop];
            obj.name = prop;
            seriesArr.push(obj);
        }
    } else if (type === 'sex') {
        legendArr = ["男", "女"];
        for (const item of data) {
            if (!numObj[item.sex]) {
                numObj[item.sex] = 1;
            } else {
                numObj[item.sex]++;
            }
        }
        seriesArr = [{ value: numObj[0], name: "男" }, { value: numObj[1], name: "女" }];
    }
    this.option.legend.data = legendArr;
    this.option.series[0].data = seriesArr;
    this.option.title.text = text;
    this.option.series[0].name = name;
    myChart.setOption(this.option);
}