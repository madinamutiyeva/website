<template>
   <div class="">
        <div class="text-xl2">Weekly Top Collection</div>

      <img :src="require('@/assets/44444.jpg')" alt="" class="rounded-t-xl">

      <div class="border-bg">

         <div class="text-green pb-3">Avin Goldbreak</div>
         <div class="text-xl2 pb-3">Force Coin Collection</div>
         <div class="text-xxs pb-3">Justo donec enim diam vulputate ut pharetra. Ut placerat
            orci nulla pellentesque. Laoreet suspendisse interdum …
            more</div>
         <!-- <img :src="require('@/assets/2222.png')" alt="" class="rounded-t-xl"> -->
         <ItemsNft :elems="elems"/>
      </div>
   </div>
</template>
<script>
import ItemsNft from './ItemsNft.vue'



export default {
    name: "WeeklyTop",
    data() {
        return {
            elems: [
                {
                    image: require('@/assets/01.jpg'),
                    name: 'Ram #21 ',
                    text: '29.98',
                },
                {
                    image: require('@/assets/03.jpg'),
                    name: 'Ram #21 ',
                    text: '29.98',
                },
                // {
                //     image: require('@/assets/04.jpg'),
                //     name: 'Ram #21 ',
                //     text: '29.98',
                // },
                // {
                //     image: require('@/assets/01.jpg'),
                //     name: 'Ram #21 ',
                //     text: '29.98',
                // },
                // {
                //     image: require('@/assets/01.jpg'),
                //     name: 'Ram #21 ',
                //     text: '29.98',
                // },
                // {
                //     image: require('@/assets/03.jpg'),
                //     name: 'Ram #21 ',
                //     text: '29.98',
                // },
            ]
        };
    },
    components: { ItemsNft }
}
</script>
<style></style>