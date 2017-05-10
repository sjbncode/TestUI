<template>
    <div>
        <el-table :data="dataInGrid" border max-height="600">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column :label="$t('Sample#')" width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.dataName }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('Sample Name')" width="180">
                <template scope="scope">{{ scope.row.New }}</template>
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
import config from '@/config'
export default {
    name: config.prefix + 'sample-receive',
    data() {
        return {
            loading: false,
            pagesize: 100,
            currentPage: 1,
            tableData: []
        }
    },
    props: ['oid'],
    created() {
        this.init();
    },
    methods: {
        init: function() {

            this.getSamplesByOrderId(this.oid);
        },
        getSamplesByOrderId: function(id) {
            this.loading = true;
            setTimeout(() => {
                this.tableData = [{
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
    }
}
</script>
<style scoped></style>
