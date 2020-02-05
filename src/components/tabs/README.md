# Tabs

## Props

| Name         | Type            | Default | Description |
| ------------ | --------------- | ------- | ----------- |
| `modelValue` | `Number|String` |         | `v-model`   |
| `vertical`   | `Boolean`       | `false` |             |
| `justify`    | `String`        | `start` |             |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

## Events

| Name       | Description |
| ---------- | ----------- |
| `onChange` |             |

# Tab

## Props

| Name       | Type            | Default | Description |
| ---------- | --------------- | ------- | ----------- |
| `name`     | `Number|String` |         |             |
| `label`    | `String`        |         |             |
| `isActive` | `Boolean`       | `false` |             |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

## Events

| Name      | Description |
| --------- | ----------- |
| `onClick` |             |

## Classes

| Name           | Default                                              |
| -------------- | ---------------------------------------------------- |
| `base`         | `outline-none select-none`                           |
| `stateDefault` | `font-semibold text-lg uppercase px-1-5 py-0-7`      |
| `stateActive`  | `text-secondary-200 border-b-4 border-secondary-200` |

# Tab Panels

## Props

| Name         | Type            | Default | Description |
| ------------ | --------------- | ------- | ----------- |
| `modelValue` | `Number|String` |         | `v-model`   |
| `lazy`       | `Boolean`       | `false` | `v-if/show` |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

# Tab Panel

## Props

| Name   | Type            | Default   | Description |
| ------ | --------------- | --------- | ----------- |
| `tag`  | `String`        | `section` |             |
| `name` | `Number|String` |           |             |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |