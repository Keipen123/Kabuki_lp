<template>
  <div>
    <button @click="$emit('toggleMenu')" class="flex items-center focus:outline-none">
      <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
    </button>
  </div>
</template>

<script>
export default {
  emits: ['toggleMenu']
}
</script>