<template>
  <div class="wrapper">
    <SystemHeader />
    <SystemMenu />
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SystemHeader from "./components/SystemHeader";
import SystemMenu from "./components/SystemMenu";
export default {
  components: {
    SystemHeader,
    SystemMenu
  }
};
</script>
