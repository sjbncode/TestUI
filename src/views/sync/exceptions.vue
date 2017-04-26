<template>
    <div class="dashboard">
        <el-button v-on:click="goBack">Go back</el-button>
        <span>{{$route.params.dataName}}</span>
        <br/>
        <br/>
        <el-table :data="tableInGrid" v-loading="loading" element-loading-text="加载中" border style="width: 100%" v-on:expand="fetchExceptionDetail">
            <el-table-column type="expand">
                <template scope="props">
                    <p>Key1: {{ props.row.Key1 }}</p>
                    <p>key2: {{ props.row.key2 }}</p>
                    <p>EntityXml: {{ props.row.EntityXml }}</p>
                    <p>PostEntityXml: {{ props.row.PostEntityXml }}</p>
                    <p>Sync Times: {{ props.row.SyncTimes }}</p>
                    <p>CreatedBy: {{ props.row.CreatedBy }}</p>
                    <p>CreatedDttm: {{ props.row.CreatedDttm }}</p>
                    <p>UpdatedDttm: {{ props.row.UpdatedDttm }}</p>
                </template>
            </el-table-column>
            <el-table-column label="Key1" width="300">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.Key1 }}</span>
                </template>
            </el-table-column>
            <el-table-column sortable prop="Result" label="Result">
                <template scope="scope">
                    {{ scope.row.Result }}
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10,50,100]" :page-size="pagesize" layout="total, sizes,->, prev, pager, next, jumper" :total="tableData.length">
        </el-pagination>
        </el-row>
    </div>
</template>

<script type="text/javascript">
	import _ from 'underscore';
	export default{
		data(){
			return {
				fetchExceptionsUrl:'http://localhost:3009/api/getSyncErrors',
				fetchExceptionByIdUrl:'http://localhost:3009/api/getSyncErrorById'
				,loading:false
				,pagesize:10
				,currentPage:1
				,tableData:[]
			}
		},
		props:['dataName'],
		created(){
			console.log(JSON.stringify(this.$route.params))
			console.log(this.dataName);
				this.fetchExceptions();
		},
		destroyed(){
		},
		methods:{
			goBack:function(){this.$router.go(-1);},
			fetchExceptions:function(){
				this.loading=true;
				this.$http.post(this.fetchExceptionsUrl,{DataName:this.$route.params.dataName}).then(res=>{
							this.tableData=res.data.data
							this.loading=false;
					});
			},
			fetchExceptionDetail:function(row,expanded){
				if(!row.hasDetail){
				this.$http.post(this.fetchExceptionByIdUrl,{id:row.ID}).then(res=>{
						if(res.data.data&&res.data.data.length>0){
							var d=res.data.data[0];
							row.hasDetail=true;
							row.loading=false;
							row.key1=d.key1;
							row.key2=d.key2;
							row.EntityXml=d.EntityXml;
							row.PostEntityXml=d.PostEntityXml;
							row.SyncTimes=d.SyncTimes;
							row.CreatedBy=d.CreatedBy;
							row.CreatedDttm=d.CreatedDttm;
							row.UpdatedDttm=d.UpdatedDttm;
							row.Result+=' '
						}
				});
				}
			},
			handleSizeChange(val) {
		        this.pagesize=val;
		      },
	      handleCurrentChange(val) {
	        this.currentPage = val;
	      }
		},
		computed: {
		      tableInGrid:function(){
		        var total=this.tableData.length;
		        var skip=this.pagesize*(this.currentPage-1)||0;
		        var end=skip+this.pagesize;
		        return this.tableData.slice(skip,end);
		      }
    }

	}
</script>
<style type="text/css" scoped>
	.dashboard{
		background-color: #fff;
	}
	.status{
		float: left;
		background-color: #D3DCE6;
		text-align: center;
		padding: 10px;
	}
	.status-count{
		padding: 10px;
		text-align: center;
		width: 100%;
		white-space: nowrap;
	}
</style>