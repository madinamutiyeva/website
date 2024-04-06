<template>
   <div class="main-action">
      <div class="text-xl2 font-semibold">NFT Collections</div>

      <div class="flex gap-x-3 items-start">
         <div class="column-item ">

            <NftTitle class="border-bg" />
            <CartItem class="mt-4" />

         </div>


         <div class="column-item border-bg">
            <TopMover/>
            <ItemsNft :elems="elems"/>
         </div>


         <div class="column-item">
            <WeeklyTop/>
         </div>

         <div class="column-item border-bg ">
            <div class="text-xl2 font-semibold mb-2">Popular Collections</div>
            <PopularCol/>
         </div>

      </div>

   </div>
</template>
<script>

import NftTitle from '../NFT/NftCategories'
import CartItem from './CartItem'
import TopMover from './TopMover'
import ItemsNft from './ItemsNft'
import WeeklyTop from './WeeklyTop'
import PopularCol from './PopularCol'


export default {
   name: "ActionPages",
   components: {
      NftTitle,
      CartItem,
      TopMover,
      ItemsNft,
      PopularCol,
      WeeklyTop
   },
   data() {
      return {
         elems: [
            // {
            //    image: require('@/assets/01.jpg'),
            //    name: 'Ram #21 ',
            //    text: '29.98',
            // },
            // {
            //    image: require('@/assets/03.jpg'),
            //    name: 'Ram #21 ',
            //    text: '29.98',
            // },
            {
               image: require('@/assets/04.jpg'),
               name: 'Ram #21 ',
               text: '29.98',
            },
            {
               image: require('@/assets/01.jpg'),
               name: 'Ram #21 ',
               text: '29.98',
            },
            // {
            //    image: require('@/assets/01.jpg'),
            //    name: 'Ram #21 ',
            //    text: '29.98',
            // },
           {
               image: require('@/assets/07.jpg'),
               name: 'Ram #21 ',
               text: '29.98',
            },
         //    {
         //       image: require('@/assets/01.jpg'),
         //       name: 'Ram #21 ',
         //       text: '29.98',
         //    },
         //    {
         //       image: require('@/assets/11.jpg'),
         //       name: 'Ram #21 ',
         //       text: '29.98',
         //    },
         ]
      }
   }


}
</script>
 
 
<style>
.container {
   display: flex;
}

.main-action {
   flex: 1;
   padding-left: 300px;
   padding-right: 20px;
}


.main-content {
   display: flex;
   column-gap: 20px;
}

.column-item {
   flex: 0 1 25%;
}


.column_bottom {
   column-gap: 15px
}


.content-item {
   border-bottom: 1px solid #ccc;
   padding: 20px;
}
</style>