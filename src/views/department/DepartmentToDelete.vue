<template>
  <div id="box3">
    <h2>部门修改</h2>
    <div id="aam">
      <div>
        <a href="javascript:;" @click="modification">保存</a>
        <a href="javascript:;" @click="getBack">返回</a>
        <a href="#" @click="remove">删除</a>
      </div>
    </div>
    <div id="department">
      部门名称:<input type="text" v-model="name">
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
  import {redelete,inquire,recompose} from "network/divisionmanagement";

  export default {
    name: "DepartmentToDelete",
    data(){
      return {
        departmentId:[],
        arr:0,
        name:'',
        oldName:'',
        single:{}
      }
    },
    created() {
      this.arr=this.$root.index
      inquire(this.arr).then(res=>{
        // console.log(res);
        // this.single=res.data
        this.name=res.data.departmentName
        this.oldName=res.data.departmentName
      })
    },
    methods:{
      remove(){
        this.departmentId.push(this.arr)
        redelete(this.departmentId).then(res=>{
          alert('删除成功')
          this.$router.push('/divisionmanagement')
          this.departmentId=[]
        })
      },
      getBack(){
        this.$router.push('/divisionmanagement')
        this.departmentId=[]
      },
      modification(){
        if (this.name===this.oldName){
          alert('不能和以前的名字相同')
          return
        }
        recompose(this.arr,this.name).then(res=>{
          alert('修改成功')
          this.$router.push('/divisionmanagement')
        })
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
