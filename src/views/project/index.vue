<template>
	<div>
		<div class="projectHeader">
			<h4>{{$t('Project Info')}}</h4>
			<el-row :gutter="20">
				<el-col :span="6">
					<div>
						{{$t('Tracking Number')}} :
						<span>{{projectHeader.TrackingNumber}}</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div>
						{{$t('Status')}} :
						<span>{{projectHeader.Status}}</span>
					</div>

				</el-col>
				<el-col :span="6">
					<div>
						{{$t('Service Type')}} :
						<span>{{projectHeader.ServiceType}}</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div>
						{{$t('Confirmed Date')}} :
						<span>{{projectHeader.ConfirmedDate}}</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div>
						{{$t('Customer')}} :
						<span>{{projectHeader.LoginName}}</span>
					</div>
				</el-col>
				<el-col :span="6">
					<div>
						{{$t('Institution')}} :
						<span>{{projectHeader.Compamy}}</span>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="projectDetail">
			<el-tabs  type="border-card" @tab-click="handleClick" :active-name="activeTab">
				<el-tab-pane name="SampleRecevie">
					<span slot="label">
						{{$t('Sample Receive')}} (
						<span class="stepStatus">{{projectStepProgress.SampleRecevie}}</span>
						)
					</span>
					<sample></sample>
				</el-tab-pane>
				<el-tab-pane name="second">
					<span slot="label">
						{{$t('Sample QC')}} (
						<span class="stepStatus">{{projectStepProgress.SampleQC}}</span>
						)
					</span>
					配置管理
				</el-tab-pane>
				<el-tab-pane name="third">
					<span slot="label">
						{{$t('Sample Library')}} (
						<span class="stepStatus">{{projectStepProgress.SampleLibrary}}</span>
						)
					</span>
					角色管理
				</el-tab-pane>
				<el-tab-pane name="fourth">
					<span slot="label">
						{{$t('Sample Sequencing')}} (
						<span class="stepStatus">{{projectStepProgress.SampleSequencing}}</span>
						)
					</span>
					定时任务补偿
				</el-tab-pane>
				<el-tab-pane  name="fourth2">
					<span slot="label">
						{{$t('BI QC')}} (
						<span class="stepStatus">{{projectStepProgress.BIDataQC}}</span>
						)
					</span>
					定时任务补偿
				</el-tab-pane>
				<el-tab-pane name="fourth3">
					<span slot="label">
						{{$t('BI Analysis')}} (
						<span class="stepStatus">{{projectStepProgress.BIDataAnalysis}}</span>
						)
					</span>
					定时任务补偿
				</el-tab-pane>
				<el-tab-pane name="fourth1">
					<span slot="label">
						{{$t('Deliver')}} (
						<span class="stepStatus">{{projectStepProgress.BIDataDelivery}}</span>
						)
					</span>
					定时任务补偿
				</el-tab-pane>

			</el-tabs>
		</div>
	</div>
</template>
<script>
import baseView from '@/extends/baseView';
import sampleReceive from '@/views/project/sample.vue';

	export default{
		mixins: [baseView],
		name: 'project-list',
		data () {
			return {
				activeTab:'SampleRecevie',
				projectHeader: {},
				projectStepProgress:{}
			}
		},
		created () {
			this.init()
		},
		methods: {
			init: function(){
				var oid=this.$route.params.oid;
				this.getProjectHeaderById(oid);
				this.getProjectStepProgress(oid);
			},
			getProjectHeaderById: function(id){
				this.projectHeader={TrackingNumber:'80-3323154967',Status:'Confirmed',ServiceType:'Bioinformatics Only',ConfirmedDate:'2017/03/13'}
			},
			getProjectStepProgress: function(id){
				this.projectStepProgress={SampleRecevie:'50%',SampleQC:'0%',SampleLibrary:'0%',SampleSequencing:'0%',BIDataQC:'0%',BIDataAnalysis:'0%',BIDataDelivery:'0%'}
			},
			handleClick: function(){

			}
		},
		components:{sample:sampleReceive}
	}
</script>
<style scoped>
	.stepStatus{
		color: red
	}
	.el-tabs span{
		font-size: 8px;
		font-weight: bolder;
	}
</style>