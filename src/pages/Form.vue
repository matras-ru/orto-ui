<template>
    <div>
        <!-- <div>
        <CForm action="/" method="POST"> -->
        <!-- <CFormInput
                    type="text"
                    id="user_name"
                    label="Name *"
                    name="user_name"
                    error
                    v-model="exampleModel.inputModel"
                />

                <CFormError>Error message</CFormError> -->

        <!-- <CFormInput
                    tag="textarea"
                    id="user_message"
                    label="Message *"
                    name="user_message"
                    v-model="exampleModel.textareaModel"
                /> -->
        <!-- <CFormError>Error message</CFormError> -->

        <!-- <CFormPanel label="Checkbox"> -->
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
                inputModel: null,
                textareaModel: null
            }
        };
    }
};
</script>
