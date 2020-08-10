<template>
  <div class="pager">
    <a @click="turn(1)" class="pager-item" :class="{ disabled: nowPage === 1 }"
      >首页</a
    >
    <a
      @click="turn(nowPage - 1)"
      class="pager-item"
      :class="{ disabled: nowPage === 1 }"
      >上一页</a
    >
    <a
      class="pager-item"
      @click="turn(item)"
      :class="{ active: item === nowPage }"
      v-for="item in numbers"
      :key="item"
    >
      {{ item }}
    </a>
    <a
      @click="turn(nowPage + 1)"
      class="pager-item"
      :class="{ disabled: nowPage === totalPage }"
      >下一页</a
    >
    <a
      @click="turn(totalPage)"
      class="pager-item"
      :class="{ disabled: nowPage === totalPage }"
      >尾页</a
    >
    <span class="pager-text">
      <i>{{ totalPage === 0 ? 0 : nowPage }}</i>
      /
      <i>{{ totalPage }}</i></span
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['nowPage', 'totalPage', 'panelNumber']),
    numbers() {
      //用于得到一个数字的数组
      //最小页码数字
      let min = this.nowPage - Math.floor(this.panelNumber / 2);
      if (min < 1) {
        min = 1;
      }
      //最大页码数字
      let max = min + this.panelNumber - 1;
      if (max > this.totalPage) {
        max = this.totalPage;
      }
      const arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  methods: {
    turn(n) {
      if (n < 1) {
        n = 1;
      } else if (n > this.totalPage) {
        n = this.totalPage;
      }
      this.$store.dispatch("turnPage", n);
    }
  }
};
</script>

<style scoped>
.pager {
    text-align: center;
    margin-bottom: 100px;
}

.pager .pager-item {
    display: inline-block;
    padding: 5px 7px;
    border: 1px solid #ccc;
    margin: 8px;
    cursor: pointer;
    color: rgb(96, 96, 224);
}

.pager .pager-item.disabled {
    color: #ccc;
    cursor: not-allowed;
}

.pager .pager-item.active {
    color: #f40;
    border: none;
    cursor: auto;
}

.data-container {
    width: 1000px;
    margin: 30px auto;
}

.data-container .data{
    overflow: hidden;
    border-bottom: 1px dashed #ccc;
    padding: 30px 0;
}

.data-container .poster{
    width: 150px;
    height: 200px;
    float: left;
    margin-right: 20px;
}

.data-container .poster img{
    width: 100%;
    height: 100%;
}

.data-container .words{
    overflow: hidden;
    line-height: 1.5;
}

.data-container .words .title{
    margin: 0;
    margin-bottom: 10px;
}

.data-container .words .attach{
    color: #888;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.data-container .words .attach span{
    margin-right: 20px;
}

.data-container .words .desc{
    color: #666;
}
</style>
