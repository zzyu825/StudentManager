<template>
  <table id="students-table" border="0" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="table-body">
        <tr 
            v-for="stu of stuList"
            :key="stu.id"
        >
            <td>{{ stu.sNo }}</td>
            <td>{{ stu.name }}</td>
            <td>{{ stu.sex ? "女" : "男" }}</td>
            <td>{{ stu.email }}</td>
            <td>{{ age(stu.birth) }}</td>
            <td>{{ stu.phone }}</td>
            <td>{{ stu.address }}</td>
            <td>
                <button class="btn edit">编辑</button>
                <button class="btn del">删除</button>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    created () {
        // this.$store.dispatch('getStuList');
        this.getStuList();
    },
    computed: {
        ...mapState(['stuList'])
    },
    methods: {
        age(birth) {
            return new Date().getFullYear() - birth;
        },
        ...mapActions(['getStuList'])
    }
};
</script>

<style></style>
