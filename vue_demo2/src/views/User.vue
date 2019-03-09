<template>
	<div class="hole_wrap">
		<div class="title_wrap">
			<p>标题:</p>
			<input type="text" v-model="title" class="inp_title">
		</div>
		<div class="content_wrap">
			<p>内容:</p>
			<textarea v-model="content" rows="5" class="inp_content"></textarea>
		</div>
		<button type="button" @click="add()" class="add_button">添加</button>
		<div class="success" v-if="isCommit">
			<div class="wrap_hidde">
				<span class="success_hidde" @click="hidde()">×</span></div>
			<p>创建成功~~</p>
		</div>
	</div>
</template>
<script>
import store from '@/store'
	export default {
		name:"Add",
		store,
		data (){
			return {
				title:'',
				content:'',
				fold:true,
				isCommit:false
			}
		},
		methods:{
			add (){
				if(this.title!==''&&this.content!==''){
					store.commit('addItem',{
					title:this.title,
					content:this.content,
					fold:this.fold
				})
				this.isCommit=true
				}else {
					return
				}
			},
			hidde (){
				this.title=''
				this.content=''
				this.isCommit=false
				this.$router.push('/home/list')
			}
		}
	}
</script>
<style scoped>
.hole_wrap{
	width:90%;
	height:400px;
	margin:10px auto;
	border:1px solid pink;
	border-radius:6px;
	padding:10px;
	box-shadow:1px 1px 6px #ccc;

}
.success{
	width:46%;
	height:80px;
	background:#fff;
	border:1px solid pink;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-100px);
	border-radius:6px;
	box-shadow:0 0 10px #ccc;
	z-index:2;
	text-align:center;
	padding:5px;
}
.wrap_hidde{
	text-align:right;
	margin-bottom:10px;
}
.success_hidde{
	display:inline-block;
	width:20px;
	height:20px;
	border-radius:50%;
	border:1px solid pink;
	font-size:18px;
	color:pink;
	line-height:16px;
	text-align:center;	
}
.success_hidde:hover{
	background:pink;
	color:#fff;
	cursor:pointer;
}
p{
	font-size:18px;
	margin-bottom:2px;
}
.inp_title{
    width:50%;
    height:26px;
    border:1px solid pink;
    border-radius:3px;
    padding-left:10px;
}
.title_wrap{
	margin-bottom:20px;
}
.inp_content{
	width:100%;
	border:1px solid pink;
	border-radius:3px;
	padding:10px;
	line-height:20px;
	font-size:16px;
}
.add_button{
	width:80px;
	height:30px;
	background:pink;
	border-radius:4px;
	font-size:16px;
	letter-spacing:6px;
    text-shadow:2px -1px 2px #fff;
    margin-top:10px;
	border:1px solid #ccc;

}


</style>