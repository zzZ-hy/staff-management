<template>
  <div id="app2" class="app2">
    <h2>员工删除</h2>
    <div class="Save_exit">
      <div>
        <a href="javascript:;" @click="modification">保存</a>
        <a href="javascript:;" @click="freturn">退出</a>
        <a href="javascript:;" @click="employeestodelete">删除</a>
      </div>
    </div>
    <div class="name_sex">
      <span>姓名：</span><input type="text" v-model.lazy="employeemessage.name">
      性别：<select id="sex" v-model.lazy="employeemessage.sex">
      <option value="1">男</option>
      <option value="0">女</option>
    </select>
    </div>
    <div class=" joinTime">
      <span>出生日期：</span><input type="text" v-model.lazy="employeemessage.birthday">
      <span>入部时间：</span><input type="text" v-model.lazy="employeemessage.workTime">
    </div>
    <div class="Department">
      所属部门：
      <select v-model.lazy="employeemessage.departId">
        <option>----请选择----</option>
        <option v-for="(item,index) in divisions" :key="index" :value="item.departmentId">{{item.departmentName}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  import {divisionManagement, remove, queryStaff, modifyTheEmployee} from "network/divisionmanagement";

  export default {
    name: "EmployeesToDelete",
    data() {
      return {
        employeemessage: {birthday: '', departId: 0, id: 0, name: '', sex: 1, workTime: ''},
        birthday:'',
        departId:0,
        name:'',
        sex:1,
        workTime:'',
        divisions: [],
        id: [],
        indexid: 0
      }
    },
    methods: {
      employeestodelete() {
        this.id.push(this.indexid)
        remove(this.id).then(res => {
          this.employeemessage = {}
          alert('删除成功')
          this.$router.push('/staffmanagement')
        })
      },
      modification() {
        if (this.birthday === this.employeemessage.birthday &&
            this.departId === this.employeemessage.departId &&
            this.name === this.employeemessage.name &&
            this.sex === this.employeemessage.sex &&
            this.workTime === this.employeemessage.workTime) {
          alert('不能和以前的相同')
          return
        }
        modifyTheEmployee(this.employeemessage).then(res => {
          alert('修改成功')
          this.$router.push('/staffmanagement')
        })
        // console.log(this.employeemessage);
      },
      freturn() {
        this.$router.push('/staffmanagement')
      }
    },
    created() {
      this.indexid = this.$root.id
      // console.log(this.id);
      divisionManagement().then(res => {
        this.divisions = res.data.list
      });
      queryStaff(this.indexid).then(res => {
        // console.log(res);
        this.employeemessage = res.data
        this.birthday=res.data.birthday
        this.departId=res.data.departId
        this.name=res.data.name
        this.sex=res.data.sex
        this.workTime=res.data.workTime
      })
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 40px;
    margin-left: 150px;
  }

  .Save_exit div {
    margin-left: 400px;
  }

  .name_sex input {
    margin-left: 40px;
  }

  .joinTime input {
    margin-left: 8px;
  }

  .joinTime, .name_sex, .Department, .Save_exit {
    margin-top: 10px;
  }

  .app2 a {
    margin-left: 10px;
  }
</style>
