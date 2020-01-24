# orto-ui

#### Default theme

```javascript
import OrtoUi from 'orto-ui';

Vue.use(OrtoUi);
```

#### Custom theme

```javascript
import OrtoUi from 'orto-ui';
import * as CustomTheme from './themes/custom';

Vue.use(OrtoUi, {
    theme: CustomTheme
});

Vue.use(OrtoUi);
```

#### Custom config

manage default values by props

```javascript
import OrtoUi from 'orto-ui';

const customConfig = {
    CButton: {
        variant: 'tertiary',
        size: 'sm',
        tag: 'a'
    }
};

Vue.use(OrtoUi, {
    config: customConfig
});
```

#### Manual components list

```javascript
import OrtoUi from 'orto-ui';

Vue.use(OrtoUi, {
    components: ['CButton']
});
```

### Individual components

#### Default theme

```javascript
import { CButton } from 'orto-ui';

Vue.use(CButton);
```

#### Custom theme

```javascript
import { CButton } from 'orto-ui';

const btnTheme = {
    baseClass: 'block align-top'
};

Vue.use(CButton, btnTheme);
```

## Roadmap

| #   | Component                       | MVP | Doc | Unit | Gemini | StoryBook | Accessibility |
| --- | ------------------------------- | --- | --- | ---- | ------ | --------- | ------------- |
| 1   | `button`                        | +   | +   | +    | -      | -         | -             |
| 2   | `link`                          | +   | +   | +    | -      | -         | -             |
| 3   | `container|row|col`             | +   | +   | +    | -      | -         | -             |
| 4   | `list|list-item`                | +   | +   | +    | -      | -         | -             |
| 5   | `tabs|tab|tab-panels|tab-panel` | +   | +   | +-   | -      | -         | -             |
| 6   | `checkbox|checkbox-group`       | +   | +   | +    | -      | -         | -             |
| 7   | `radio|radio-group`             | +   | +   | +    | -      | -         | -             |
| 8   | `form-panel`                    | +   | -   | +-   | -      | -         | -             |
