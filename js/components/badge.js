import { html } from "/js/core/html.js"

const template = html`
  <span :class="['inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset', current]">
    <slot />
    <button
      v-if="removable"
      @click:prevent="$emit('click')"
      class="group relative -mr-1 ml-0.5 -mb-0.5 h-3.5 w-3.5 rounded-xs hover:bg-gray-500/20 cursor-pointer"
      data-testid="delete-alias-button"
    >
      <svg viewBox="0 0 14 14" class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600/75">
        <path d="M4 4l6 6m0-6l-6 6" />
      </svg>
    </button>
  </span>
`

/**
 * @typedef {Object} BadgeProps
 * @property {String} color
 * @property {Boolean} removable
 */

export default {
  name: "Badge",
  /** @type {BadgeProps} */
  props: {
    color: { type: String },
    removable: { type: Boolean },
  },
  setup(props) {
    const colorMap = {
      gray: "bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/2",
      red: "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
      yellow:
        "bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
      green:
        "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20",
      blue: "bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
      indigo:
        "bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30",
      purple:
        "bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30",
      pink: "bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20",
    }

    const current = colorMap[props.color || "green"]

    return {
      current,
    }
  },
  template,
}
