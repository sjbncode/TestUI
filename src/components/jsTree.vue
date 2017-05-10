<template>
  <div id='bnTree'>
    
  </div>
</template>
<script>
import $ from 'jquery'
import _ from 'underscore'
// import jstree from 'jstree'
require('jstree')
export default {
  name: 'jsTree',
  data () {
    return {
      // treeItems:[]
    }
  },
  mounted () {
    this.init()
  },
  // props: ['treeItems'],
  methods: {
    init () {
      $('#bnTree').jstree({
      // jstree.create('#bnTree', {
        'core': {
          'check_callback': function (operation, node, nodeParent, nodePosition, more) {
            if (operation === 'move_node') {
              return nodeParent.original.parent === '#'
            }
            return true
          },
          data: [{ 'id': 'ajson1', 'parent': '#', 'text': 'Simple root node' },
          { 'id': 'ajson2', 'parent': '#', 'text': 'Root node 2' },
          { 'id': 'ajson3', 'parent': 'ajson2', 'text': 'Child 1' },
          { 'id': 'ajson4', 'parent': 'ajson2', 'text': 'Child 2', 'contextmenu': {items: [{label: 'abc', title: 'abc title', 'action': function () { console.log('abc clicked') }}]} }
          ]
        },
        contextmenu: {
          items: function ($node) {
            var tree = $('#bnTree').jstree(true)
            if ($node.parent !== '#') {
              return {
                'Remove': {
                  'label': 'Remove',
                  'action': function (obj) {
                    tree.delete_node($node)
                  }
                }
              }
            }
            return {
              'Create': {
                'label': 'Create',
                'action': function (obj) {
                  $node = tree.create_node($node)
                  tree.edit($node)
                }
              },
              'Rename': {
                'label': 'Rename',
                'action': function (obj) {
                  tree.edit($node)
                }
              },
              'Remove': {
                'label': 'Remove',
                'action': function (obj) {
                  tree.delete_node($node)
                }
              }
            }
          }
        },
        dnd: {
          is_draggable: function ($nodes) {
            return !_.some($nodes, (x) => { return x.parent === '#' })
          }
        },
        plugins: ['dnd', 'contextmenu']
      })
    }

  }
}
</script>
<style>
@import '../../node_modules/jstree/dist/themes/default/style.min.css'
</style>
