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
    </div>
</template>

<script>
import CButton from '@/components/CButton';
import CIcon from '@/components/CIcon';

export default {
    name: 'app',
    components: {
        CButton,
        CIcon
    }
};
</script>
