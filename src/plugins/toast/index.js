import Vue from 'vue'
import Component from '@/components/toast'

const Cmp = Vue.extend(Component)
const $vm = new Cmp({ el: document.createElement('div') })
document.body.appendChild($vm.$el)

export default function (text, ms = 2000) {
  $vm.text = text || ''
  $vm.show = true
  setTimeout(() => {
    $vm.show = false
  }, ms)
}
