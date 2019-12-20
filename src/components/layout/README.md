# Layout

## Container

### Props

| Name    | Type      | Default | Description |
| ------- | --------- | ------- | ----------- |
| `fluid` | `Boolean` | `false` |             |

### Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

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
