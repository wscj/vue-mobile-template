import Vue from 'vue'
import Component from '@/components/loading'

const Cmp = Vue.extend(Component)
const $vm = new Cmp({ el: document.createElement('div') })
document.body.appendChild($vm.$el)

export default function (show, text = '加载中') {
  $vm.show = !!show
  if (show) {
    $vm.text = text
  }
}
