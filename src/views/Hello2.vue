<template>
    <div class="dashboard">
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="3">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="status">New</div>
                    <div class="status-count">{{StatusCount.New}}</div>
                </el-card>
            </el-col>
            <el-col :span="3">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="status">Inqueue</div>
                    <div class="status-count">{{StatusCount.Inqueue}}</div>
                </el-card>
            </el-col>
            <el-col :span="3">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="status">Processing</div>
                    <div class="status-count">{{StatusCount.Processing}}</div>
                </el-card>
            </el-col>
            <el-col :span="3">
                <el-card class="box-card" :body-style="{ padding: '0px' }">
                    <div class="status">Exception</div>
                    <div class="status-count">{{StatusCount.Exception}}</div>
                </el-card>
            </el-col>
        </el-row>
        <br/>
        <el-row>
            <el-table :data="tableInGrid" border style="width: 100%" v-on:expand="">
                <el-table-column label="DataName" width="280">
                    <template scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.dataName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="New" width="180">
                    <template scope="scope">
                        {{ scope.row.New }}
                    </template>
                </el-table-column>
                <el-table-column label="Processing" width="180">
                    <template scope="scope">
                        {{ scope.row.Processing }}
                    </template>
                </el-table-column>
                <el-table-column label="Inqueue" width="180">
                    <template scope="scope">
                        {{ scope.row.Inqueue }}
                    </template>
                </el-table-column>
                <el-table-column label="Exception">
                    <template scope="scope">
                        <el-button type="text" v-on:click="goToException(scope.row.dataName)">
                            {{ scope.row.Exception }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[2,100, 200, 300, 400]" :page-size="pagesize" layout="total, sizes,->, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </el-row>
    </div>
</template>
<script type="text/javascript">
import baseView from '@/extends/baseView';
import _ from 'underscore'
export default {
  mixins: [baseView],
  data () {
    return {
      StatusCount: {
        New: 0,
        Inqueue: 0,
        Processing: 0,
        Exception: 0,
        UpdateSuccess: 11221111,
        NoNeedUpload: 10000
      },
      fetchLogSummaryUrl: 'http://localhost:3009/api/synclog',
      refreshData: undefined,
      pagesize: 100,
      currentPage: 1,
      tableData: []
    }
  },
  props: ['message'],
  created () {
    this.fetchLogSummary()
    this.refreshData = setInterval(this.fetchLogSummary, 50000)
  },
  destroyed () {
    if (this.refreshData) {
      clearInterval(this.refreshData)
    }
  },
  methods: {
    goToException: function (type) {
      this.$router.push({
        name: 'sync_exceptions',
        params: {
          dataName: type
        }
      })
    },
    fetchLogSummary: function () {
      this.$http.options.xhr = {withCredentials: true}
      this.$http.get(this.fetchLogSummaryUrl).then(res => {
        this.tableData = res.data.data
        this.StatusCount.New = _.reduce(_.pluck(this.tableData, 'New'), function (m, n) {
          return m + n
        }, 0)
        this.StatusCount.Inqueue = _.reduce(_.pluck(this.tableData, 'Inqueue'), function (m, n) {
          return m + n
        }, 0)
        this.StatusCount.Processing = _.reduce(_.pluck(this.tableData, 'Processing'), function (m, n) {
          return m + n
        }, 0)
        this.StatusCount.Exception = _.reduce(_.pluck(this.tableData, 'Exception'), function (m, n) {
          return m + n
        }, 0)
      })
    },
    handleSizeChange (val) {
      this.pagesize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    }
  },
  computed: {
    tableInGrid: function () {
      var total = this.tableData.length
      var skip = this.pagesize * (this.currentPage - 1) || 0
      var end = skip + this.pagesize
      console.log('1:' + total)
      console.log('2:' + skip)
      console.log('3:' + end)
      return this.tableData.slice(skip, end)
    }
  }

}
</script>
<style type="text/css" scoped>
.dashboard {
    background-color: #fff;
}

.status {
    float: left;
    background-color: #D3DCE6;
    text-align: center;
    padding: 10px;
}

.status-count {
    padding: 10px;
    text-align: center;
    width: 100%;
    white-space: nowrap;
}
</style>
