<template>
  <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side" style="min-height: 100%;">
    <div class="sidebar-collapse menu-scroll" style="height: auto;">
      <ul id="side-menu" class="nav">
        <li class="user-panel">
          <div class="thumb">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" alt="" class="img-circle"></div>
          <div class="info">
            <p>John Doe</p>
            <ul class="list-inline list-unstyled">
              <li>
                <a href="extra-profile.html" data-hover="tooltip" title="" data-original-title="Profile"> <i class="fa fa-user"></i>
                </a>
              </li>
              <li>
                <a href="email-inbox.html" data-hover="tooltip" title="" data-original-title="Mail"> <i class="fa fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="#" data-hover="tooltip" title="" data-toggle="modal" data-target="#modal-config" data-original-title="Setting">
                  <i class="fa fa-cog"></i>
                </a>
              </li>
              <li>
                <a href="extra-signin.html" data-hover="tooltip" title="" data-original-title="Logout">
                  <i class="fa fa-sign-out"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </li>
        <template v-for="(m,i) in menu">
          <template v-if="m.items">
            <li  @click="groupClick(m)" :class='{active:m.open}'>
              <a href="javascript:void(0);">
                <i :v-if="m.icon" class="fa fa-laptop fa-fw" :class="m.icon"><div class="icon-bg bg-pink"></div></i> 
                <span class="menu-title">{{m.title}}</span>
                <span class="fa arrow"></span>
              </a>
              <transition name="fade">
              <ul class="nav nav-second-level collapse" :class="{in:m.open}">
                <template v-for="s in m.items">
                  <li :class='{active:s.active}' @click.stop="menuClick(s)">
                    <a href="javascript:void(0)">
                      <i class="fa fa-rocket" v-if="s.icon" :class="s.icon"></i>
                      <span class="submenu-title">{{s.title}}</span>
                    </a>
                  </li>
                </template>
              </ul>
            </transition>
            </li>
          </template>
          <template v-else>
            <li :class='{active:m.active}' @click="menuClick(m)">
              <a href="javascript:void(0);">
                <i v-if="m.icon" class="fa fa-tachometer fa-fw" :class="m.icon"><div class="icon-bg bg-orange"></div></i> 
                <span class="menu-title">{{m.title}}</span>
              </a>
            </li>
          </template>
        </template>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'sidemenu',
  data () {
    return {selectedItem: undefined}
  },
  props: ['menu'],
  methods: {
    groupClick: function isExpaned (m) {
      m.open = !m.open
    },
    menuClick: function isExpaned (m) {
      if (this.selectedItem) {
        this.selectedItem.active = false
      }
      this.selectedItem = m
      m.active = true
      this.$router.push({path: m.url})
    }
  }
}
</script>
<style>
#sidebar .collapse{
  display: block!important;
  height: 0px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
}
#sidebar .collapse.in{
  height: auto;
  visibility: visible;
  opacity: 1
}
.sidebar-collapsed #sidebar .collapse.in{
  display: block!important;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear

}
.sidebar-collapsed #sidebar li:hover .collapse,.sidebar-collapsed #sidebar li:hover .collapse.in{
  height: auto;
  visibility: visible;
  opacity: 1
}
</style>

