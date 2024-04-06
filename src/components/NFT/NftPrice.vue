<template>
    <div>
        <div v-for="(price, index) in price" :key="index" class="background flex justify-between text-white p-3 rounded-xl">
            <div>
                <div class="font-light text-xxs">{{ price.subtitle }}</div>
                <div class="flex items-center">
                    <img :src="price.image" class="" width="20px">
                    <div class="text-lg">{{ price.title }}</div>
                </div>
            </div>
            <div class="">
                <div class="font-light text-xxs">{{ price.subtitle2 }}</div>
                <div class="font-light text-xxs pt-1" align="right">{{ price.price }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NftPrice",
    props: {
        price: Array,
    }
}
</script>
<style>
.background {
    background: url('@/assets/bumaga.jpg') no-repeat;
    background-size: cover;
}
</style>