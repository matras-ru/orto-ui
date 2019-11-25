<template>
    <div id="app">
        <main style="padding: 30px;">
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

            <!--   -->

            <!--  Link -->
            <!-- 
            <div style="margin-bottom: 1rem;">
                <CLink>Link</CLink>
            </div> -->

            <!--   -->

            <!--  Button -->
            <div>
                <!-- <CButton size="sm">Button</CButton>
                <CButton>Button</CButton>
                <CButton size="lg">Button</CButton> -->
                <CButton variant="secondary" size="sm">Button</CButton>
                <!-- <CButton variant="primary">Button</CButton>
                <CButton variant="primary" size="lg">Button</CButton>
                <CButton variant="secondary" size="sm">Button</CButton>
                <CButton variant="secondary">Button</CButton>
                <CButton variant="secondary" size="lg">Button</CButton>
                <CButton variant="tertiary" size="sm">Button</CButton>
                <CButton variant="tertiary">Button</CButton>
                <CButton variant="tertiary" size="lg">Button</CButton>
                <CButton variant="quaternary" size="sm">Button</CButton>
                <CButton variant="quaternary">Button</CButton>
                <CButton variant="quaternary" size="lg">Button</CButton> -->
            </div>

            <!-- 
           // Form
            <CForm action="/" method="POST">
                <CFormInput
                    type="text"
                    id="user_name"
                    label="Name *"
                    name="user_name"
                    error
                    v-model="exampleModel.inputModel"
                />
                <CFormError>Error message</CFormError>

                <CFormInput
                    tag="textarea"
                    id="user_message"
                    label="Message *"
                    name="user_message"
                    v-model="exampleModel.textareaModel"
                />
                <CFormError>Error message</CFormError>

                <CFormPanel label="Series 2">
                    <CCheckbox
                        id="checkbox1"
                        label="Default"
                        name="checkbox1"
                        value="checkbox1"
                        v-model="exampleModel.checkboxModel"
                    />
                    <CCheckbox
                        id="checkbox2"
                        label="Disabled"
                        name="checkbox2"
                        value="checkbox2"
                        disabled
                    />
                </CFormPanel>

                <CFormPanel label="Series 3">
                    <CCheckboxGroup
                        :data="[
                            {
                                id: 'checkbox3',
                                label: 'Checkbox3',
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
                        v-model="exampleModel.checkboxGroupModel"
                    />
                </CFormPanel>

                <CRadio
                    id="radio1"
                    label="Default"
                    name="radio1"
                    value="radio1"
                    v-model="exampleModel.radioModel"
                />
                <CRadio id="radio2" label="Default" name="radio1" value="radio2" disabled />
                <CRadioGroup
                    :data="[
                        { id: 'radio3', label: 'Radio1', name: 'radio', value: 'radio3' },
                        { id: 'radio4', label: 'Radio2', name: 'radio', value: 'radio4' }
                    ]"
                    v-model="exampleModel.radioGroupModel"
                />
            </CForm>


            // Tabs

            <CContainer>
                <CTabs v-model="exampleModel.tab">
                    <CTab label="Описание" name="description" />
                    <CTab label="Характеристики" name="parameters" />
                    <CTab label="Состав" name="structure" />
                    <CTab label="Отзывы (8)" name="feedback" />
                    <CTab label="Доставка и оплата" name="delivery" />
                </CTabs>
            </CContainer>

            <div class="bg-secondary-100 py-2-5">
                <CContainer>
                    <div style="padding: 0 30px">
                        <CTabPanels v-model="exampleModel.tab">
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
                    </div>
                </CContainer>
            </div>
            -->

            <div class="fixed top-0 right-0 p-2-5 bg-white shadow">
                <pre>{{ exampleModel }}</pre>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            exampleModel: {
                tab: 'feedback',
                checkboxModel: false,
                checkboxGroupModel: [],
                radioModel: null,
                radioGroupModel: null,
                inputModel: null,
                textareaModel: null
            }
        };
    }
};
</script>
