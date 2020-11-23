<template>
  <div id="box2">
    <h2>部门添加</h2>
    <div id="aam">
      <div>
        <a href="javascript:;" @click="submit">保存</a>
        <a href="javascript:;" @click="backtrack">返回</a>
      </div>
    </div>
    <div id="department">
      部门名称:<input type="text" v-model.lazy="message">
    </div>
    <div id="box1">
      <div id="departmentT">
        部门介绍:
      </div>
      <div id="departmentO"><input type="text" value="ckeditor"></div>
    </div>

  </div>
</template>

<script>
  import {save} from "network/divisionmanagement";

  export default {
    name: "DepartmentToAdd",
    data(){
      return {
        message:''
      }
    },
    methods:{
      submit(){
        save(this.message).then(res=>{
          alert('保存成功！')
          this.$router.push('/divisionmanagement')
        })
      },
      backtrack(){
        this.$router.push('/divisionmanagement')
      }
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #box2{
    width: 550px;
    overflow: hidden;
  }
  h2{
    text-align: center;
    margin-top: 10px;
    font-weight: normal;
    font-size: 24px;
    color: darkgray;
  }
  #aam{
    width: 550px;
    overflow: hidden;
  }
  #aam div{
    float: right;
  }
  #aam div a{
    margin-left: 20px;
  }
  #department{
    margin-top: 50px;
    margin-bottom: 5px;
  }
  #department input{
    margin-left: 10px;
  }
  #box1{
    overflow: hidden;
  }
  #departmentT{
    float: left;
  }
  #departmentO{
    margin-top: 25px;
    margin-left: 10px;
    float: left;
  }
  #departmentO input{
    width: 300px;
    height: 80px;
  }
</style>
