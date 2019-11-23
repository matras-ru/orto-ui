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

| Name                 | Default                                          |
| -------------------- | ------------------------------------------------ |
| `wrapperBase`        | `flex flex-wrap mb-0-7`                          |
| `labelBase`          | `inline-flex`                                    |
| `inputBase`          | `absolute opacity-0 invisible`                   |
| `labelStateDefault`  | `cursor-pointer`                                 |
| `labelStateDisabled` | `cursor-not-allowed`                             |
| `iconCheckboxBase`   | `w-0-8 h-0-8 border-2 mr-0-5 mt-0-2 rounded-sm`  |
| `iconStateDefault`   | `border-black-200 bg-white`                      |
| `iconStateChecked`   | `border-black-200 bg-secondary-200 shadow-inner` |
| `iconStateDisabled`  | `border-tertiary-200 bg-white`                   |
