<template>
    <div class="main-action">
        <div class="text-xl2 font-semibold">NFT</div>
        <NftUp/>
        <NftItems/>
    </div>
</template>
<script>
import NftUp from './NftUp.vue'
import NftItems from './NftItems.vue'

export default{
    name:'NftPage',
    components:{
        NftUp,
        NftItems
    }
}
</script>
<style></style>