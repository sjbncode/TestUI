<template>
<li class="dropdown topbar-user" :class="{open:isOpen}" @mouseover="isOpen=true"  @mouseleave="isOpen=false">
  <a href="javascript:void(0)" @click="menuClick">
    <img :src="selectedLang.img" alt="" class="img-responsive">
    &nbsp;
    <span class="hidden-xs">{{selectedLang.displayName}}</span>
    &nbsp;
    <span class="caret"></span>
  </a>
  <ul class="dropdown-menu pull-right">
    <template v-for="(l,i) in languages">
      <li :class="{active:selectedLang.name==l.name}">
        <a href="javascript:void(0)" @click="itemClick(l.name)">
        <img :src="l.img" alt="" class="img-responsive">
        <span>{{l.displayName}}</span>
        </a>
      </li>
    </template>    
  </ul></li>
</template>
<script>
import _ from 'underscore'
export default {
  name: 'languageSelect',
  data () {
    return {languages: [{name: 'en', displayName: 'English', img: require('../assets/img/flags/us.svg')},
    {name: 'zh', displayName: '中文', img: require('../assets/img/flags/cn.svg')},
    {name: 'ja', displayName: '日本語', img: require('../assets/img/flags/jp.svg')}],
      localeName: 'zh',
      isOpen: false}
  },
  created () {
    // console.log(this);
    this.localeName = this.$i18n.locale
    // this.localeName = this.$lang
  },
  methods: {
    menuClick: function () {
      this.isOpen = !this.isOpen
    },
    itemClick: function (name) {
      this.localeName = name
      this.$i18n.locale = name
      // this.$lang=name
      this.isOpen = false
    }
  },
  computed: {
    selectedLang: function () {
      var sl = _.filter(this.languages, (x) => { return x.name === this.localeName })
      if (sl && sl.length > 0) {
        return sl[0]
      }
      return this.languages
    }
  }
}
</script>

