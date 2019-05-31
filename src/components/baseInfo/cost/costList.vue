<!-- html部分 -->
<template>
	<div id="app">
		<h1>成本核算信息</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			年份：<el-date-picker v-model="year" type="year" value-format='yyyy' placeholder="请选择年份" style='width:200px'></el-date-picker>
			<el-button @click='search'>查询</el-button>
			<!-- <button @click="changeType">切换图表类型</button> -->
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
				<el-table-column prop="consume" label="能耗(折标煤)" width="120"></el-table-column>
				<el-table-column prop="cost" label="维修成本" width="180"></el-table-column>
			</el-table>
		</center>
		
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				year:'2018',
				list:[]
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/devInfo/cost"
					// 传递给后端的数据
					var data = {year:this.year};
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
<!-- css部分 -->
<style>

</style>
