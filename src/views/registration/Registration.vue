<template>
  <div class="box6">
    <h1>用户注册</h1>
    <p>设置用户名：<input type="text" v-model="register.employeeAccountName" @blur="regName()" />{{format}}</p>
    <p style="letter-spacing: 2.5px;">设置密码：<input type="text" v-model="register.employeeAccountPassword" @blur="regPassword()" />{{formatp}}</p>
    <button :disabled="falgbtn" @click="registeredSuccessfully" style="margin-top: 40px;width: 150px;height: 40px;">注册</button>
    <button @click="goBack" style="margin-top: 40px;width: 150px;height: 40px;">返回</button>
  </div>
</template>

<script>
  import {reSuccessfully} from "network/divisionmanagement";

  export default {
    name: "Registration",
    data() {
      return {
        register: {
          employeeAccountName: '',
          employeeAccountPassword: '',
        },
        format: '',
        formatp:'',
        regname:/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
        regpassword:/^[0-9a-zA-Z]{5,16}$/,
        falgbtn:false,
        rname:true,
        rpasseord:true
      }
    },
    methods: {
      registeredSuccessfully() {
        reSuccessfully(this.register).then(res => {
          if (res.code == 200) {
            console.log(res);
            alert(res.msg)
            this.$parent.falg = 'd'
          } else {
            console.log(res);
            alert(res.msg)
          }
        })
      },
      goBack() {
        this.$parent.falg = 'd'
      },
      regName(){
        if (this.regname.test(this.register.employeeAccountName)){
          this.format='格式正确'
          this.rname=true
          if (this.rpasseord&&this.rname){
            this.falgbtn=false
          }
        }else{
          this.format='格式错误'
          this.rname=false
          if (!this.rpasseord||!this.rname){
            this.falgbtn=true
          }
        }
      },
      regPassword(){
        if (this.regpassword.test(this.register.employeeAccountPassword)){
          this.formatp='格式正确'
          this.rpasseord=true
          if (this.rpasseord&&this.rname){
            this.falgbtn=false
          }
        }else{
          this.formatp='格式错误'
          this.rpasseord=false
          if (!this.rpasseord||!this.rname){
            this.falgbtn=true
          }
        }
      }
    }
  }
</script>

<style scoped>
  .box6 {
    width: 500px;
    height: 300px;
    margin: 0 auto;
    background-color: #87CEEB;
    text-align: center;
    margin-top: 50px;
  }

  input {
    width: 250px;
    height: 25px;
  }

  h1 {
    font-size: 24px;
    color: #fff;
  }
</style>
