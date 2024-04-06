<template>
    <HeaderTitle name="Explore" :image="require('@/assets/raketa.png')" />
    <div class="container">
        <div class="column_bottom flex border-2 rounded-xl p-2">
            <div class="column-item">
                <div class="bg-white p-3 rounded-xl">
                    <NftTitle name="Browse Categories" />
                    <NftCategories />
                </div>
                <img src="@/assets/banner1.png" width="250px">
            </div>
            <div class="column-item">
                <div class="bg-white p-3 rounded-xl">
                    <NftTitle name="Top Movers" />
                    <div class="pt-2">
                        <div class="font-light flex items-center pb-2">
                            <button class="text-xs border-2 p-2 py-1 rounded-xl mr-2">12h</button>
                            <button class="text-xs border-2 p-2 py-1 rounded-xl mr-2">1D</button>
                            <button class="text-xs border-2 p-2 py-1 rounded-xl mr-2">1W</button>
                            <button class="text-xs border-2 p-2 py-1 rounded-xl mr-2">1M</button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <section class="flex flex-col text-center justify-center items-center mx-2">
                            <img src="@/assets/06.png" width="50px" height="50px" class="rounded-full">
                            <div class="text-xs ">Radia <br> Shadowshine</div>
                            <div class="text-lg font-medium">$382.5M</div>
                        </section>
                        <section class="flex flex-col text-center justify-center items-center mx-2">
                            <img src="@/assets/07.png" width="50px" height="50px" class="rounded-full">
                            <div class="text-xs ">Rubande <br> Royburn</div>
                            <div class="text-lg font-medium">$189.0M</div>
                        </section>
                        <section class="flex flex-col text-center justify-center items-center mx-2">
                            <img src="@/assets/08.png" width="50px" height="50px" class="rounded-full">
                            <div class="text-xs ">Sig of <br> Astfield</div>
                            <div class="text-lg font-medium">$220.0M</div>
                        </section>
                        <section class="flex flex-col text-center justify-center items-center mx-2">
                            <img src="@/assets/04.png" width="50px" height="50px" class="rounded-full">
                            <div class="text-xs ">Sam <br> Woodbe</div>
                            <div class="text-lg font-medium">$120.0M</div>
                        </section>
                    </div>
                </div>
            </div>
            <div class="">
                <NftTitle name="Popular Collections" />
                <div class="flex mt-2">
                    <CartItem  class="mr-2"/>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTitle from '../HeaderTitle.vue'
import NftTitle from './NftTitle.vue'
import NftCategories from './NftCategories.vue'
import CartItem from '../NftCollections/CartItem-2.vue'
export default {
    name: 'NftUp',
    components: {
        HeaderTitle,
        NftTitle,
        NftCategories,
        CartItem
    },
}
</script>
<style></style>