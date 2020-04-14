import * as vClickOutside from 'v-click-outside-x';
import * as DefaultTheme from '@/themes/default';
import { ConfigPlugin } from '@/config';
/* COMPONENTS */

/* FORM */
import { CForm } from '@/components/form';

import { CFormPanel } from '@/components/form-panel';
import { CFormInput } from '@/components/form-input';
import { CFormField } from '@/components/form-field';

import { CFormSelectCustom } from '@/components/form-select';

import { CRadio, CRadioGroup } from '@/components/radio';
import { CCheckbox, CCheckboxGroup } from '@/components/checkbox';

/*  COMMON */
import { CButton } from '@/components/button';
import { CLink } from '@/components/link';
import { CTabs, CTab, CTabPanels, CTabPanel } from '@/components/tabs';
import { CList, CListItem } from '@/components/list';
import { CDropdown } from '@/components/dropdown';
import { CBadge } from '@/components/badge';
import { CPicture } from '@/components/picture';

/*  LAYOUT */
import { CContainer, CRow, CCol } from '@/components/layout';

const components = {
    CButton,
    CBadge,
    CLink,
    CForm,
    CFormPanel,
    CFormField,
    CFormInput,
    CFormSelectCustom,
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
    CDropdown,
    CPicture
};

export const selfInstall = (Vue, theme = {}, component) => {
    const { props = {}, name } = component;
    const defaultComponentTheme = { ...(props && props.theme ? props.theme.default() : {}) };

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

    const themeDefaultSettings = { ...(props && props.theme ? props.theme.default() : {}) };
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

const install = function (Vue, options = {}) {
    const { theme = {}, config = {}, components: injectComponentList = null } = options;

    const CurrentTheme = {
        ...DefaultTheme,
        ...theme
    };

    const componentsToRegister = injectComponentList || Object.keys(components);

    componentsToRegister.forEach(componentName => {
        Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
    });

    Vue.use(vClickOutside);

    ConfigPlugin(config, Vue);
};

export { CForm };
export { CFormPanel };
export { CFormInput };
export { CFormField };
export { CFormSelectCustom };
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
export { CPicture };

export default {
    install
};
