<template>
	<div>
		<h1 style="text-align: center">能耗信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='电耗' v-model='search_consumename'></el-input>
			<!-- <el-input style='width:160px' placeholder='行业' v-model='search_industry'></el-input> -->
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="consumeid" label="ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="80"></el-table-column>
				<el-table-column prop="electric" label="电耗" width="80"></el-table-column>
				<el-table-column prop="water" label="水耗" width="120"></el-table-column>
				<el-table-column prop="oil" label="油耗" width="120"></el-table-column>
				<el-table-column prop="reportid" label="报岗id" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.consumeid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				search_consumename:'',
				list:[]
			};
		},
		methods:{
			//增加
			add(){
				// 路由跳转
				this.$router.push({path:'/consumeadd'})
			},
			//通过id删除
			del(consumeid){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/delete"
				// 传递给后端的数据
				var data = {consumeid:consumeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();
				})
			},
			update(row){
				this.$router.push({name:'consumeedit',params:{row:row.consumeid}})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/search"
				// 传递给后端的数据
				var data = {electric:this.search_consumename};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.list = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
		}
		
	}
</script>

<style>

</style>
