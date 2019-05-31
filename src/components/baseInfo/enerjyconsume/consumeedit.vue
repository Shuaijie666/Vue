<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改能耗信息</h1>
		
		<el-row>
		<el-col :span="12"><el-select v-model='devid' style='width: 300px; margin-top: 20px;' placeholder='设备名称'>
		<el-option v-for='(item,index) in dljarr' :value="item.devid" :key="item.devname" :label='item.devname' >{{item.devname}}</el-option>
		</el-select></el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='电耗' v-model='electric'></el-input> </el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='水耗' v-model='water'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='油耗' v-model='oil'></el-input> </el-col>
		</el-row>
		
		<el-row>
		<el-col :span="12"><el-select v-model='reportid' style='width: 300px; margin-top: 20px;' placeholder='报岗id'>
		<el-option v-for='(item,index) in reportarr' :value="item.reportid" :label='item.reportid' >{{item.reportid}}</el-option>
		</el-select></el-col>
		</el-row>
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				consumeid:'',
				electric:'',
				dljarr:[],
				devid:'',
				water:'',
				oil:'',
				reportid:'',
				reportarr:[]
				
				
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/update"
				// 传递给后端的数据
				var data = {consumeid:this.consumeid,devid:this.devid,electric:this.electric,water:this.water,oil:this.oil,
				reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/consumeList'});
				})
			},
			//返回
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.dljarr = res.data;
			})
			
			var url = this.baseUrl+"/produceReport/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.reportarr = res.data;
			})
			
				//接收路由传递的数据
			var consumeid = this.$route.params.row;
			// 后端网址
			var url = this.baseUrl+"/energyConsume/load";
			// 传递给后端的数据
			var data = {consumeid:consumeid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.consumeid = obj.consumeid;
				this.electric = obj.electric;
				this.devid = obj.devid;
				this.water = obj.water;
				this.oil = obj.oil;
				this.reportid = obj.reportid;
				
			})
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>