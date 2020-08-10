<template>
  <div class="tab-content-item">
    <SystemSearch />
    <SystemTable />
    <TurnPage />
    <transition>
      <show-modal v-if="$store.state.showModal"></show-modal>
    </transition>
  </div>
</template>

<script>
import SystemSearch from "../components/list/SystemSearch";
import SystemTable from "../components/list/SystemTable";
import TurnPage from "../components/list/TurnPage";
import ShowModal from "../components/list/ShowModal";
export default {
  components: {
    SystemSearch,
    SystemTable,
    TurnPage,
    ShowModal
  }
};
</script>

<style>
.v-enter, .v-leave-to {
  top: -100%;
  height: 0;
  opacity: 0;
}

.v-enter-to {
  top: 0;
  height: 100%;
  opacity: 1;
}
.v-enter-active, .v-leave-active {
  transition: all 0.5s;
}

.v-leave {
  top: 0;
  height: 100%;
  opacity: 1;
}
</style>
