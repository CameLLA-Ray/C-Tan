<template>
  <section
    class="welcome-introduction text-center grid grid-cols-1 justify-items-center pt-12 bg-smooth-green"
  >
    <div>
      <p class="font-semibold text-2xl mb-4">核心功能概念</p>
      <p class="font-normal text-base">
        Our core functions are to conduct corporate carbon accounting, provide new information on
        the global carbon<br />
        situation, and spread corporate low-carbon culture by calculating and summarizing low-carbon
        behaviors of<br />
        corporate employees.
      </p>
    </div>
    <div class="introduction-learn mt-12 flex flex-row justify-between">
      <div><img src="/assets/img/Main1.png" alt="a picture for carbon" /></div>
      <div><img src="/assets/img/Main2.png" alt="a picture for carbon" /></div>
      <div><img src="/assets/img/Main3.png" alt="a picture for carbon" /></div>
    </div>
    <div
      class="introduction-start text-center h-44 grid grid-cols-1 items-center bg-normal-green rounded-xl justify-start"
    >
      <p class="text-2xl font-semibold self-end">一起从这里开始吧！</p>
      <p class="text-base">
        It is a pleasure to provide you with our services, you can start to get to know us slowly
        from here!
      </p>
      <div class="self-start">
        <button
          type="button"
          class="introduction-button rounded-md bg-deeper-green text-gray-100 text-center t"
          @click="modal.formOpen = true"
        >
          开始体验
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import useUserStore from '@/stores/user'

const modal = useUserStore()
</script>

<style lang="css" scoped>
.welcome-introduction {
  height: 890px;
}
.introduction-learn {
  height: 267px;
  width: 1006px;
}
.introduction-start {
  width: 1006px;
  height: 176px;
}
.introduction-button {
  font-size: 16px;
  width: 120px;
  height: 40px;
}
</style>
