<template>
    <div class="flex gap-x-4">
        <div v-for="(item, index) in items" :key="index" class="border-bg">
            <img :src="item.image" width="200px" class="rounded-xl">
            <div class="font-light text-green text-xxs">{{ item.subtitle }}</div>
            <div class="font-medium">{{ item.title }}</div>
            <NftPrice :price="price" class="my-3"/>
            <div class="border-bg rounded-b-none">
                <p>{{ item.grid }}</p>
            </div>
            <div class="border-bg rounded-t-none">
                <p>{{ item.grid2 }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import NftPrice from './NftPrice.vue'

export default {
    name: 'NftCard',
    props: {
        items: Array
    },
    components: {
        NftPrice
    },
    data() {
        return {
            price: [
                {
                    subtitle: 'Current Price',
                    image: require('@/assets/dollar.png'),
                    title: '22.79 USDT',
                    subtitle2: 'USD Price',
                    price: '$22.77',
                },
            ]
        };
    }
};
</script>
<style></style>