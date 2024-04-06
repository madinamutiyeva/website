<template>
  <div class="main-action">
    <div class="text-xl2 font-semibold">Actions</div>



    <HeaderTitle name="Deposit" :image="require('@/assets/deposit.png')" />

    <div class="flex">


          <div class="gap-x-10 flex">
            <div class="column-item-2 border-bg">
              <FormDeposit></FormDeposit>
            </div> </div>
     

    

    </div>

  </div>
</template>
<script>

import HeaderTitle from '../HeaderTitle.vue'
import FormDeposit from "./FormDeposit.vue"


export default {
  name: "ActionPages",
  components: {
    FormDeposit,
    HeaderTitle,
  },
}
</script>


<style>
.container {
  display: flex;
}

.main-action {
  flex: 1;
  padding-left: 300px;
  padding-right: 20px;
}

.main-content {
  display: flex;
  column-gap: 20px;
}

.column-item {
  flex: 0 1 25%;
}



.column-item-4 {
  flex: 0 1 30%;
}

.column_bottom {
  column-gap: 15px;
}

.block75 {
  flex: 0 1 75%;
}

.block25 {
  flex: 0 1 25%;
}

.content-item {
  border-bottom: 1px solid #ccc;
  padding: 20px;
}
</style>
