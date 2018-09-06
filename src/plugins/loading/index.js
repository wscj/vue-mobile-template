import Vue from 'vue'
import Component from '@/components/loading'

let $vm
const Cmp = Vue.extend(Component)

if (!$vm) {
  $vm = new Cmp({
    el: document.createElement('div')
  })
  document.body.appendChild($vm.$el)
}
console.log(222)
export default function (show, text = '加载中') {
  console.log(666)
  $vm.show = !!show
  if (show) {
    $vm.text = text
  }
}
