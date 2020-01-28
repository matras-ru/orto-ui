<template>
    <div>
        <CForm action="/" method="POST">
            <div style="max-width: 300px;">
                <CFormPanel label="Select TEST">
                    <CFormTest
                        v-bind="{
                            data: ['option0', 'option1']
                        }"
                        v-model="exampleModel.selectModel"
                    />
                </CFormPanel>

                <CFormPanel label="Default">
                    <CFormInput
                        label="Адрес доставки *"
                        placeholder="Ул.Пушкина д.Колотушкина"
                        v-model="exampleModel.inputModel"
                    >
                        <!-- <template #prepend>⚛</template> -->
                        <!-- <template #append>✔</template> -->
                    </CFormInput>
                </CFormPanel>

                <CFormPanel label="prepend/append">
                    <CFormInput
                        label="Имя и фамилия *"
                        placeholder="Вася Пупкин"
                        v-model="exampleModel.inputModel"
                    >
                        <template #prepend>⚛</template>
                        <template #append>✔</template>
                    </CFormInput>
                </CFormPanel>

                <CFormPanel label="Error">
                    <CFormInput
                        error
                        label="Имя и фамилия *"
                        placeholder="Вася Пупкин"
                        v-model="exampleModel.inputModel"
                    >
                    </CFormInput>
                </CFormPanel>
            </div>

            <CFormPanel label="Default">
                <CCheckbox
                    v-bind="{
                        id: 'checkbox1',
                        label: 'checkbox1',
                        name: 'checkbox1',
                        value: 'checkbox1'
                    }"
                    v-model="exampleModel.checkboxModel"
                />
            </CFormPanel>

            <CFormPanel label="Disable">
                <CCheckbox
                    v-bind="{
                        id: 'checkbox2',
                        label: 'checkbox2',
                        name: 'checkbox2',
                        value: 'checkbox2',
                        disabled: true
                    }"
                />
            </CFormPanel>

            <CFormPanel label="Group">
                <CCheckboxGroup
                    :data="[
                        {
                            id: 'checkbox3',
                            label: 'checkbox3',
                            name: 'checkbox3',
                            value: 'checkbox3'
                        },
                        {
                            id: 'checkbox4',
                            label: 'checkbox4',
                            name: 'checkbox4',
                            value: 'checkbox4'
                        }
                    ]"
                    v-model="exampleModel.checkboxGroupModel"
                />
            </CFormPanel>

            <div class="mb-2-5"></div>

            <CFormPanel label="Default">
                <CRadio
                    v-bind="{ id: 'radio1', label: 'radio1', name: 'radio1', value: 'radio1' }"
                    v-model="exampleModel.radioModel"
                />
            </CFormPanel>

            <CFormPanel label="Disable">
                <CRadio
                    v-bind="{
                        id: 'radio2',
                        label: 'radio2',
                        name: 'radio2',
                        value: 'radio2',
                        disabled: true
                    }"
                    v-model="exampleModel.radioModel"
                />
            </CFormPanel>

            <CFormPanel label="Group">
                <CRadioGroup
                    :data="[
                        { id: 'radio3', label: 'Radio1', name: 'radio', value: 'radio3' },
                        { id: 'radio4', label: 'Radio2', name: 'radio', value: 'radio4' }
                    ]"
                    v-model="exampleModel.radioGroupModel"
                />
            </CFormPanel>
        </CForm>

        <div class="fixed top-0 right-0 p-2-5 bg-white shadow">
            <pre>{{ exampleModel }}</pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            exampleModel: {
                checkboxModel: false,
                checkboxGroupModel: [],
                radioModel: null,
                radioGroupModel: null,
                inputModel: 'test',
                selectModel: 'test',
                textareaModel: null
            }
        };
    }
};
</script>
