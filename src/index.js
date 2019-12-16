import * as DefaultTheme from '@/themes/default';
import { ConfigPlugin } from '@/config';

/* COMPONENTS */

/* FORM */
import { CForm } from '@/components/form';
import { CFormError } from '@/components/form-error';
import { CFormPanel } from '@/components/form-panel';
import { CFormInput } from '@/components/form-input';
import { CFormLabel } from '@/components/form-label';
import { CRadio } from '@/components/radio';
import { CRadioGroup } from '@/components/radio';
import { CCheckbox } from '@/components/checkbox';
import { CCheckboxGroup } from '@/components/checkbox';

/*  COMMON */
import { CIcon } from '@/components/icon';
import { CButton } from '@/components/button';
import { CLink } from '@/components/link';
import { CTabs, CTab, CTabPanels, CTabPanel } from '@/components/tabs';
import { CList, CListItem } from '@/components/list';

// import { Dropdown } from '@/components/dropdown';

/*  LAYOUT */
import { CContainer, CRow, CCol } from '@/components/layout';

const components = {
    CButton,
    CForm,
    // CFormError,
    CFormPanel,
    // CFormInput,
    // CFormLabel,
    CRadio,
    CRadioGroup,
    CCheckbox,
    CCheckboxGroup,
    // CIcon,
    CLink,
    CTabs,
    CTab,
    CTabPanels,
    CTabPanel,
    CList,
    CListItem,
    CContainer,
    CRow,
    CCol

    //
    // Dropdown
};

const extendComponent = (Vue, CurrentTheme, componentName) => {
    const themeDefaultSettings = DefaultTheme[componentName];
    const themeSettings = CurrentTheme[componentName];

    // TODO: if props is undefined
    const { props } = components[componentName];

    const prop = {
        default: () => {
            return { ...themeDefaultSettings, ...themeSettings };
        }
    };

    props.theme = prop;

    return Vue.extend({
        ...components[componentName],
        ...{
            props
        }
    });
};

const install = function(Vue, options = {}) {
    if (this.installed) return;

    this.installed = true;

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
export { CFormError };
export { CFormPanel };
export { CFormInput };
export { CFormLabel };
export { CRadio };
export { CRadioGroup };
export { CCheckbox };
export { CCheckboxGroup };
export { CIcon };
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
// export { Dropdown };

export default {
    install
};
