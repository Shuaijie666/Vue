<template>
	<div>
		<h1 style="text-align: center">用户信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='姓名' v-model='search_username'></el-input>
			<!-- <el-input style='width:160px' placeholder='行业' v-model='search_industry'></el-input> -->
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="userid" label="uid" width="80"></el-table-column>
				<el-table-column prop="cname" label="姓名" width="120"></el-table-column>
				<el-table-column prop="username" label="用户名" width="120"></el-table-column>
				<el-table-column prop="password" label="密码" width="120"></el-table-column>
				<el-table-column prop="telno" label="手机号" width="180"></el-table-column>
				<el-table-column prop="email" label="邮箱" width="180"></el-table-column>
				<el-table-column prop="sex" label="性别" width="180"></el-table-column>
				<el-table-column prop="baseCompany.compname" label="所属企业" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.userid)">删除</el-button>
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
				search_username:'',
				list:[]
			};
		},
		methods:{
			//增加
			add(){
				// 路由跳转
				this.$router.push({path:'/baseuserAdd'})
			},
			//通过id删除
			del(userid){
				// 后端网址
				var url = this.baseUrl+"/baseUser/delete"
				// 传递给后端的数据
				var data = {userid:userid};
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
				this.$router.push({name:'baseuserEdit',params:{row:row.userid}})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/search"
				// 传递给后端的数据
				var data = {cname:this.search_username};
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
			var url = this.baseUrl+"/baseUser/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				// res是后端的响应
				this.list = res.data;
			})
			
			 // 后端网址
			this.search()
		}
		
	}
</script>

<style>

</style>
