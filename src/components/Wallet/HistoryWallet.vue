<template>
   <div class="border-bg">
      <div v-for="(elem, i) in elems" :key="i" class="flex justify-between mb-4">
         <div>
            <div class="font-semibold text-xl1">{{ elem.name }}</div>
            <div class="font-bold mt-1 text-green">{{ elem.label }}</div>
         </div>
         <div>
            <div class="pt-1 pb-1 font-semibold">
               {{ elem.num }}
            </div>
            <div class="pt-1 pb-1">
               {{ elem.price }}
            </div>
         </div>
      </div>
   </div>
</template>

<script>



export default {
   name: "HistoryWallet",
   data() {
      return {
        
         elems: [
            {
               name: 'Ethereum (ETH)',
               label: 'Deposit',
               num: '0.1832',
               price: '23.00 USD'
            },
            {
               name: 'Bitcoin',
               label: 'Withdraw',
               num: '0.0003',
               price: '613. 12 USD'
            },
            {
               name: 'Binance (BUSD)',
               label: 'Deposit',
               num: '0.9999',
               price: '213. 12 USD'
            }
         
         ]
      }
   }
}
</script>