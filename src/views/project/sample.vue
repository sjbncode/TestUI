<template>
    <div>
        <div class="actions-warpping">
            <span>
                <el-button type="primary" icon="document" @click="exportSample">{{$t('Export')}}</el-button>
                <el-button type="primary" icon="plus" @click="addNewSample">{{$t('New Sample')}}</el-button>
                <el-button type="primary" icon="check" @click="updateSampleStatusToReceived">{{$t('Batch Receive')}}</el-button>
                <el-button type="danger" icon="delete" @click="discardSample">{{$t('Discard')}}</el-button>
                <el-button type="primary" @click="moveSampleToQC">{{$t('QC')}}</el-button>
            </span>
        </div>
        <el-table :data="dataInGrid" border max-height="600" 
                    @selection-change="handleSelectionChange"
                    @cell-click="handleCellClick"
                    >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column :label="$t('Sample#')" width="180">
                <template scope="scope">
                    <el-input v-model="scope.row.dataName"></el-input>
                </template>
            </el-table-column>
            <el-table-column :label="$t('Sample Name')" width="180" property="New" class-name="selectable">
                <template scope="scope"  >
                    <!-- :class="{'selectable-active':scope.row['selectable_New']}" -->
                    <span @click="mulitSelect(scope.row,1,'New',1)" :v-selectable="aa">{{ scope.row.New }}x</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('Rec Date')" width="180">
                <template scope="scope">{{ scope.row.Processing }}</template>
            </el-table-column>
            <el-table-column :label="$t('Receiver')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Shipping')" width="180">
                <template scope="scope">
                    <el-button type="text" v-on:click="goToException(scope.row.dataName)">{{ scope.row.Exception }}</el-button>
                </template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
            <el-table-column :label="$t('Status')" width="180">
                <template scope="scope">{{ scope.row.Inqueue }}</template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[50,100, 200]" :page-size="pagesize" layout="total, sizes,->, prev, pager, next, jumper" :total="tableData.length"></el-pagination>
    </div>
</template>
<script>
import baseView from '@/extends/baseView';
import _ from 'underscore';
import popEdit from '@/components/popEditor.vue';
import selectable from '@/directives/selectable';
export default {    
    mixins: [baseView],
    name:  'sample-receive',
    data() {
        return {
            loading: false,
            pagesize: 100,
            currentPage: 1,
            tableData: [],
            selectedRows:[],
            samplepopover:{},
            selctableFalgs:{}
        }
    },
    props: ['oid'],
    created() {
        this.init();
    },
    methods: {   
    test:function(){
console.log('move')
    }   ,
    handleCellClick:function(row,column,cell,event){
        
        if('selectable'!=column.className)
            return
        if(event.type=='click'){
            var bindData=this.tableData;
            var columnKey=column.property;
            var index=_.indexOf(bindData,row);
            var selectKey='selectable_'+columnKey; 
           
            if(event.altKey==false&&event.ctrlKey==false&&event.shiftKey==false){
                
                var newValue=!row[selectKey];
                if(newValue){
                    this.selctableFalgs[selectKey]=index;
                }else{
                    this.selctableFalgs[selectKey]=-1;
                }
                _.each(bindData,(x)=>{ this.$set(x,selectKey,false)});                
                this.$set(row,selectKey,newValue);
            }else if (event.altKey==false&&event.ctrlKey==true&&event.shiftKey==false) {
                var newValue=!row[selectKey];
                this.$set(row,selectKey,newValue);
                var sourceIndex=this.selctableFalgs[selectKey];
                if(newValue
                    &&sourceIndex!=undefined&&sourceIndex>-1){
                    console.log(index+'|'+sourceIndex)
                    bindData[index][columnKey]=bindData[sourceIndex][columnKey]
                }

            }
            //todo use shiftkey
            else if((event.altKey==true&&event.shiftKey==false)&&event.ctrlKey==false)
            {
                if(this.selctableFalgs[selectKey]!=undefined&&this.selctableFalgs[selectKey]>-1){
                    var sourceIndex=this.selctableFalgs[selectKey];
                    var source=Math.min(sourceIndex,index);
                    var target=Math.max(sourceIndex,index);                    
                    for (var i = source; i <= target; i++) {                          
                        bindData[i][columnKey]=bindData[sourceIndex][columnKey] ;  
                        this.$set(bindData[i],selectKey,true);
                    }
                }
            }
        }
    }
    ,
        mulitSelect:function(data,index,key,action){
            // var selectKey='selectable_'+key; 
            // if(data[selectKey]==undefined){
            //     this.$set(data,selectKey,false);
            // }
            // if(action==1){
            //     console.log('x')               
            //     if(data[selectKey]){
            //         this.selctableFalgs[selectKey]=false;
            //     }else{
            //         this.selctableFalgs[selectKey]=true;
            //     }
            //     data[selectKey]=!data[selectKey];
            // }
        },
        init: function() {
            this.getSamplesByOrderId(this.oid);
        },
        handleSelectionChange(val) {
            this.selectedRows = val;
      },
        updateSampleStatusToReceived: function(){

        },
        moveSampleToQC:function(){

        },
        discardSample:function(){

        },
        exportSample:function(){
            console.log('x')
        },
        addNewSample:function(){

        },
        getSamplesByOrderId: function(id) {
            this.loading = true;
            setTimeout(() => {
                this.tableData = [{
                        dataName: 'a',
                        New: '123a',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123b',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123c',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123d',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123e',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'b',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    },{
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'a',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    }, {
                        dataName: 'b',
                        New: '123',
                        Processing: '1225',
                        Inqueue: '255'
                    },

                ];
                this.loading = false;
            }, 2000)
        },
        handleSizeChange(val) {
            this.pagesize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        }
    },
    computed: {
        dataInGrid: function() {
            var total = this.tableData.length;
            var skip = this.pagesize * (this.currentPage - 1) || 0;
            var end = skip + this.pagesize;
            return this.tableData.slice(skip, end);
        }
    },
    components:{popEdit:popEdit},
    directives:{selectable:selectable}
}
</script>
<style scoped>
    .actions-warpping{
        margin-bottom: 10px;
        float: right;
    }
    .selectable .selectable-active{
        background-color: red
    }

</style>