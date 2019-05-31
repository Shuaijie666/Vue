<!-- html部分 -->
<template>
	<div id="app">
		<h1>流程能耗对比图</h1>
		<div style="text-align: left;margin-bottom: 20px;">
			年份：<el-date-picker v-model="year" type="year" value-format='yyyy' placeholder="请选择年份" style='width:200px'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		  <ve-radar :data="chartData"></ve-radar>
		 <h1>设备类别能耗比对比图</h1>
		<ve-scatter :data="chartData"></ve-scatter>
		<h1>设备能耗比对比图</h1>
		<ve-funnel :data="chartData"></ve-funnel>
		<h1>设备单位作业量耗电量对比图</h1>
		<ve-ring :data="chartData"></ve-ring>
		<h1>设备单位作业量耗水量对比图</h1>
		<ve-scatter :data="chartData"></ve-scatter>
		<h1>设备单位作业量耗油量对比图</h1>
		<ve-histogram :data="chartData5"></ve-histogram>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				year:'2018',
				chartData:{},
				chartData1:{},
				chartData2:{},
				chartData3:{},
				chartData4:{},
				chartData5:{}
			};
		},
		methods:{
			search(){
				// 后端网址
					var url = this.baseUrl+"/energyConsume/flowConsume"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.chartData = res.data;
					})
					// 后端网址
					var url1 = this.baseUrl + "/energyConsume/devTypeConsume"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url1, this.$qs.stringify(data), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res => {
						this.chartData1 = res.data;
					})
					
					// 后端网址
					var url2 = this.baseUrl + "/energyConsume/devConsume"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url2, this.$qs.stringify(data), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res => {
						this.chartData2 = res.data;
					})
					
					// 后端网址
					var url2 = this.baseUrl + "/energyConsume/electricConsume"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url2, this.$qs.stringify(data), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res => {
						this.chartData3 = res.data;
					})
					
					// 后端网址
					var url2 = this.baseUrl + "/energyConsume/waterConsume"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url2, this.$qs.stringify(data), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res => {
						this.chartData4 = res.data;
					})
					
						// 后端网址
					var url2 = this.baseUrl + "/energyConsume/oilConsume"
					// 传递给后端的数据
					var data = {year:this.year};
					this.$axios.post(url2, this.$qs.stringify(data), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res => {
						this.chartData5 = res.data;
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
