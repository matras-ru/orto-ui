<template>
    <div id="app">
        <CIcon name="cart" />
        <CButton size="sm">Button</CButton>
        <CButton>Button</CButton>
        <CButton size="lg">Button</CButton>
        <CButton variant="primary" size="sm">Button</CButton>
        <CButton variant="primary">Button</CButton>
        <CButton variant="primary" size="lg">Button</CButton>
        <CButton variant="secondary" size="sm">Button</CButton>
        <CButton variant="secondary">Button</CButton>
        <CButton variant="secondary" size="lg">Button</CButton>
        <CButton variant="tertiary" size="sm">Button</CButton>
        <CButton variant="tertiary">Button</CButton>
        <CButton variant="tertiary" size="lg">Button</CButton>
        <CButton variant="quaternary" size="sm">Button</CButton>
        <CButton variant="quaternary">Button</CButton>
        <CButton variant="quaternary" size="lg">Button</CButton>
        <CForm action="/" method="POST">
            <CFormGroup>
                <CInput type="text" id="user_name" label="Name *" name="user_name" value="78" />
                <CError>Error message</CError>
            </CFormGroup>
            <CFormGroup>
                <CInput id="user_message" label="Message *" name="user_message" />
                <CError>Error message</CError>
            </CFormGroup>
            <CFormGroup>
                <CCheckbox id="checkbox1" label="Default" name="checkbox1" value="checkbox1" />
                <CCheckbox
                    id="checkbox2"
                    label="Disabled"
                    name="checkbox2"
                    value="checkbox2"
                    disabled
                />
                <CCheckboxGroup
                    :data="[
                        {
                            id: 'checkbox3',
                            label: 'Checkbox1',
                            name: 'checkbox3',
                            value: 'checkbox3'
                        },
                        {
                            id: 'checkbox4',
                            label: 'Checkbox2',
                            name: 'checkbox4',
                            value: 'checkbox4'
                        }
                    ]"
                />
            </CFormGroup>
            <CFormGroup>
                <CRadio id="radio1" label="Default" name="radio1" value="radio1" />
                <CRadio id="radio2" label="Default" name="radio1" value="radio2" disabled />
                <CRadioGroup
                    :data="[
                        { id: 'radio3', label: 'Radio1', name: 'radio', value: 'radio3' },
                        { id: 'radio4', label: 'Radio2', name: 'radio', value: 'radio4' }
                    ]"
                />
            </CFormGroup>
        </CForm>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script>
