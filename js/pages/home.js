import Count from "/js/components/count.js"
import { html } from "/js/core/html.js"
import { RouterLink } from "/js/vue-router.js"

const template = html`<section>
  <h1 class="text-2xl mb-4">Home</h1>
  <Count />
  <p>
    P.S. I can't be bothered to properly style this demo app scaffold even though it has
    <RouterLink to="/tailwindcss">Tailwind CSS</RouterLink>
  </p>
</section>`

export default {
  setup() {
    return {}
  },
  components: {
    Count,
    RouterLink,
  },
  template,
}
