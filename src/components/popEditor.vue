<template>
	<el-popover
  ref="popover4"
  placement="right"
  width="400"
  trigger="click"
v-model="visible"
  >
		<el-input v-model="newValue" v-if="editorType=='textbox'"></el-input>
		<el-input  type="textarea"  :rows="3"  v-model="newValue"  v-if="editorType=='textarea'"></el-input>
		<el-select v-model="newValue" placeholder="请选择" v-if="editorType=='dropdown'">
			<el-option
      v-for="item in dropdownOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"></el-option>
		</el-select>
		<span>
			<el-button type="success" icon="check" @click="save"></el-button>
			<el-button icon="close" @click="close"></el-button>
		</span>
	</el-popover>
</template>
<script>
	export default{
		data (){
			return {
				newValue:'',
				visible:true
			};
		},
		props:{
			v:String,
			editorType:{ type: String,
				default: 'textbox',
				validator: value => ['textbox', 'textarea', 'dropdown'].indexOf(value) > -1
			},
			dropdownOptions:{}
		},
		mounted(){
			this.newValue=this.v;
		},
		methods:{
			save:function(){
				console.log('on save')
				this.close();
			},
			close:function(){
				this.visible=false;
			}
		}
	}
</script>
<style></style>