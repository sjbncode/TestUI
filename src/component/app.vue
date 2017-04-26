<style scoped>
    @import '../style/common.css';
</style>
<template>
    <div class="wrapper">
        <div id="init" v-if='!initDone' class="full-screen">{{initMessage}}</div>
           
        <div class="wrapper-header">
            <a href="/" ><img class="logo"  src="../img/logo.png"/><span>Vue2, Element UI</span></a>
        </div>
        <div class="wrapper-main">
            <div class="wrapper-navigate">
                <mainnav :menu="menu"></mainnav>
                <div></div>
            </div>
            <div class="wrapper-container">
                <transition :name="transitionName">
                    <router-view></router-view>
                </transition>            
            </div>
        </div>
    </div>
</template>
<script>
    import mainnav from './mainnav.vue';

    export default {
        data () {
            return {
                initDone:false,
                initMessage:'starting',
                transitionName:'slide-right',
                menu:[{title:'Demo',icon:'el-icon-message'
                    ,items:[{title:'form1',url:'/t/form'},
                        {title:'form2',url:'/t/form2'},
                        {title:'form3',url:'/t/form3'},
                        {title:'table1',url:'/t/Table1'},
                        {title:'table2',url:'/t/Table2'},
                        {title:'table3',url:'/t/Table3'},
                        {title:'Dialog',url:'/t/dialog'},
                        {title:'Tab1',url:'/t/tab1'}]}
                ,{title:'Home',icon:'el-icon-menu',url:'/index'}
                ,{title:'Dashboards',icon:'el-icon-setting'
                    ,items:[{title:'Sync Dashboard',url:'/sync/sync_dashboard'},
                    {title:'Dashboard2',url:'/t/dashboard2'},
                    {title:'Dashboard3',url:'/t/dashboard2'},
                    {title:'Dashboard4',url:'/t/dashboard2'},
                ]},]
          }
        },
        ready () {

        },
        created(){

            setTimeout(()=>{this.initMessage="1"},1000);
            setTimeout(()=>{this.initMessage="2"},2000);
            setTimeout(()=>{this.initMessage="3"},3000);
            setTimeout(()=>{this.initMessage="4"},4000);
            setTimeout(()=>{this.initDone=true},2000);
        },
        beforeDestroy () {

        },
        methods: {
        },
        watch: {
          '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
          }
        },
        components:{mainnav}
    }
</script>
<style>
    .full-screen{
           /*width:100%;
    height:100%;*/
    background-color:#fff;
    position:absolute;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    z-index:2;
    opacity:1;
    text-align: center;
    padding-top: 500px;
    }
</style>
