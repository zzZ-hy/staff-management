<template>
  <div id="box1">
    <h2>员工管理</h2>
    <a href="javascript:;" id="add" @click="add">添加</a>
    <table id="tab" border="1" cellspacing="0" cellpadding="1">
      <thead>
      <tr>
        <th>编号</th>
        <th>员工姓名</th>
        <th>性别</th>
        <th>出身日期</th>
        <th>入职时间</th>
        <th>所属部门</th>
        <th>编辑</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in staff" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td v-if="item.sex==0?sex='女':sex='男'">{{sex}}</td>
        <td>{{item.birthday}}</td>
        <td>{{item.workTime}}</td>
        <td>{{item.departmentName}}</td>
        <td><a href="javascript:;" @click="copyreader(item)"><img src="~assets/img/编辑.png" alt=""></a></td>
      </tr>
      </tbody>
    </table>
    <div id="form_feed_out">
      <span>第1/3页</span>
      <a href="#">[首页]</a>
      <a href="#">[上一页]</a>
      <a href="#">[下一页]</a>
      <a href="#">[尾页]</a>
    </div>
  </div>
</template>

<script>
  import {staffManagement} from 'network/divisionmanagement'

  export default {
    name: "StaffManagement",
    data(){
      return {
        staff:[],
        set:''
      }
    },
    methods:{
      add(){
        this.$router.push('/employeestoincrease')
      },
      copyreader(item){
        this.$root.id=item.id
        this.$router.push('/employeestodelete')
      }
    },
    created() {
      staffManagement().then(res=>{
        // console.log(res);
        this.staff=res.page.list
      })
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #box1{
    width: 1000px;
    overflow: hidden;
  }
  h2{
    text-align: center;
    margin-top: 10px;
    font-weight: normal;
    font-size: 24px;
    color: darkgray;
  }
  #add{
    float: right;
    margin-top: 5px;
  }
  #tab{
    margin: 0 auto;
    margin-top: 50px;
  }
  #tab th{
    background-color: skyblue;
  }
  #tab th,#tab td{
    width: 500px;
    height: 30px;
    text-align: center;
  }
  #form_feed_out{
    float: right;
    margin-top: 20px;
  }
  #form_feed_out a{
    margin-right: 5px;
  }
</style>
