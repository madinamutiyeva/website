<template>
   <div class="items_wrapper">
      <div v-for="(elem, i) in filteredItems" :key="i" class="mb-2 flex justify-between bg-white items-center border border-gray-300 rounded-md p-2">

         <div class="pr-2 flex items-center">
            <div v-if="bool == 'OK'" class="pr-2">
               <img :src="elem.icon" alt="icon">
            </div>

            <div class="pr-2">
               <img :src="elem.image" alt="image" class="w-9 rounded-md">
            </div>
            <div class="text">
               <div>{{ elem.name }}</div>
               <div>{{ elem.subname }}</div>
            </div>
         </div>

         <div v-if="bool == 'SVG'" class="pr-2" >
            <div v-html="elem.svg"></div>
         </div>

         <div class="pr-2">
            <div class="font-bold" v-if="bool  == 'OK' || bool== 'SVG'">
               {{ elem.price }}
            </div>
            <div class="font-bold" v-if="bool  == 'NOT'">
               {{ elem.price_wallet }}
            </div>
            <div v-if="bool  == 'NOT'" class="text-xxs">
               {{ elem.subprice }}
            </div>
         </div>

         <div :class="{ 'bg-red': elem.red}" v-if="bool  == 'OK'" class="rounded-lg bg-green pt-1 pb-1 pr-4 pl-4 text-white">
            {{ elem.sale }}
         </div>
      </div>

   </div>
</template>

<script>
export default {
   name: "CardItem",

   props: {
      bool: String,
      number: String,
      elems: Array
   },

   computed: {
    filteredItems() {
      // Отображаем только первые 6 объектов из массива
      if(this.number == '6')
         return this.elems.slice(0, 6);
      else 
         return this.elems.slice(0, 10);
    }
  }
}



</script>

<style></style>