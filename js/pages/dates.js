import { html } from "/js/core/html.js"
import { format } from "/js/vendor/date-fns-4.1.0.esm.js"
import dayjs from "/js/vendor/dayjs-1.11.18.js"

const template = html`<section>
  <h1 class="text-2xl mb-4">Dates demo</h1>
  <div>dayjs: {{ time }}</div>
  <div>date-fns: {{ time2 }}</div>
</section>`

export default {
  setup() {
    const time = dayjs("2019-01-25").format("YYYY-MM-DDTHH:mm:ssZ[Z]")
    const time2 = format(new Date("2019-01-25"), "dd-MM-yyyy")

    return { time, time2 }
  },
  template,
}
