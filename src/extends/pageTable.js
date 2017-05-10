
export default {
  methods: {
    
    handleSizeChange(val) {
            this.pagesize = val;
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        }
  }
  ,
    computed: {
        dataInGrid: function() {
            var total = this.tableData.length;
            var skip = this.pagesize * (this.currentPage - 1) || 0;
            var end = skip + this.pagesize;
            return this.tableData.slice(skip, end);
        }
    }
};