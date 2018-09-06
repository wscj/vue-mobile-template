<template>
  <transition name="fade">
    <div class="loading" v-show="show">
      <i></i>
      <span>{{ text }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      text: '加载中'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/index.scss';
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
  @include flex-center();
  flex-direction: column;
  i {
    background: rgba(0, 0, 0, .6);
    width: rem(240);
    height: rem(240);
    border-radius: rem(14);
    &:before {
      content: '';
      display: block;
      width: rem(64);
      height: rem(64);
      margin: rem(50) auto;
      background: url('~@/assets/img/loading.svg') no-repeat;
      background-size: 100% 100%;
      background-position: center;
      animation: loading 1s steps(12, end) infinite;
    }
  }
  span {
    font-size: rem(28);
    color: rgba(255, 255, 255, .8);
    margin-top: rem(-88);
    font-weight: normal;
  }
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.fade-leave-active, .fade-enter-active {
  transition: opacity 300ms;
}

@keyframes loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
</style>
