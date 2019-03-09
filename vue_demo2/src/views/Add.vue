<template>
	<div>
		<div>
			<label>标题</label>
			<input type="text" v-model="title">
		</div>
		<div>
			<label>内容</label>
			<input type="text" v-model="content">
		</div>
		<button type="button" @click="add()">添加</button>
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
				fold:true
			}
		},
		methods:{
			add (){
				store.commit('addItem',{
					title:this.title,
					content:this.content,
					fold:this.fold
				})
				this.title=''
				this.content=''
				this.$router.push('/home/list')
			}
		}
	}
</script>
<style scoped>
</style>