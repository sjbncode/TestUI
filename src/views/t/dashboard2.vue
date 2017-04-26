<template>
<div class="dashboard">	
	<el-row type="flex" class="row-bg" justify="space-around">
		<el-col :span="6">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span style="line-height: 36px;">Card name</span>
					<el-button style="float: right;" type="primary">Operation button</el-button>
				</div>
				<div v-for="o in 4" class="text item">
					{{'List item ' + o }}222	
				</div>
			</el-card>
		</el-col>
		<el-col :span="6">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span style="line-height: 36px;">Card name</span>
					<el-button style="float: right;" type="primary">Operation button</el-button>
				</div>
				<div v-for="o in 4" class="text item">
					{{'List item ' + o }}
				</div>
			</el-card>
		</el-col>
		<el-col :span="6">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span style="line-height: 36px;">Card name</span>
					<el-button style="float: right;" type="primary">Operation button</el-button>
				</div>
				<div v-for="o in 4" class="text item">
					{{'List item ' + o }}
				</div>
			</el-card>
		</el-col>
		<el-col :span="2" v-for="(o, index) in 2" >
		    <el-card :body-style="{ padding: '0px' }">
		      <!-- <img src="~examples/assets/images/hamburger.png" class="image"> -->
		      <div style="padding: 14px;">
		        <span>Yummy hamburger</span>
		        <div class="bottom clearfix">
		          <time class="time">{{ currentDate }}</time>
		          <el-button type="text" class="button">Operating button</el-button>
		        </div>
		      </div>
		    </el-card>
  		</el-col>
	</el-row>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				currentDate:''
			}
		},
		props:['message'],

	}
</script>
<style type="text/css" scoped>
	.dashboard{
		background-color: #fff;
	}
</style>