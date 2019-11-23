# Button

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `String` | `null` | Possible: `primary, secondary, tertiary, quaternary, quinary` |
| `size` | `String` | `md` | Possible: `lg, md, sm` |
| `block` | `Boolean` | `false` |  |
| `label` | `String` |  |  |
| `type` | `String` |  | Possible: `submit, reset` |
| `tag` | `String` | `button` |  |
| `disabled` | `Boolean` | `false` |  |

| `*link-props` | | | See link-specific props |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

## Events

| Name      | Description |
| --------- | ----------- |
| `onClick` |             |

## Classes

| Name | Default |
| --- | --- |
| `base` | `inline-block align-top rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3 mb-1-4` |
| `variantPrimary` | `bg-white border-primary-100 transition-shadow hover:shadow` |
| `variantSecondary` | `bg-primary-100 border-primary-100 transition-shadow hover:shadow` |
| `variantTertiary` | `bg-white border-secondary-200 text-secondary-200 transition-bg transition-color hover:text-white hover:bg-secondary-200` |
| `variantQuaternary` | `bg-white border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100` |
| `variantQuinary` | `bg-white border-black-100 transition-bg transition-color hover:text-white hover:bg-black-100` |
| `stateDisable` | `cursor-not-allowed opacity-75` |  | `sizeSm` | `text-base px-1-3 py-0-3 leading-snug` |  | `sizeMd` | `text-base px-1-5 py-0-4 leading-snug` |  | `sizeLg` | `text-lg px-1-5 py-0-6 leading-none` |  | `displayBlock` | `w-full` |
