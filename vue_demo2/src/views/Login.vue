<template>
	<div id="login_wrapper">
		<p>欢迎登录</p>
		<div class="login">
			<form v-if="!isReg">
				<div>
					<label>用户名:</label>
					<input type="text" v-model="name">
				</div>
				<div>
					<label>密&nbsp&nbsp码:</label>
					<input type="password" v-model="password">
				</div>
				<div class="button_wrap">
					<button type="button" @click="login()">登录</button>
				    <button type="button" @click="reg()">注册</button>
				</div>
			</form>
			<form v-else>
				<div>
					<label>用户名:</label>
					<input type="text" v-model="name">
				</div>
				<div>
					<label>输入密码:</label>
					<input type="password" v-model="password">
				</div>
				<div>
					<label>确认密码:</label>
					<input type="password" v-model="repeat">
				</div>
				<div class="button_wrap">
					<button type="button" @click="addUser()">确定</button>
					<button type="button" @click="cancel()">取消</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	export default {
		name:"Login",
		data (){
			return {
				isReg:false,
				name:'',
				password:'',
				repeat:''
			}
		},
		methods:{
			login () {
				if(localStorage.getItem("name")===this.name && localStorage.getItem("password")===this.password && this.name!==''){
					this.name=''
					this.password=''
					this.$router.push('/home/list')
				}else if(localStorage.getItem("name")===this.name && this.name!==''){
					this.password=''
					alert("密码输入错误")
				}else {
					alert("请先注册")
					this.name=''
					this.password=''
				}
			},
			reg () {
				this.name=''
				this.password=''
				this.isReg=true
			},
			addUser () {
				if(this.password===this.repeat){
				  localStorage.setItem("name",this.name)
				  localStorage.setItem("password",this.password)
				  this.name=''
				  this.password=''
				  this.repeat=''
				  this.isReg=false
				}else{
					alert("密码输入不正确");
				}
			},
			cancel () {
				this.name=''
				this.password=''
				this.repeat=''
				this.isReg=false
			}
		}
	}
</script>
<style scoped>
#login_wrapper{
  width:80%;
  height:100%;
  margin:auto;
  padding-top:160px;
}
.login{
	width:100%;
	height:180px;
	border-radius:12px;
	border:2px solid pink;
	box-shadow:0px 0px 10px 0px #ccc;
	padding:10px;
}
p{
	font-size:18px;
	padding:6px 10px;
}
.login div {
	margin-top:10px;
}
input{
	width:68%;
	height:26px;
}
label{
	display:inline-block;
	width:30%;
	margin-right:2%;
	height:26px;
	line-height:26px;
	text-align:right;
}

button{
	width:40%;
	height:28px;
	margin-left:10%;
	background:pink;
	border:1px solid #ccc;
	border-radius:4px;


}



</style>