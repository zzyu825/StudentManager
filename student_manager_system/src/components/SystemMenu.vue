<template>
  <nav>
    <div class="list">
      <h1 class="title disabled">学生管理</h1>
      <ul class="list-group" id="list-group">
        <router-link
          class="list-item"
          to="/ListStu"
          tag="li"
        >
          学生列表
        </router-link>
        <router-link 
          class="list-item"
          to="/AddStu"
          tag="li"
        >
          新增学生
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
