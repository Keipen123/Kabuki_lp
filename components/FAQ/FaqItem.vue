<template>
  <li class="py-5">
    <h5 @click="toggleAnswer" class="flex flex-row items-center font-bold text-3xl py-4 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" :class="{'transform rotate-180':isOpen}" class="mr-3" width="28" height="28" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      <slot name="question"></slot>
    </h5>

    <div>
      <p v-if="isOpen">
        <slot name="answer"></slot>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleAnswer() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>