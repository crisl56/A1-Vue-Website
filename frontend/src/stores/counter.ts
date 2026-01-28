import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) // ref gets the variable from every along with it being updated with everytghing
  const doubleCount = computed(() => count.value * 2) // Computed is just derived values from something else
  // computed also only triggers when count updates like a listener. (???) idk how
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
