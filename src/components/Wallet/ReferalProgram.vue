<template>
   <div class="border-bg">
      <h2 class="text-xl2 font-semibold">Invite Friends</h2>
      <img :src="require('@/assets/program.png')" alt="program">
      <h2 class="text-xl2 font-semibold">Referral Details</h2>
      <p class="text-gray-500">Copy the referral code and send it to the friend</p>
      <div class="flex justify-between border-2 rounded-xl px-2 py-2 mb-2">
         <input type="text" class="" placeholder="Address">
         <button class="bg-black rounded-xl p-2 text-white ml-1">Copy</button>
      </div>

      <div class="flex justify-between border-2 rounded-xl px-2 py-2">
         <input type="text" class="" placeholder="Address">
         <button class="bg-black rounded-xl p-2 text-white ml-1">Copy</button>
      </div>

      <p class="text-gray-500">
         Justo donec enim diam vulputate ut pharetra
      </p>
   </div>
</template>

<script>



export default {
   name: "ReferalProgram",
   props: {
   }
}
</script>