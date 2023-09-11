<template>
  <section class="welcome-header grid grid-cols-1 grid-rows-4 items-center relative z-10">
    <div class="absolute w-1/2 bottom-0 -z-10">
      <img src="/assets/img/Frame114.png" alt="some trees and mountains" class="opacity-60" />
    </div>

    <div class="absolute left-1/2 -z-10 main-img-box2">
      <img src="/assets/img/Group514.png" alt="the picture of world" class="main-img-second" />
    </div>

    <p class="main-title text-center font-bold mt-40 row-start-1 row-end-3 text-darker-green">
      专注于包装外贸企业的一体化<br />碳管理SAAS系统
    </p>
    <p class="text-center text-smooth-white text-base font-normal mt-9">
      An integrated carbon management SAAS system focusing on packaging foreign trade enterprises
    </p>
    <button
      class="rounded-md bg-deeper-green text-gray-100 main-button justify-self-center -mt-16 text-center inline-block py-3"
      @click="modal.formOpen = true"
    >
      登入账号
    </button>
  </section>
</template>

<script setup>
import useUserStore from '@/stores/user'

const modal = useUserStore()
</script>

<style lang="css" scoped>
/* Welcome-header*/
.welcome-header {
  background-image: url('/assets/img/Video.png');
  height: 461px;
}
.main-title {
  font-size: 40px;
}
.main-button {
  width: 120px;
}
.main-img-second {
  width: 150%;
}
.main-img-box2 {
  height: 365px;
  width: 751px;
}
</style>
