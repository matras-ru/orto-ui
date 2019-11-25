# orto-ui

## Usage

### All components

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
