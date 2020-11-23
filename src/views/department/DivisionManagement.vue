<template>
  <div id="box">
    <h2>部门管理</h2>
    <a href="javascript:;" id="add" @click="departmentToAdd">添加</a>
    <table id="tab" border="1" cellspacing="0" cellpadding="1">
      <thead>
      <tr>
        <th>ID</th>
        <th>部门名称</th>
        <th>编辑</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in branch" :key="index">
        <td>{{item.departmentId}}</td>
        <td>{{item.departmentName}}</td>
        <td><a href="javascript:;" @click="rmdelete(item)"><img src="~assets/img/编辑.png" alt=""></a></td>
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
  import {divisionManagement} from 'network/divisionmanagement'

  export default {
    name: "DivisionManagement",
    data(){
      return {
        branch:[]
      }
    },
    methods:{
      departmentToAdd(){
        this.$router.push('/departmenttoadd')
      },
      rmdelete(item){
        this.$root.index=item.departmentId
        this.$root.name=item.departmentName
        // console.log(this.$root.index);
        // console.log(id);
        this.$router.push('/departmenttodelete')
      }
    },
    created() {
      divisionManagement().then(res=>{
        // console.log(res);
        this.branch=res.data.list
      })
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #box{
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
