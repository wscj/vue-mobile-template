<template>
  <transition name="fade">
    <div v-show="show">
      <span>{{ text }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/index.scss';
div {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  @include flex-center();
  height: 100%;
  width: 100%;
  pointer-events: none;
  span {
    pointer-events: auto;
    height: rem(96);
    line-height: rem(96);
    background: #35353e;
    font-size: rem(28);
    color: #fff;
    padding: 0 rem(76);
    border-radius: rem(48);
    box-shadow: 0 rem(4) rem(12) rgba(0, 0, 0, .5);
    text-align: center;
  }
  .fade-out {
    animation-name: fadeOut;
  }
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.fade-leave-active, .fade-enter-active {
  transition: opacity 300ms;
}
</style>
