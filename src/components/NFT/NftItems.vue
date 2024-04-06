<template>
    <HeaderTitle name="Most Popular NFT Items" :image="require('@/assets/fire.png')" />
    <div class="p-3 rounded-xl">
        <NftCard :items="items"/>
    </div>
</template>
 
<script>
import HeaderTitle from '../HeaderTitle.vue'
import NftCard from './NftCard.vue'
export default {
    name: "NftItem",
    components: {
        HeaderTitle,
        NftCard
    },
    data() {
        return {
            items: [
                {
                    image: require('@/assets/07.png'),
                    subtitle: 'Dan Tourlan',
                    title: 'Cryca #29',
                    grid: 'Description',
                    grid2: 'Item History'
                },
                {
                    image: require('@/assets/08.png'),
                    subtitle: 'Dan Tourlan',
                    title: 'Cryca #29',
                    grid: 'Description',
                    grid2: 'Item History'
                },
                {
                    image: require('@/assets/01.jpg'),
                    subtitle: 'Dan Tourlan',
                    title: 'Cryca #29',
                    grid: 'Description',
                    grid2: 'Item History'
                },
                {
                    image: require('@/assets/04.png'),
                    subtitle: 'Dan Tourlan',
                    title: 'Cryca #29',
                    grid: 'Description',
                    grid2: 'Item History'
                },
            ]
        };
    }
}
</script>
 
<style></style>