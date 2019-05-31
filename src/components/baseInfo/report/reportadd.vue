<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>添加报岗</h1>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='船队名称' v-model='shipname'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='装载量' v-model='capacity'></el-input> </el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="12"><el-date-picker style='width: 300px; margin-top: 20px;' v-model="planjobtime" type="datetime" placeholder="预计到港时间" 
		    value-format="yyyy-MM-dd HH:mm:ss"> </el-date-picker> </el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='报岗人' v-model='reportuser'></el-input> </el-col>
		</el-row>
		
		<el-row>
		<el-col :span="12"><el-select v-model='compid' style='width: 300px; margin-top: 20px;' placeholder='所属企业'>
		<el-option v-for='(obj,index) in baseCompany' :value="obj.compid" :key="obj.compid" :label='obj.compname' >{{obj.compname}}</el-option>
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
				shipname:'',
				capacity:'',
				planjobtime:'',
				reportuser:'',
				compid:'',
				baseCompany:[]
				
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/insert"
				// 传递给后端的数据
				var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,reportuser:this.reportuser,
				compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/reportList'});
				})
			},
			//返回
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.baseCompany = res.data;
			})
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>