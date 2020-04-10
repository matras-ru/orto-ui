<template>
    <div>
        <CContainer>
            <CTabs v-model="activeTab" justify="between" class="overflow-x-auto">
                <CTab label="Описание" name="description" class="whitespace-no-wrap" />
                <CTab label="Характеристики" name="parameters" class="whitespace-no-wrap" />
                <CTab label="Состав" name="structure" class="whitespace-no-wrap" />
                <CTab name="feedback" class="whitespace-no-wrap">Отзывы (8)</CTab>
                <CTab label="Доставка и оплата" name="delivery" class="whitespace-no-wrap" />
            </CTabs>
        </CContainer>

        <div class="bg-secondary-100 py-2-5">
            <CContainer>
                <CTabPanels v-model="activeTab" class="px-1-5">
                    <CTabPanel name="description">
                        <div>Описание контент</div>
                    </CTabPanel>
                    <CTabPanel name="parameters">
                        <div>Характеристики контент</div>
                    </CTabPanel>
                    <CTabPanel name="structure">
                        <div>Состав контент</div>
                    </CTabPanel>
                    <CTabPanel name="feedback">
                        <div>Отзывы контент</div>
                    </CTabPanel>
                    <CTabPanel name="delivery">
                        <div>Доставка и оплата контент</div>
                    </CTabPanel>
                </CTabPanels>
            </CContainer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',

    computed: {
        activeTab: {
            get() {
                return this.$route.hash ? this.$route.hash.replace('#', '') : 'description';
            },

            set(val) {
                this.$router.push({ hash: val });
            }
        }
    }
};
</script>
