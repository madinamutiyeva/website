<template>
   <div class="flex items-center pt-6 pl-2">
      <img :src="image" class="w-8 pr-1">
      <div class="text-base font-medium">{{ name }}</div>
   </div>
</template>

<script>



export default {
   name: "HeaderTitle",
   props: {
      name: String,
      image: String
   }
}
</script>