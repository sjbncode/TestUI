<template>
  <div id="app" :class="{'sidebar-collapsed':sideBarCollapse}">
    <div>
      <div id="header-topbar-option-demo" class="page-header-topbar">
        <nav id="topbar" role="navigation" style="margin-bottom: 0; z-index: 2;" class="navbar navbar-default navbar-static-top">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link id="logo" class="navbar-brand" to="/">
              <span class="fa fa-rocket"></span>
              <span class="logo-text">µAdmin</span>
              <span style="display: none" class="logo-text-icon">µ</span>
            </router-link>
          </div>
          <div class="topbar-main">
            <a id="menu-toggle" href="javascript:void(0)" class="hidden-xs"  @click="toggleNavigation"> <i class="fa fa-bars"></i>
            </a>
            <form id="topbar-search" action="#" method="GET" class="hidden-xs">
              <div class="input-group">
                <input type="text" placeholder="Search..." class="form-control">          
                <span class="input-group-btn">
                  <a href="javascript:;" class="btn submit">
                    <i class="fa fa-search"></i>
                  </a>
                </span>
              </div>
            </form>
            <ul class="nav navbar navbar-top-links navbar-right mbn">
              <language-select></language-select>       
            </ul>          
          </div>
        </nav>
        <!--BEGIN MODAL CONFIG PORTLET-->    
        <div id="modal-config" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" data-dismiss="modal" aria-hidden="true" class="close">×</button>
                <h4 class="modal-title">Modal title</h4>
              </div>
              <div class="modal-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend et nisl eget porta. Curabitur elementum sem molestie nisl varius, eget tempus odio molestie. Nunc vehicula sem arcu, eu pulvinar neque cursus ac. Aliquam ultricies lobortis magna et aliquam. Vestibulum egestas eu urna sed ultricies. Nullam pulvinar dolor vitae quam dictum condimentum. Integer a sodales elit, eu pulvinar leo. Nunc nec aliquam nisi, a mollis neque. Ut vel felis quis tellus hendrerit placerat. Vivamus vel nisl non magna feugiat dignissim sed ut nibh. Nulla elementum, est a pretium hendrerit, arcu risus luctus augue, mattis aliquet orci ligula eget massa. Sed ut ultricies felis.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper">   
        <sidemenu :menu="menu1"></sidemenu>
        <div id="page-wrapper">
          <div id="title-breadcrumb-option-demo" class="page-title-breadcrumb">
            <div class="page-header pull-left">
              <div class="page-title">{{name}} {{$t('hello')}}</div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="page-content">
         <!--  <button @click="test"> switch language</button>
          <button @click="test2"> add resource</button> -->
            <transition :name="transitionName">
              <router-view></router-view>
            </transition>
          </div>
        </div>
        <div id="footer">
          <div class="copyright">2017 © Genewiz - NGS Lab UI</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import sidemenu from '@/components/sidemenu.vue'
import languageSelect from '@/components/languageSelect.vue'
export default {
  name: 'app',
  data () {
    return {
      sideBarCollapse: true,
      transitionName: 'slide-left',
      menu1: [{title: 'Demo',
        open: false,
        active: false,
        icon: 'el-icon-message',
        items: [{title: 'form1', url: '/', active: false},
                {title: 'form2', url: '/h1', active: false},
                {title: 'form3', url: '/h2', active: false},
                {title: 'ViewProject1', url: '/project/1', active: false},
                {title: 'table2', url: '/', active: false},
                {title: 'table3', url: '/', active: false},
                {title: 'Dialog', url: '/', active: false},
                {title: 'Tab1', url: '/'}]},
                {title: 'Home', icon: 'el-icon-menu', url: '/'},
      {title: 'Dashboards',
        icon: 'el-icon-setting',
        open: false,
        active: false,
        items: [{title: 'Sync Dashboard', url: '/h2'},
                    {title: 'Dashboard2', url: '/'},
                    {title: 'Dashboard3', url: '/'},
                    {title: 'Dashboard4', url: '/'}]}]
    }
  },
  methods: {
    toggleNavigation: function toggleNavigation () {
      this.sideBarCollapse = !this.sideBarCollapse
    },
    // test: function test () {
    //   if (this.$i18n.locale === 'ja') {
    //     this.$i18n.locale = 'en'
    //   } else {
    //     this.$i18n.locale = 'ja'
    //   }
    // },
    // test2: function test2 () {
    //   this.$i18n.mergeLocaleMessage('en', {hello: '22xxxx222', test2: 'new_en_test222_new'})
    // }
  },
  computed: {
    name () {
      return this.$route.name
    }
  },
  components: {sidemenu: sidemenu, languageSelect: languageSelect}
}
</script>

<style>
@import './assets/vendors/font-awesome/css/font-awesome.min.css';
@import './assets/vendors/bootstrap/css/bootstrap.min.css';
@import '../node_modules/element-ui/lib/theme-default/index.css';
@import './assets/css/themes/style1/orange-blue.css';
@import './assets/css/style-responsive.css';
@import './assets/css/transition.css'

</style>
