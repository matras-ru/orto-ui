# CheckboxGroup

## Props

| Name         | Type    | Default | Description   |
| ------------ | ------- | ------- | ------------- |
| `modelValue` | `Array` | `[]`    | v-model       |
| `data`       | `Array` | `[]`    | checkbox list |

## Events

| Name     | Description |
| -------- | ----------- |
| `change` |             |

# Checkbox

## Props

| Name         | Type                          | Default     | Description |
| ------------ | ----------------------------- | ----------- | ----------- |
| `value`      | `String|Number`               |             |             |
| `modelValue` | `Array|Boolean|String|Number` |             | v-model     |
| `trueValue`  | `String|Number|Boolean`       | `true`      |             |
| `falseValue` | `String|Number|Boolean`       | `false`     |             |
| `label`      | `String`                      |             |             |
| `name`       | `String`                      |             |             |
| `id`         | `String`                      |             |             |
| `disabled`   | `Boolean`                     | `false`     |             |
| `theme`      | `Object`                      | see Classes |             |

## Events

| Name     | Description |
| -------- | ----------- |
| `change` |             |

## Classes - CRadioCheckbox.js

| Name                 | Default                       |
| -------------------- | ----------------------------- |
| `wrapperBase`        | `flex flex-wrap mb-0-5`       |
| `labelBase`          | `flex flex-wrap items-center` |
| `inputBase`          | `mr-0-5`                      |
| `inputCheckboxBase`  | `form-checkbox`               |
| `labelStateDefault`  | `cursor-pointer`              |
| `labelStateError`    | `cursor-pointer`              |
| `labelStateDisabled` | `cursor-not-allowed`          |
