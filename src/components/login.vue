<template>
    <div>
        <headerComponent v-bind:message="showLogin==true?'登录':'注册'"></headerComponent>
        <div class="login-wrap" v-show="showLogin">
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="loginName">
            <input type="password" placeholder="请输入密码" v-model="password">
            <div id="box">
                <input type="text" placeholder="输入右侧验证码" @keyup.enter="login" v-model="checkCode"/>
                <img @click="veriCodeImg(imgUrl)" v-bind:src="imgUrl" alt="图片验证码"/>
            </div>
            <button @click="login">登录</button>
            <span @click="ToRegister">没有账号？马上注册</span>
        </div>
        <router-view></router-view>
        <div class="register-wrap" v-show="showRegister">
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newLoginName">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button @click="register">注册</button>
            <span @click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
</template>
<style scoped>
    /*在这里写css样式*/
    #box input {
        width: 50%;
        float: left;
        max-width: 135px;
    }
    #box img {
        height: 40px;
    }
    .login-wrap,.register-wrap{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    input{
        display:block;
        width:250px;
        height:40px;
        line-height:40px;
        margin:0 auto 10px;
        outline:none;
        border:1px solid #888;
        padding:10px;
        box-sizing:border-box;
    }
    p{
        color:red;
    }
    button{
        display:block;
        width:250px;
        height:40px;
        line-height: 40px;
        margin:0 auto 5px;
        border:none;
        background-color:orange;
        color:#fff; font-size:16px;
    }
    span{
        cursor:pointer;
    }
    span:hover{
        color:#41b883;
    }
</style>
<script type="text/javascript-6">
import {setCookie,getCookie} from '../assets/js/cookie.js'
import headerComponent from './header'
import homepageComponent from '@/components/homepage'

let Base64 = require('js-base64').Base64;
// 这里写逻辑代码
export default{
    components: {
    headerComponent
    },
    data(){
        return{
            imgUrl: "http://www.andclass.cn/webCenter/captcha/getCheckCode.action?t=" + Math.random(),
            showLogin: true,
            showRegister: false,
            showTishi: false,
            tishi: '',
            loginName: '',
            checkCode: '',
            password: '',
            newLoginName: '',
            newPassword: ''
        }
    },
    mounted(){
    /*页面挂载获取cookie，如果存在loginName的cookie，则跳转到主页，不需登录*/
    if(getCookie('loginName')){
        this.$router.push('/homepage')
    }
    },
    methods:{
        veriCodeImg(imgUrl) {
            this.imgUrl="http://www.andclass.cn/webCenter/captcha/getCheckCode.action?t=" + Math.random()
        },
        ToRegister(){
            this.showRegister = true
            this.showLogin = false
        },
         ToLogin(){
            this.showRegister = false
            this.showLogin = true
        },
    register(){
    if(this.newUsername == "" || this.newPassword == ""){
        alert("请输入用户名或密码")
    }else{
        let data = {'username':this.newUsername,'password':this.newPassword}
        this.$http.post('http://localhost/vueapi/index.php/Home/user/register',data).then((res)=>{
            console.log(res)
            if(res.data == "ok"){
                this.tishi = "注册成功"
                this.showTishi = true
                this.username = ''
                this.password = ''
                 /*注册成功之后再跳回登录页*/
                setTimeout(function(){
                    this.showRegister = false
                    this.showLogin = true
                    this.showTishi = false
                }.bind(this),1000)
            }
        })
    }
},
    login(){
        if(this.loginName == "" || this.password == ""){
            alert("请输入用户名或密码")
        }else if(this.checkCode == ""){
            alert("请输入数字验证码")
        }else{
            let data = {'loginName':Base64.encode(this.loginName),'userPassword':Base64.encode(this.password),'loginCheckCode':this.checkCode,'isAutoLogin':'N'}
            console.log(data)
            console.log(this)

            /*接口请求*/
            this.$http.post('',data).then((res)=>{
                console.log(res)
             /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
              if(res.data == -1){
                  this.tishi = "该用户不存在"
                  this.showTishi = true
              }else if(res.data == 0){
                  this.tishi = "密码输入错误"
                  this.showTishi = true
              }else if(res.data == 'admin'){
              /*路由跳转this.$router.push*/
                  this.$router.push('/main')
              }else{
                  this.tishi = "登录成功"
                  this.showTishi = true
                  setCookie('loginName',this.loginName,1000*60)
                  setTimeout(function(){
                      this.$router.push({path:'../../home'})
                  }.bind(this),1000)
              }
          })
      }
    }
  }
}
</script>