<template>
<!--  <div id="box4">-->
<!--    <div>-->
<!--      用户:<input type="text" v-model="user.username"><br>-->
<!--      密码:<input type="password" v-model="user.password">-->
<!--    </div>-->
<!--    <button @click="signIn">登录</button>-->
<!--    <button>注册</button>-->
<!--  </div>-->
  <div class="box4">
    <div class="navigation">
      <div class="logo">
        <div class="img1"><img src="~assets/img/logo.jpg" ></div>
        <div class="dlu"><span>欢迎登陆</span></div>
      </div>
    </div>
    <div class="subject">
      <div class="Info">
        <div class="yonghu">
          <p>用户名</p>
          <input type="text" v-model="user.employeeAccountName" />
        </div>
        <div class="mima">
          <p>密码</p>
          <input type="password" v-model="user.employeeAccountPassword" />
        </div>
        <div class="btn"><button  @click="signIn" style="height: 40px;width: 293px;">登录</button></div>
        <a href="javascript:;" @click="regisTration" class="a" >注册</a>
        <div class="qita">
          <p>使用合作方账号登录网站</p>
          <p>QQ<span>|</span>网易<span>|</span>新浪微博<span>|</span>腾讯微博<span>|</span>新浪微博<span>|</span>腾讯微博</p>
        </div>
      </div>
    </div>
    <div class="stern">
      <div class="ziti1">慕课介绍<span> | </span>慕课公告<span> | </span>招贤纳士<span> | </span>联系我们<span> | </span>客服热线：400-675-1234</div>
      <div class="ziti2"><p>Copyrighspant 2006-2014幕课版权所有 京ICP备09037834号
        京ICP证B1034-8373号 某市公安局XX分局备案编号：123456789123</p></div>
      <div class="tu">
        <div class="tu1"></div>
        <div class="tu2"></div>
        <div class="tu3"></div>
        <div class="tu4"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {loginInformation} from "network/divisionmanagement";

  export default {
    name: "SignIn",
    data(){
      return {
        user:{
          employeeAccountName:'',
          employeeAccountPassword:''
        }
      }
    },
    methods:{
      signIn(){
        // console.log(this.$parent);
        loginInformation(this.user).then(res=>{
          // console.log(res);
          // console.log(falgtt);
          if(res.code==200){
            alert(res.msg)
            this.$parent.username=res.username
            this.$parent.falg='y'
          }else {
            alert(res.msg)
            this.$parent.falg='d'
          }
        })
      },
      regisTration(){
        this.$parent.falg='z'
        // this.$router.push('/registration')
        // console.log(1111);
      }
    }
  }
</script>

<style scoped>
  .box4{
    margin: 0 auto;
    width: 1536px;
    height: 700px;
  }
  .navigation{
    width: 100%;
    height: 100px;
    background-color: #1d7ad9;
  }
  .subject{
    margin: 0 auto;
    width: 430px;
    height: 270px;
    border: 1px #979797 solid;
    margin-top: 12px;
  }
  .stern{
    width: 100%;
    height: 250px;
    background-color: #d4d4d4;
    margin-top: 35px;
  }
  .logo{
    width: 380px;
    height: 70px;
    margin: 0 auto;
    position: relative;
    padding-top: 27px;
  }
  .img1{
    width: 112px;
    height: 59px;
    float: left;
  }
  .dlu{
    float: left;
    height: 50px;
    width: 100px;
    text-align: center;
    font-size: 23px;
    margin-left: 20px;
    color: #fff7ff;
    margin-top: 18px;
  }
  .Info{
    margin: 0 auto;
    margin-top: 15px;
    width: 290px;
    height: 240px;
  }
  .yonghu,.mima,.qita{
    width: 100%;
    height: 50px;
  }
  .mima{
    margin-top: 14px;
  }
  input{
    width: 290px;
    height: 30px;
    font-size: 16px;
  }
  .yonghu p,.mima p,.qita p{
    font-size: 10px;
    color: #868686;
  }
  .btn{
    margin-top: 18px;
  }
  .a{
    float: right;
    font-size: 14px;
    color: #868686;
    padding-right: 2px;
  }
  .qita{
    margin-top: 34px;
  }
  .ziti1,.ziti2{
    text-align: center;
    font-size: 12px;
    color: #000d0e;
  }
  .ziti1{
    padding-top: 60px;
  }
  .ziti2{
    padding-top: 10px;
  }
  .tu{
    margin: 0 auto;
    margin-top: 30px;
    width: 600px;
    height: 46px;
  }
  .tu1,.tu2,.tu3,.tu4{
    width: 128px;
    height: 46px;
    background-image: url(~assets/img/webLogo.jpg);
    float: left;
    margin-left: 20px;
  }
  .ziti2 p{
    word-spacing: 10px;
  }
</style>
