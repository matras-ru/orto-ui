<template>
    <div>
        <!--  Button -->
        <div>
            <CButton variant="primary">primary (default)</CButton>
            <CButton variant="secondary">secondary</CButton>
            <CButton variant="tertiary">tertiary</CButton>
            <CButton variant="quaternary">quaternary</CButton>
            <CButton variant="quinary">quinary</CButton>
            <div class="w-1/2">
                <CButton block>Button</CButton>
            </div>
            <CButton size="lg">Button</CButton>
            <CButton disabled>Button</CButton>
            <CButton variant="secondary" size="sm">Button</CButton>
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
            <CButton size="sm" :to="{ name: 'test' }">Button Router-Link </CButton>
            <CButton size="sm" href="//google.com" target="_blank">Button Link </CButton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index'
};
</script>
