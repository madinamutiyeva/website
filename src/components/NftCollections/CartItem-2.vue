<template>
   <div class="flex flex-wrap gap-2">

      <div class="rounded-xl block_cart" v-for="(elem, i) in elems" :key="i">
         <div class="size-w">
            <img :src=elem.image alt="" class="rounded-t-xl">
         </div>

         <div class="text-center border-bg">

            <div class="font-semibold">{{ elem.name }}</div>
            <div class="text-xxs">{{elem.text}}</div>
            <div class="text-xxs">{{elem.nft}}</div>

            <div class="block_icon">
               <img :src=elem.icon alt="" class="rounded-full">
            </div>
         </div>

      </div>

   </div>
</template>

<script>
export default {

   name: "CartItem",
   data() {
      return {
         elems: [
            // {
            //    image: require('@/assets/01.jpg'),
            //    name: 'Merkulove ',
            //    text: 'A collections of 50',
            //    nft: 'NFTs',
            //    icon: require('@/assets/card/01.webp')
            // },
            {
               image: require('@/assets/09.jpg'),
               name: ' Memorabilia',
               text: 'A collections of 50',
               nft: 'NFTs',
               icon: require('@/assets/card/01.webp')
            },
            
         ]
      }
   }
}
</script>

<style>
.size-w {
   width: 180px;
   height: auto;
}

.border-bg {
   position: relative;
}

.block_icon {

   position: absolute;
   width: 28px;
   height: 28px;
   border-radius: 100%;
   top: -15px;
   left: 50%;
   transform: translate(-50%);

}
</style>