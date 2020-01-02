<template>
    <div>
        <CContainer>
            <CTabs v-model="exampleModel.tab" justify="center">
                <CTab label="Описание" name="description" />
                <CTab label="Характеристики" name="parameters" />
                <CTab label="Состав" name="structure" />
                <CTab name="feedback">Отзывы (8)</CTab>
                <CTab label="Доставка и оплата" name="delivery" />
            </CTabs>
        </CContainer>

        <div class="bg-secondary-100 py-2-5">
            <CContainer>
                <CTabPanels v-model="exampleModel.tab" class="px-1-5">
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
    data() {
        return {
            exampleModel: {
                tab: 'parameters'
            }
        };
    }
};
</script>
