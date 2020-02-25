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
        <!--  Link -->
        <CLink variant="primary" @click="test">Ссылка</CLink>
        <br />
        <CLink variant="secondary">Ссылка</CLink>
        <br />
        <CLink variant="tertiary">Ссылка</CLink>
        <br />
        <CLink variant="quaternary">Ссылка</CLink>
        <br />
        <CLink variant="quinary">Подробнее</CLink>
        <br /><br />
        <!--  Badge -->
        <CBadge>-20%</CBadge>
        <br />
        <br />
        <h1 class="text-4xl">
            Lorem ipsum dolor sit amet <br />
            adipisicing elit. Laboriosam, minus.
            <CBadge variant="secondary" class="text-base">ХИТ</CBadge>
        </h1>
        <br />
        <br />
        <CBadge variant="tertiary">-20%</CBadge>
    </div>
</template>

<script>
export default {
    name: 'Index',

    methods: {
        test() {
            alert('wfwf');
        }
    }
};
</script>
