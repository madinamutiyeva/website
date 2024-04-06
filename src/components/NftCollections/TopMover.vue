<template>
  <div class="text-xl2">Weekly Top Mover</div>
  <!-- <div class="border-bg">

    <img :src="require('@/assets/1111.png')" alt="">
  </div> -->
  <div class="text-xxs my-4">Justo donec enim diam vulputate ut pharetra. Ut placerat
    orci nulla pellentesque. Laoreet suspendisse interdum …
    more</div>

  <div class="flex border-rrr">
    <div class="text-center flex-50 flex-50-active">Items</div>
    <div class="text-center flex-50">Collections</div>
  </div>
</template>
<script>


export default {
  name: "TopMover",

}
</script>
<style>
.border-rrr {
    border-radius: 24px;
    border: 1px solid #ebebeb;}

.flex-50-active {
  border-radius: 24px;
  margin: 2px;
  background: #e1f65a;
}

.flex-50 {
  flex: 0 1 50%;
  border-radius: 24px;


}
</style>