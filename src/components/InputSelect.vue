<template>
   <div class="input_select">
      <div class="font-light text-pt text-xxs pl-3">{{ options.name }}</div>
      <div class="flex items-center">
         <input type="text" class="border-2 border-buu rounded-xl p-2 px-2  " :placeholder="options.inputPlaceholder">
         <div class="bg-grey p-2 flex rounded-lg items-center ml-2  ">
            <img :src="options.logo" class="h-6">
            <select class="bg-grey">
               <option>{{ options.option_one }}</option>
               <option>{{ options.option_two }}</option>
            </select>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name: "InputSelect",
   props: {
      options: Object
   }, 
   components: {

   },
}
</script>

<style></style>