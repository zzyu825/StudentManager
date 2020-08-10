<template>
  <div class="tab-content-item">
    <SystemSearch />
    <SystemTable />
    <TurnPage />
  </div>
</template>

<script>
import SystemSearch from "../components/list/SystemSearch";
import SystemTable from "../components/list/SystemTable";
import TurnPage from "../components/list/TurnPage";
export default {
  components: {
    SystemSearch,
    SystemTable,
    TurnPage
  }
};
</script>

<style></style>
