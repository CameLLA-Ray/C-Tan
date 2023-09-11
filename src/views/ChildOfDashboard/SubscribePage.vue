<template>
  <div class="ml-16">
    <!-- header-box -->
    <div class="text-heigher-green font-medium mb-5 mt-12">
      <p class="text-3xl">企业碳资讯订阅</p>
      <p class="text-xl">Carbon Information Subscription</p>
    </div>

    <!-- price-box -->
    <div>
      <ul class="flex flex-row gap-5">
        <li v-for="object in priceList" :key="object.index">
          <div
            class="child-price-box grid grid-cols-2 grid-rows-2 items-center"
            :class="object.index % 2 == 0 ? 'bg-green' : 'bg-orange'"
          >
            <p class="col-start-1 col-end-3 justify-self-start pl-7 font-semibold text-sm">{{ object.name }}</p>
            <p class="pl-7 font-semibold text-2xl self-start">{{ object.price }}</p>
            <p class="flex flex-row gap-1 self-start">

              {{ object.range }}

              <div class="mt-1" v-if="object.range.substring(0,1) == '+'">
                <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                  fill="#1C1C1C"
                />
              </svg>
              </div>
              <div class="mt-1" v-else>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3463 3.63931C14.5455 3.83054 14.5519 4.14706 14.3607 4.34627L11.0007 7.84627C10.9064 7.94448 10.7761 8 10.64 8C10.5039 8 10.3736 7.94448 10.2793 7.84627L8.24 5.72199L5.82335 8.23933L7.54513 9.89223L2 11.5L3.38019 5.8939L5.10197 7.5468L7.87931 4.65373C7.97359 4.55552 8.10385 4.5 8.24 4.5C8.37615 4.5 8.50641 4.55552 8.60069 4.65373L10.64 6.77801L13.6393 3.65373C13.8305 3.45453 14.1471 3.44807 14.3463 3.63931Z" fill="#1C1C1C"/>
                  </svg>                  
              </div>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- charts-box -->
    <div class="flex flex-row mt-6 gap-3">
      <div style="width: 729px; height:353px">
        <img src="/assets/img/1.png" alt="a chart for the carbon price of some city" />
      </div>

      <div class=" pb-5 bg-white rounded-xl" style="height: 353px; width:350px">
        <img src="/assets/img/2.png" alt="another for this"/>
      </div>
    </div>

    <!-- information-box -->
    <div class=" mt-5" style="width: 1095px;">
        <a href="http://chinawto.mofcom.gov.cn/article/ap/p/202204/20220403305167.shtml" style="display:inline-block;padding-right:50px;background-color:white;border-radius:12px;margin-bottom:20px">
          <img src="/assets/img/3.png" alt="a message for carbon" />
        </a>
        <a href="http://chinawto.mofcom.gov.cn/article/ap/p/202204/20220403305167.shtml" style="display:inline-block;padding-right:50px;background-color:white;border-radius:12px">
          <img src="/assets/img/3.png" alt="a message for carbon" />
        </a>
    </div>
  </div>
</template>

<script setup>
const priceList = [
  {
    index: '0',
    name: '北京Beijing',
    price: '38.2',
    range: '+11.01%'
  },
  {
    index: '1',
    name: '上海Shanghai',
    price: '36.7',
    range: '+9.15%'
  },
  {
    index: '2',
    name: '深圳Shenzhen',
    price: '33.2',
    range: '-0.56%'
  },
  {
    index: '3',
    name: '广州Guangzhou',
    price: '28.6',
    range: '-1.48%'
  },
  {
    index: '4',
    name: '南京Nanjing',
    price: '35.4',
    range: '-2.03%'
  }
]
</script>

<style lang="scss" scoped>
.child-price-box {
  width: 202px;
  height: 112px;
  border-radius: 16px;
  overflow: hidden;
}

.bg-green {
  background-color: #bcd3c3;
}

.bg-orange {
  background-color: #fce0a8;
}
</style>
