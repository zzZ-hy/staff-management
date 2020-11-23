<template>
  <div id="app1" class="app1">
    <h2>员工添加</h2>
    <div class="Save_exit">
      <div>
        <a href="javascript:;" @click="newEmployee">保存</a>
        <a href="javascript:;" @click="secede">退出</a>
      </div>
    </div>
    <div class="name_sex">
      <span>姓名：</span><input type="text" v-model.lazy="employeeMessage.name">
      性别：<select id="sex" v-model.lazy="employeeMessage.sex">
      <option value="1">男</option>
      <option value="0">女</option>
    </select>
    </div>
    <div class=" joinTime">
      <span>出生日期：</span><input type="text" v-model.lazy="employeeMessage.birthday">
      <span>入部时间：</span><input type="text" v-model.lazy="employeeMessage.workTime">
    </div>
    <div class="Department">
      所属部门：
      <select  v-model.lazy="employeeMessage.departId">
        <option>----请选择----</option>
        <option v-for="(item,index) in division" :key="index" :value="item.departmentId">{{item.departmentName}}</option>
      </select>
    </div>
  </div>
</template>

<script>
  import {divisionManagement,addEmployee} from "network/divisionmanagement";

  export default {
    name: "EmployeesToIncrease",
    data(){
      return {
        employeeMessage:{birthday:'',departId:0,id:0,name:'',sex:1,workTime:''},
        division:[]
      }
    },
    methods:{
      newEmployee(){
        // console.log(this.employeeMessage);
        addEmployee(this.employeeMessage).then(res=>{
          alert('保存成功')
          this.$router.push('/staffmanagement')
        })
      },
      secede(){
        this.$router.push('/staffmanagement')
      }
    },
    created() {
      divisionManagement().then(res=>{
        this.division=res.data.list
      })
    }
  }
</script>

<style scoped>
  h2{
    font-size: 40px;
    margin-left: 150px;
  }
  .Save_exit div{
    margin-left: 400px;
  }
  .name_sex input{
    margin-left: 40px;
  }
  .joinTime input{
    margin-left: 8px;
  }
  .joinTime,.name_sex,.Department,.Save_exit{
    margin-top: 10px;
  }
  .app1 a{
    margin-left: 10px;
  }
</style>
