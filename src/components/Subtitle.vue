<template>
    <div class="pt-4 flex justify-between">
        <div>{{ name }}</div>
        <div>{{ percent }}</div>
    </div>
    <hr class="">
    <div class="pt-4 flex justify-between">
        <div>{{ name2 }}</div>
        <div>{{ price }}</div>
    </div>
</template>
<script>
export default{
    name:'SubTitle',
    props:{
        name: String,
        percent: String,
        name2: String,
        price: String,
    }
}
</script>
<style></style>