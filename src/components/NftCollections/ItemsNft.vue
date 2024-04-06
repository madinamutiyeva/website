<template>
   <div class="flex flex-wrap gap-2 justify-evenly">

      <div class="rounded-xl block_cart border-bg" v-for="(elem, i) in elems" :key="i">
         <div class="size-www mb-4">
            <img :src=elem.image alt="" class="rounded-xl">
         </div>

         <div class="flex justify-between">

            <div class="font-semibold">{{ elem.name }}</div>
            
            <div class="font-semibold">{{elem.text}}</div>

         </div>

      </div>

   </div>
</template>

<script>
export default {
   props: { 
      elems: Array
   },
   name: "ItemsNft",

}
</script>

<style>
.size-www {
   width: 130px;
   height: 130px;
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