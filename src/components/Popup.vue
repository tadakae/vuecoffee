<script>
export default {
  props: {
    TogglePopup: {},
    icon: {
      required: true
    }
  },
  data() {

  }
}
</script>

<template>
  <div class="popup  fixed top-0 left-0 right-0 bottom-0 z-50">
    <div class="popup_inner">
      <button class="back_toggle w-3 h-3 rounded-full bg-red-600 ml-40" @click="TogglePopup()"></button>

      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>