import * as DefaultTheme from '@/themes/default';
import { ConfigPlugin } from '@/config';
/* COMPONENTS */

/* FORM */
import { CForm } from '@/components/form';

import { CFormPanel } from '@/components/form-panel';
import { CFormInput } from '@/components/form-input';
import { CFormTest } from '@/components/form-test';

import { CRadio, CRadioGroup } from '@/components/radio';
import { CCheckbox, CCheckboxGroup } from '@/components/checkbox';

/*  COMMON */
import { CButton } from '@/components/button';
import { CLink } from '@/components/link';
import { CTabs, CTab, CTabPanels, CTabPanel } from '@/components/tabs';
import { CList, CListItem } from '@/components/list';
import { CDropdown } from '@/components/dropdown';

/*  LAYOUT */
import { CContainer, CRow, CCol } from '@/components/layout';

const components = {
    CButton,
    CLink,
    CForm,
    CFormPanel,
    CFormInput,
    CFormTest,
    CRadio,
    CRadioGroup,
    CCheckbox,
    CCheckboxGroup,
    CTabs,
    CTab,
    CTabPanels,
    CTabPanel,
    CList,
    CListItem,
    CContainer,
    CRow,
    CCol,
    CDropdown
};

export const selfInstall = (Vue, theme = {}, component) => {
    const { props = {}, name } = component;
    const defaultComponentTheme = { ...(props?.theme?.default() ? props.theme.default() : {}) };

    props.theme = {
        type: Object,
        default: () => {
            return { ...defaultComponentTheme, ...theme };
        }
    };

    Vue.component(name, {
        ...component,
        ...{
            props
        }
    });
};

const extendComponent = (Vue, CurrentTheme, componentName) => {
    // TODO: if props is undefined
    const { props = {} } = components[componentName];
    const themeDefaultSettings = { ...(props?.theme?.default() ? props.theme.default() : {}) };
    const themeSettings = CurrentTheme[componentName];

    props.theme = {
        type: Object,
        default: () => {
            return { ...themeDefaultSettings, ...themeSettings };
        }
    };

    return Vue.extend({
        ...components[componentName],
        ...{
            props
        }
    });
};

const install = function(Vue, options = {}) {
    const { theme = {}, config = {}, components: injectComponentList = null } = options;

    const CurrentTheme = {
        ...DefaultTheme,
        ...theme
    };

    const componentsToRegister = injectComponentList || Object.keys(components);

    componentsToRegister.forEach(componentName => {
        Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
    });

    ConfigPlugin(config, Vue);
};

export { CForm };
export { CFormPanel };
export { CFormInput };
export { CFormTest };
export { CRadio };
export { CRadioGroup };
export { CCheckbox };
export { CCheckboxGroup };
export { CButton };
export { CLink };
export { CTabs };
export { CTab };
export { CTabPanels };
export { CTabPanel };
export { CList };
export { CListItem };
export { CContainer };
export { CRow };
export { CCol };
export { CDropdown };

export default {
    install
};
