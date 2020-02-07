# Dropdown

## Props

| Name          | Type      | Default | Description |
| ------------- | --------- | ------- | ----------- |
| `modelValue`  | `String`  | `null`  | v-model     |
| `label`       | `String`  | `null`  |             |
| `data`        | `Array`   | `[]`    |             |
| `optionValue` | `String`  | `value` | ...         |
| `optionLabel` | `String`  | `label` | ...         |
| `error`       | `Boolean` | `false` |             |

## Events

| Name     | Description |
| -------- | ----------- |
| `change` |             |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` | option      |

## Classes

| Name                 | Default                          |
| -------------------- | -------------------------------- |
| `inputBase`          | `cursor-pointer`                 |
| `inputIcon`          | `block form-select w-1-4 h-1-4`  |
| `optionBase`         | `cursor-pointer py-0-4 px-0-8`   |
| `optionStateDefault` | `bg-white hover:bg-tertiary-100` |
| `optionStateActive`  | `bg-tertiary-100`                |
