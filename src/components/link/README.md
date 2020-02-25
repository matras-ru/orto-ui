# Link

## Props

| Name                   | Type      | Default | Description                               |
| ---------------------- | --------- | ------- | ----------------------------------------- |
| `variant`              | `String`  | `null`  | Possible: `primary`                       |
| `label`                | `String`  |         |                                           |
| `inline`               | `Boolean` |         |                                           |
| `href`                 | `String`  |         |                                           |
| `disabled`             | `Boolean` |         |                                           |
| `target`               | `String`  | `_self` |                                           |
| `rel`                  | `String`  |         |                                           |
| `*routerSpecificProps` |           |         | https://router.vuejs.org/api/#router-link |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

## Events

| Name      | Description |
| --------- | ----------- |
| `onClick` |             |

## Classes

| Name                | Default                                      |
| ------------------- | -------------------------------------------- |
| `base`              | `inline-block no-underline`                  |
| `variantPrimary`    | `text-black-100 border-b-2 border-black-100` |
| `variantSecondary`  | ``                                           |
| `variantTertiary`   | ``                                           |
| `variantQuaternary` | ``                                           |
| `variantQuinary`    | ``                                           |
| `stateDisable`      | `opacity-75 cursor-not-allowed`              |
