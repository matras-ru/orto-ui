# Rating

## Props

| Name            | Type             | Default                                   | Description     |
| --------------- | ---------------- | ----------------------------------------- | --------------- |
| `id`            | `Number, String` | `Math.random().toString(36).substring(7)` | rating id       |
| `scale`         | `Array`          | `[]`                                      | scale list      |
| `increment`     | `Number, String` | `1`                                       | step            |
| `rating`        | `Number, String` | `undefined`                               | for readOnly    |
| `readOnly`      | `Boolean`        | `false`                                   | read-only state |
| `starSize`      | `Number`         | `32`                                      | star size (px)  |
| `activeOnClick` | `Boolean`        | `false`                                   | active on click |
| `gradeModel`    | `Number`         | `undefined`                               | v-model         |

## Events

| Name              | Description |
| ----------------- | ----------- |
| `star-selected`   |             |
| `star-mouse-move` |             |

# Star

## Props

| Name            | Type             | Default     | Description          |
| --------------- | ---------------- | ----------- | -------------------- |
| `fill`          | `Number`         | `undefined` | fill number          |
| `starId`        | `Number`         | `undefined` | id                   |
| `activeColor`   | `String`         | `undefined` | active color (hex)   |
| `inactiveColor` | `String`         | `undefined` | inactive color (hex) |
| `size`          | `Number`         | `undefined` | star size (px)       |
| `gradeModel`    | `Number`         | `undefined` | v-model              |
| `id`            | `Number, String` | `undefined` | rating id            |

## Events

| Name         | Description |
| ------------ | ----------- |
| `mousemove`  |             |
| `click`      |             |
| `touchstart` |             |
| `touchend`   |             |
