<template>
  <div class="tab-content-item echarts" id="student-echarts">
    <div class="area" v-echarts:areaEcharts="stuData"></div>
    <div class="sex" v-echarts:sexEcharts="stuData"></div>
  </div>
</template>

<script>
import Echarts from '../echarts';

export default {
    data() {
        return {
            areaEcharts: {
                text: '成才教育学生地区分布统计',
                name: '地区分布',
                type: 'area'
            },
            sexEcharts: {
                text: '成才教育学生性别分布统计',
                name: '性别分布',
                type: 'sex'
            },
            stuData: []
        }
    }
};
</script>
