import { html } from "/js/core/html.js"
import { useGlobalStore } from "/js/store.js"

const template = html`<section>
  <h1 class="text-2xl mb-4">Store demo</h1>
  <div>counter from home page: {{ store.count }}</div>
</section>`

export default {
  setup() {
    const store = useGlobalStore()

    return { store }
  },
  template,
}
