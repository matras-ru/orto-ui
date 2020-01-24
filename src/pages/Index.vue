<template>
    <div>
        <!-- Icon -->
        <!-- <div>
            <div>
                <CIcon name="share" class="text-primary-100" />
                <CIcon name="vk" class="text-primary-100" />
                <CIcon name="fb" class="text-primary-100" />
                <CIcon name="ok" class="text-primary-100" />
            </div>

            <div>
                <CIcon name="arrow-down" class="text-tertiary-100" />
                <CIcon name="arrow-up" class="text-tertiary-100" />
                <CIcon name="arrow-left" class="text-tertiary-100" />
                <CIcon name="arrow-right" class="text-tertiary-100" />
            </div>

            <div>
                <CIcon name="down" class="text-secondary-200" />
                <CIcon name="up" class="text-secondary-200" />
                <CIcon name="point" class="text-secondary-200" />
                <CIcon name="cart" class="text-secondary-200" />
            </div>

            <div>
                <CIcon name="close" class="text-danger" />
                <CIcon name="menu" class="text-danger" />
                <CIcon name="search" class="text-danger" />
                <CIcon name="question" />
            </div>

            <div>
                <CIcon name="star" class="text-tertiary-300" />
            </div>

            <div>
                <CIcon name="cart-round" />
                <CIcon name="phone-round" />
                <CIcon name="settings-round" />
                <CIcon name="payment-round" />
                <CIcon name="mail-round" />
                <CIcon name="info-round" />
                <CIcon name="delivery-round" />
            </div>
        </div> -->

        <!--  Button -->
        <div>
            <CButton>Button</CButton>
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
