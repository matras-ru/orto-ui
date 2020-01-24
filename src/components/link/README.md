# Link

## Props

| Name                   | Type      | Default | Description                               |
| ---------------------- | --------- | ------- | ----------------------------------------- |
| `variant`              | `String`  | `null`  | Possible: `primary`                       |
| `label`                | `String`  |         |                                           |
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

| Name             | Default                                              |
| ---------------- | ---------------------------------------------------- |
| `base`           | `inline-block no-underline`                          |
| `variantDefault` | `text-black-100 border-b-2 border-black-100`         |
| `variantPrimary` | `text-secondary-200 border-b-2 border-secondary-200` |
| `stateDisable`   | `opacity-75 cursor-not-allowed`                      |
