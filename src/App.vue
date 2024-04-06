<template>
  <ActionSidePanel :items="slidebarItems"></ActionSidePanel>

  <div id="#app" class="bg-bkg">

     <router-view></router-view>

  </div>
</template>
<script>

import ActionSidePanel from "./components/Action/ActionSidePanel.vue"

export default {
  name: "App",
  components: {
    ActionSidePanel
  },
}
</script>

<style></style>
