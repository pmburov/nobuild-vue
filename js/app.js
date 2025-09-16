import Count from "/js/components/count.js"
import Navigation from "/js/components/nav.js"

import { html } from "/js/core/html.js"
import { Suspense } from "/js/vue.js"
import { RouterView } from "/js/vue-router.js"

const template = html`<div class="max-w-4xl mx-auto grid grid-cols-[200px_1fr] pt-8">
  <Navigation />
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</div>`

export default {
  setup() {
    return {}
  },
  components: {
    Count,
    Navigation,
    Suspense,
    RouterView,
  },
  template,
}
