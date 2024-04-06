<template>
   <div class="flex gap-x-1">
      <div class="flex flex-wrap gap-2">

         <div class="rounded-xl block_cart">
            <div class="size-w">
               <img :src="require('@/assets/10.jpg')" class="rounded-t-xl">
            </div>

            <div class="text-center border-bg">

               <div class="font-semibold"> Collection</div>
               <div class="text-xxs">A collections of 50</div>
               <div class="text-xxs">NFTs</div>

               <div class="block_icon">
                  <img :src="require('@/assets/card/01.webp')" class="rounded-full">
               </div>
            </div>

         </div>

      </div>
      <div class="flex flex-wrap gap-2">
         <div class="rounded-xl block_cart">
            <div class="size-w">
               <img :src="require('@/assets/11.jpg')" class="rounded-t-xl">
            </div>

            <div class="text-center border-bg">

               <div class="font-semibold">NFT </div>
               <div class="text-xxs">A collections of 50</div>
               <div class="text-xxs">NFTs</div>

               <div class="block_icon">
                  <img :src="require('@/assets/card/01.webp')" class="rounded-full">
               </div>
            </div>

         </div>

      </div>
   </div>
   <img :src="require('@/assets/02.jpg')" alt="" class="rounded-t-xl">

   <div class="border-bg">

      <div class="text-green pb-3">Avin Goldbreak</div>
      <div class="text-xl2 pb-3">Force Coin Collection</div>
      <div class="text-xxs pb-3">Justo donec enim diam vulputate ut pharetra. Ut placerat
         orci nulla pellentesque. Laoreet suspendisse interdum …
         more</div>
      <img :src="require('@/assets/2222.png')" alt="" class="rounded-t-xl">
      <ItemsNft :elems="elems" />
   </div>
</template>

<script>


export default {
   name: "PopularCol",

}
</script>
<style></style>