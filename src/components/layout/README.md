# Layout

## Container

### Props

| Name        | Type      | Default | Description |
| ----------- | --------- | ------- | ----------- |
| `modeFluid` | `Boolean` | `false` |             |

### Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

### Classes

| Name    | Default      |
| ------- | ------------ |
| `base`  | `container`  |
| `fluid` | `max-w-none` |

## Row

### Props

| Name                   | Type     | Default | Description                      |
| ---------------------- | -------- | ------- | -------------------------------- |
| `gutters`              | `String` | `md`    | Possible: `none, xs, sm, md, lg` |
| `gutters${breakpoint}` | `String` |         | Possible: see ``                 |
| `cols`                 | `Number` | `12`    | cols per row                     |
| `${breakpoint}`        | `Number` |         | cols per row - breakpoint        |

### Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

### Classes

| Name                   | Default          |
| ---------------------- | ---------------- |
| `base`                 | `flex flex-wrap` |
| `guttersNormalizeXl`   | `-mx-1-8`        |
| `guttersNormalizeLg`   | `-mx-1-4`        |
| `guttersNormalizeMd`   | `-mx-0-8`        |
| `guttersNormalizeSm`   | `-mx-0-4`        |
| `guttersNormalizeNone` | ``               |
| `guttersXl`            | `px-1-8`         |
| `guttersLg`            | `px-1-4`         |
| `guttersMd`            | `px-0-8`         |
| `guttersSm`            | `px-0-4`         |
| `guttersNone`          | ``               |

## Col

### Props

| Name            | Type     | Default | Description             |
| --------------- | -------- | ------- | ----------------------- |
| `cols`          | `Number` |         | cols count              |
| `${breakpoint}` | `Number` |         | cols count - breakpoint |

### Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

### Classes

| Name   | Default      |
| ------ | ------------ |
| `base` | `max-w-full` |
