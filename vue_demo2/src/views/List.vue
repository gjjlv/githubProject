<template>
	<div class="wrap">
		<p v-if="pageLists.length!==0?false:true" class="null_type">空空如也~~</p>
		<ul v-else>
			<li v-for="(item,index) in pageLists" :key="index">
				<div class="wrap_item">
					<p>{{item.title}}</p>
					<div class="content" :class="{'fold':item.fold}">
						{{item.content}}
					</div>
					<div class="item_fold">
						<span @click="handleFold(index)" v-if="item.fold">>></span>
						<span @click="handleFold(index)" v-else><<</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import store from '@/store'
	export default {
		name:"List",
		store,
		data () {
			return {
				item_list:[]
			}
		},
		computed:{
			pageLists:function(){
                    return store.state.lists
			}
		},
		methods:{
			handleFold (index) {
				this.item_list.push(...store.state.lists)
			    this.item_list[index].fold=!this.item_list[index].fold
			}
		}
	}

</script>
<style scoped>
.null_type{
	color:pink;
	padding-left:10px;
	font-size:18px;
}
.wrap{
	padding-top:10px;
}
.wrap_item{
	width:90%;
	border:1px solid pink;
	box-shadow:0 0 10px 0 #ccc;
	border-radius:3px;
	margin:auto;
	margin-top:4px;	
	padding:0 4px;
}
.wrap_item p{
	border-bottom:1px solid pink;
	height:26px;
	line-height:26px;
	font-size:18px;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.content{
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
}
.fold{
	-webkit-line-clamp:2;
}
.item_fold{
	text-align:right;
	height:26px;
	line-height:26px;
	width:100%;
	boder:1px solid #ccc;
}
span{
    color:pink;
    font-size:18px;
    font-weight:600; 
    display:inline-block;
}
span:hover{
	cursor:pointer;
}
ul:after{
	content:'';
	height:48px;
	display:inline-block;
}
</style>