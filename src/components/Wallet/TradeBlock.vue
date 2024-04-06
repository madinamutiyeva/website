<template>
   <div class="border-bg">
      <div class="flex gap-x-3 cursor-pointer">
         <div v-for="(elem, index) in elems" :key="index" 
              @click="toggleActive(index)"
              class="px-5 py-3 border-gray-100 border-2 text-center rounded-lg aaa" 
              :class="{ active: elem.active }">
            <img :src="elem.logo" alt="image" class="w-10 rounded-md">
            <div class="font-bold mt-1">
               <div>{{ elem.name }}</div>
            </div>
         </div>
      </div>

      <div class="flex justify-between mt-8">
         <div>
            <div class="font-semibold text-xl2">BTCUSDT</div>
            <div class="font-bold mt-1 text-xl2">22,228.00</div>
         </div>
         <div>
            <div class="rounded-lg bg-green pt-1 pb-1 pr-4 pl-4 text-white">
               1.76%
            </div>
         </div>
      </div>

      <img :src="require('@/assets/grafic.png')" alt="assets" class="mt-5">
   </div>
</template>

<script>
export default {
   name: "TradeBlock",
   data() {
      return {
         elems: [
            {
               logo: require('@/assets/card/01.webp'),
               name: 'BTC',
               active: false
            },
            {
               logo: require('@/assets/card/02.webp'),
               name: 'ADA',
               active: true
            },
            {
               logo: require('@/assets/card/03.webp'),
               name: 'ETH',
               active: false
            },
            {
               logo: require('@/assets/card/04.webp'),
               name: 'BUSD',
               active: false
            },
         ]
      };
   },
   methods: {
      toggleActive(index) {
         this.elems[index].active = !this.elems[index].active;
      }
   }
};
</script>

<style>
.aaa.active {
   background-color: #e1f65a;
}

.aaa:hover {
   background-color: #e1f65a;
}
</style>
