<template>
  <div class="show-content" v-if="show" :class="animate">
    <div class="info-content" :class="'style-'+type">
      <span style="margin-right: 15px;" >{{ typeValue }}</span>
      <span>{{ msg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      flag: true
    };
  },
  computed: {
    animate() {
      return this.flag ? "fade-in" : "fade-out";
    }
  }
};
</script>

<style>
.info-content {
  padding: 15px 25px;
  color: white;
  font-weight: 700;
  border-radius: 6px;
}
.style-success {
    background-color: greenyellow;
}

.style-fail {
    background-color: #f20;
}

.style-info {
    background-color: #0ff;
}
.show-content {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes fadeIn {
  0% {
    top: 0;
    opacity: 0;
  }
  100% {
    top: 50px;
    opacity: 1;
  }
}
@keyframes fadeOut {
  100% {
    top: 0;
    opacity: 0;
  }
  0% {
    top: 50px;
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 0.4s;
}

.fade-out {
  animation: fadeOut 0.4s;
}
</style>
