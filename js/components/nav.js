import { html } from "/js/core/html.js"
import { RouterLink } from "/js/vue-router.js"

const template = html`<header class="flex flex-col gap-4">
  <RouterLink to="/">Home</RouterLink>{{ " " }} <RouterLink to="/dates">Dates demo</RouterLink>{{ " " }}
  <RouterLink to="/store">Store demo</RouterLink>{{ " " }}
</header>`

export default {
  setup() {
    return {}
  },
  components: {
    RouterLink,
  },
  template,
}
