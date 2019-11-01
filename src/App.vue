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
                <CInput type="text" id="user_name" label="Name *" name="user_name" />
                <CError>Error message</CError>
            </CFormGroup>
            <CFormGroup>
                <CInput id="user_message" label="Message *" name="user_message" />
                <CError>Error message</CError>
            </CFormGroup>
        </CForm>
    </div>
</template>

<script>
import CButton from '@/components/CButton';
import CIcon from '@/components/CIcon';
import CInput from '@/components/CInput';
import CForm from '@/components/CForm';
import CFormGroup from '@/components/CFormGroup';
import CError from '@/components/CError';

export default {
    name: 'app',
    components: {
        CButton,
        CIcon,
        CInput,
        CForm,
        CFormGroup,
        CError
    }
};
</script>
