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
            <CButton variant="secondary" size="sm">secondary sm</CButton>
            <CButton variant="primary">primary</CButton>
            <CButton variant="primary" size="lg">primary lg</CButton>
            <CButton variant="secondary" size="sm">secondary sm</CButton>
            <CButton variant="secondary">secondary</CButton>
            <CButton variant="secondary" size="lg">secondary lg</CButton>
            <CButton variant="tertiary" size="sm">tertiary sm</CButton>
            <CButton variant="tertiary">tertiary</CButton>
            <CButton variant="tertiary" size="lg">tertiary lg</CButton>
            <CButton variant="quaternary" size="sm">quaternary sm</CButton>
            <CButton variant="quaternary">quaternary</CButton>
            <CButton variant="quaternary" size="lg">quaternary lg</CButton>
            <CButton size="sm" :to="{ name: 'test' }">Button Router-Link </CButton>
            <CButton size="sm" href="//google.com" target="_blank">Button Link </CButton>
        </div>
        <!--  Link -->
        <CLink variant="primary" @click="test">primary</CLink>
        <br />
        <CLink variant="secondary">secondary</CLink>
        <br />
        <CLink variant="tertiary">tertiary</CLink>
        <br />
        <CLink variant="quaternary">quaternary</CLink>
        <br />
        <CLink variant="quinary">quinary</CLink>
        <br /><br />
        <!--  Badge -->
        <CBadge size="lg">-20%</CBadge>
        <CBadge size="md">-20%</CBadge>
        <CBadge size="sm">-20%</CBadge>
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

        <br />
        <br />
        <div class="w-1/2">
            <div>LABEL</div>
            <CListToggle :limit="10">
                <template #wrap>
                    <CList block class="col-gap col-count-3"></CList>
                </template>
                <template #show>
                    <CListItem>
                        <CLink>ЕЩЁ</CLink>
                    </CListItem>
                </template>
                <CListItem v-for="({ title }, idx) in options" :key="idx" :inline="false">
                    {{ title }}
                </CListItem>
            </CListToggle>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',

    data: () => ({
        options: [
            {
                title: '80 x 180'
            },
            {
                title: '80 x 190'
            },
            {
                title: '80 x 200'
            },
            {
                title: '90 x 180'
            },
            {
                title: '90 x 190'
            },
            {
                title: '90 x 200'
            },
            {
                title: '100 x 180'
            },
            {
                title: '100 x 190'
            },
            {
                title: '100 x 200'
            },
            {
                title: '120 x 180'
            },
            {
                title: '120 x 190'
            },
            {
                title: '120 x 200'
            },
            {
                title: '140 x 180'
            },
            {
                title: '140 x 190'
            },
            {
                title: '140 x 200'
            }
        ]
    }),

    methods: {
        test() {
            alert('test');
        }
    }
};
</script>
