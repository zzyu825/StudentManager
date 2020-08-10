<template>
  <!-- 新增学生展示区域 -->
  <div class="tab-content-item s-add" id="add-student">
    <form id="add-student-form">
      <div class="item">
        <label for="sNo">学号：</label
        ><input type="text" id="sNo" name="sNo" v-model="user.sNo" />
      </div>
      <div class="item">
        <label for="name">姓名：</label
        ><input type="text" id="name" name="name" v-model="user.name" />
      </div>
      <div class="item section">
        <label for="">性别：</label>
        <div class="con">
          <input
            type="radio"
            name="sex"
            id="male"
            value="1"
            v-model="user.sex"
          />
          <label for="male" class="label-sex">男</label>
          <input
            type="radio"
            name="sex"
            id="female"
            value="0"
            v-model="user.sex"
          />
          <label for="female" class="label-sex">女</label>
        </div>
      </div>
      <div class="item">
        <label for="birth">出生日期：</label
        ><input type="date" id="birth" name="birth" v-model="user.birth" />
      </div>
      <div class="item">
        <label for="phone">联系方式：</label
        ><input type="text" id="phone" name="phone" v-model="user.phone" />
      </div>
      <div class="item">
        <label for="address">家庭住址：</label
        ><input
          type="text"
          id="address"
          name="address"
          v-model="user.address"
        />
      </div>
      <div class="item">
        <label for="date">报名日期：</label
        ><input type="date" id="date" name="date" v-model="user.date" />
      </div>
      <div class="btn item">
        <input
          type="button"
          class="add"
          id="add-student-btn"
          @click="addStu"
          value="提交"
        />
        <input type="button" class="reset" @click="reset" value="重置" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        sex: 1,
        phone: "",
        address: "",
        birth: "",
        date: "",
        sNo: ""
      }
    };
  },
  methods: {
    addStu() {
      this.$axios.addStu(this.user).then(data => {
        alert(data.data.msg);
        this.$router.push("/ListStu");
      });
    },
    reset() {
      this.user = {
        sNo: "",
        name: "",
        sex: 0,
        phone: "",
        address: "",
        birth: "",
        date: "",
      };
    }
  }
};
</script>

<style></style>
