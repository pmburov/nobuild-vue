import { html } from "/js/core/html.js"
import { useGlobalStore } from "/js/store.js"
import { ref } from "/js/vue.js"

const template = html`<div>
  Count is: {{ count }}
  <button @click="inc">+1</button>
</div>`

export default {
  setup() {
    const store = useGlobalStore()

    const count = ref(0)

    function inc() {
      count.value += 1
      store.count += 1
    }

    return { count, inc }
  },
  template,
}
