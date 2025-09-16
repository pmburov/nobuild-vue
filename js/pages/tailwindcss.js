import { html } from "/js/core/html.js"

const template = html`<section>
  <link rel="stylesheet" href="./css/styles.css" />
  <h1 class="text-2xl mb-4">Tailwind CSS</h1>
  <p>And it just works no problem whatsoever</p>
</section>`

export default {
  setup() {
    return {}
  },
  template,
}
