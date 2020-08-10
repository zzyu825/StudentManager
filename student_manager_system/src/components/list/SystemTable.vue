<template>
  <table id="students-table" border="0" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>联系方式</th>
        <th>家庭住址</th>
        <th>报名日期</th>
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
            <td>{{ stu.sex ? "男" : "女" }}</td>
            <td>{{ age(stu.birth) }}</td>
            <td>{{ stu.phone }}</td>
            <td>{{ stu.address }}</td>
            <td>{{ date(stu.date) }}</td>
            <td>
                <button class="btn edit" @click="editStu(stu)">编辑</button>
                &nbsp;
                <button class="btn del" @click="delStu(stu.sNo)">删除</button>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions, mapMutations } from 'vuex';
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
            return new Date().getFullYear() - new Date(birth).getFullYear();
        },
        date(d) {
            const data = moment(d).format('YYYY-MM-DD');
            return data;
        },
        editStu(stu) {
            this.setShowModal(true);
            this.setEditStu(stu);
        },
        delStu(sno) {
            const isDel = confirm(`确认删除学号为${sno}的学生吗？`);
            isDel ? this.$store.dispatch("detStu", sno) : '';
        },
        ...mapActions(['getStuList']),
        ...mapMutations(["setShowModal", "setEditStu"])
    }
};
</script>

<style></style>
