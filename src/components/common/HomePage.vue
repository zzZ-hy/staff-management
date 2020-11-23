<template>
  <div id="app" >
    <div class="TopBanner"><p>欢迎您:{{name}}</p></div>
    <div class="NavigationBar" v-cloak>
      <span><img src="~assets/img/base.gif" alt=""><p>员工管理系统</p></span>
      <ul  class="department">
        <div>
          <button @click="ChangeState"><p>{{addSub[folderIndex]}}</p></button>
          <img :src="folder[folderIndex]" alt="">人力资源部
        </div>
        <li class="management" v-show="state[folderIndex]" @click="department"><img src="~assets/img/page.gif" alt="">部门管理</li>
        <li class="management" v-show="state[folderIndex]" @click="employee"><img src="~assets/img/page.gif" alt="">员工管理</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import DivisionManagement from "views/department/DivisionManagement";
  import StaffManagement from "views/employee/StaffManagement";

  export default {
    name: "HomePage",
    components:{
      DivisionManagement,
      StaffManagement
    },
    data(){
      return{
        state:[false,true],
        addSub:['+','-'],
        folder:['./img/folder.gif','./img/folderopen.gif'],
        folderIndex:0,
        path:'',
        name:''
      }
    },
    methods:{
      ChangeState:function(){
        if (this.folderIndex==0){
          this.folderIndex=1;
        }else{
          this.folderIndex=0;
        }
      },
      department(){
        this.path='/divisionmanagement'
        this.$router.push(this.path)
      },
      employee(){
        this.path='/staffmanagement'
        this.$router.push(this.path)
      }
    },
    created() {
      this.name=this.$parent.username
      this.path='/'
      this.$router.push(this.path)
    }
  }
</script>

<style scoped>
  #app{
    width: 1600px;
    height: 800px;
    margin: 0 auto;
  }
  .TopBanner{
    height: 150px;
    width: 1600px;
    background-color: #0099ff;
    color: white;
    border-bottom: #333333 solid;
    text-align: center;
  }
  .TopBanner p{
    padding-top: 100px;
  }
  .NavigationBar{
    width: 150px;
    height: 650px;
    background-color: #def0fc;
    border: #d4d4d4 solid;
    font-size: 14px;
    float: left;
  }
  .NavigationBar img{
    float: left;
    margin-top: 5px;
  }
  .NavigationBar p{
    margin-top:3px;
  }
  .department button{
    float: left;
    width: 15px;
    height: 15px;
    margin-top: 3px;
  }
  .department button p{
    margin-top: -5px;
  }
  .department li{
    margin-top: 0px;
  }
  .department div{
    margin-top: 3px;
  }
  .department img{
    margin-left: 5px;
    margin-top: 0px;
  }
  .management{
    margin-left: 30px;
  }
  .information{
    width: 800px;
    height: 500px;
    border: #d4d4d4 solid;
  }
</style>
