<template>
  <div class="modal" id="modal">
    <!-- 遮罩层 -->
    <div
      class="mask"
      id="mask"
      @click="$store.commit('setShowModal', false)"
    ></div>
    <!-- 编辑内容区 -->
    <div class="modal-content">
      <div class="title">
        <h2>编辑信息</h2>
      </div>
      <form id="edit-form">
        <div class="form-con">
          <div class="item">
            <label for="sNo">学号：</label>
            <input
              type="text"
              id="sNo"
              name="sNo"
              :value="editStu.sNo"
              @input="getValue($event, 'sNo')"
            />
          </div>
          <div class="item">
            <label for="name">姓名：</label
            ><input
              type="text"
              id="name"
              name="name"
              :value="editStu.name"
              @input="getValue($event, 'name')"
            />
          </div>
          <div class="item section">
            <label for="">性别：</label>
            <div class="con">
              <input
                type="radio"
                name="sex"
                id="male"
                value="1"
                :checked="editStu.sex == 1"
                @change="user.sex = 1"
              />
              <label for="male" class="label-sex">男</label>
              <input
                type="radio"
                name="sex"
                id="female"
                value="0"
                :checked="editStu.sex == 0"
                @change="user.sex = 0"
              />
              <label for="female" class="label-sex">女</label>
            </div>
          </div>
          <div class="item">
            <label for="birth">出生日期：</label
            ><input
              type="date"
              id="birth"
              name="birth"
              :value="editStu.birth"
              @input="getValue($event, 'birth')"
            />
          </div>
          <div class="item">
            <label for="phone">联系方式：</label
            ><input
              type="text"
              id="phone"
              name="phone"
              :value="editStu.phone"
              @input="getValue($event, 'phone')"
            />
          </div>
          <div class="item">
            <label for="address">家庭住址：</label
            ><input
              type="text"
              id="address"
              name="address"
              :value="editStu.address"
              @input="getValue($event, 'address')"
            />
          </div>
          <div class="item">
            <label for="date">报名日期：</label
            ><input
              type="date"
              id="date"
              name="date"
              :value="editStu.date"
              @input="getValue($event, 'date')"
            />
          </div>
          <div class="item btn">
            <input
              type="button"
              class="submit"
              id="edit-submit-btn"
              value="提交"
              @click="commit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  computed: {
    editStu() {
      return this.$store.state.editStu;
      //  ...mapState(['editStu'])
    }
  },
  methods: {
    getValue(e, prop) {
      this.user[prop] = e.target.value;
    },
    commit() {
      // user ,editUser
      const user = Object.assign({}, this.editStu, this.user);
      this.$store.dispatch("updateStu", user).then(options => {
        this.$Toast(options);
      });
    }
  }
};
</script>

<style></style>
