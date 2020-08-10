import Vue from 'vue';
import Echarts from '../echarts';

Vue.directive('echarts', {
    bind(el, { value, arg }) {
        console.log(value,arg)
        const echarts = new Echarts({
            pieObj: {
                dom: el,
                text: arg.text,
                name: arg.name,
                type: arg.type
            },
            data: value
        });
        echarts.pie();
    }
})