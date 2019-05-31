import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
	color:'',
	tags: [
	  { name: '首页', type: 'warning',url:'/',index:'101' }
	],
	defaultIndex:'101',
	LoginFlag:false
}
// mutations对象用来存储方法
var mutations = {
	/* changecolor (state,colorname){
		state.color = colorname;
	} */
	addtag (state,obj){
		// 把数组中，所有的元素 type改成info
		for(var item of state.tags){
			item.type='info';
		}
		// 重复的不再添加
		for(var item of state.tags){
			if(item.name==obj.name){
				item.type='warning';
				return;
			}
		}
		state.tags.push(obj);
	},
	updateTag(state,index){
		// 把数组中，所有的元素 type改成info
		for(var item of state.tags){
			item.type='info';
		}
		// 把index对应的改成waring
		state.tags[index].type='warning';
	},
	del(state,index){
		state.tags.splice(index,1)
		/* this.$store.state.splice(index,1); */
	},
	addComp(state,comp){
		state.compArr.push(comp);
	},
	delComp(state,date){
		for(var i=0;i<state.compArr.length;i++){
			if(state.compArr[i].date==date){
				state.compArr.splice(i,1);
			}
		}
	}
	
	
	
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})