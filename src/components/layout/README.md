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
| `justify`              | `String` |         |                                  |
| `align`                | `String` |         |                                  |
| `direction`            | `String` | `row`   |                                  |
| `gutters`              | `String` | `md`    | Possible: `none, xs, sm, md, lg` |
| `gutters${breakpoint}` | `String` |         | Possible: see `gutters`          |

### Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |

## Col

### Props

| Name                 | Type     | Default                 | Description |
| -------------------- | -------- | ----------------------- | ----------- |
| `cols`               | `Number` |                         |             |
| `${breakpoint}`      | `Number` | Possible: see `gutters` |             |
| `order`              | `Number` |                         |             |
| `order${breakpoint}` | `Number` |                         |             |
| `align`              | `String` |                         | align-self  |

### Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |
