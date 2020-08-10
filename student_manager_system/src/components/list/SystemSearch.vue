<template>
  <div class="search-wrap">
    <label for="search-inp">
      搜索：
    </label>
    <input
      type="text"
      class="inp"
      id="search-inp"
      :value="searchValue"
      @input="insert($event)"
    />
    <button class="search-btn" id="search-btn" @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  methods: {
    insert(e) {
      this.$store.commit("setSearchValue", e.target.value);
    },
    search() {
      this.$store.dispatch("searchStu");
    }
  },
  computed: {
    searchValue() {
      return this.$store.state.searchValue;
    }
  }
};
</script>

<style></style>
