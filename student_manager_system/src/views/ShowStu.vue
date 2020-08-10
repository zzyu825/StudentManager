<template>
  <div class="tab-content-item echarts" id="student-echarts">
    <!-- <div class="area" v-echarts:areaEcharts="stuAllList"></div>
    <div class="sex" v-echarts:sexEcharts="stuAllList"></div> -->
    <div class="area" ref="area"></div>
    <div class="sex" ref="sex"></div>
  </div>
</template>

<script>
import Echarts from "../echarts";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      areaEcharts: {
        text: "成才教育学生地区分布统计",
        name: "地区分布",
        type: "area"
      },
      sexEcharts: {
        text: "成才教育学生性别分布统计",
        name: "性别分布",
        type: "sex"
      }
    };
  },
  computed: mapState(["stuAllList"]),
  created() {
    this.getAllStuList().then(() => {
      const { areaEcharts, sexEcharts } = this;
      const echarts1 = new Echarts({
        pieObj: {
          dom: this.$refs.area,
          text: areaEcharts.text,
          name: areaEcharts.name,
          type: areaEcharts.type
        },
        data: this.stuAllList
      });
      const echarts2 = new Echarts({
        pieObj: {
          dom: this.$refs.sex,
          text: sexEcharts.text,
          name: sexEcharts.name,
          type: sexEcharts.type
        },
        data: this.stuAllList
      });
      echarts1.pie();
      echarts2.pie();
    });
  },
  methods: mapActions(["getAllStuList"])
};
</script>
