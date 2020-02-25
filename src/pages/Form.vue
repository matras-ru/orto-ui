<template>
    <div>
        <CForm @submit.prevent="validate">
            <CButton type="submit">Submit</CButton>
            <br />
            <br />

            <div style="max-width: 300px;">
                <div style="max-width: 100px;">
                    <CFormPanel label="Number">
                        <CFormInput
                            type="number"
                            min="0"
                            max="1000"
                            v-model="exampleModel.inputNumberModel"
                        />
                    </CFormPanel>
                </div>

                <CDropdown>
                    <template #holder="{ toggle, isShow }">
                        <CLink variant="primary" @click="toggle">Серия Эконом {{ isShow }} </CLink>
                    </template>
                    <template #dropdown="{ toggle }">
                        <CList>
                            <CListItem
                                v-for="(item, idx) in ['Серия Премиум', 'Серия Eco']"
                                :key="idx"
                                @click="toggle"
                                class="cursor-pointer py-0-4 px-0-8 bg-white hover:bg-tertiary-100"
                                >{{ item }}</CListItem
                            >
                        </CList>
                    </template>
                </CDropdown>

                <CFormPanel label="Default">
                    <CFormSelectCustom
                        v-bind="{
                            data: [
                                {
                                    id: 1,
                                    name: '100 x 100 — 5 550 р.'
                                },
                                {
                                    id: 2,
                                    name: '100 x 100 — 15 080 р.'
                                }
                            ],
                            label: 'Выберите размер',
                            optionValue: 'id',
                            optionLabel: 'name',
                            error: $v.exampleModel.selectModel.$error
                        }"
                        v-model="exampleModel.selectModel"
                    />
                </CFormPanel>

                <CFormPanel label="Slot">
                    <CFormSelectCustom
                        v-bind="{
                            data: [
                                {
                                    id: 1,
                                    price: 15080,
                                    width: 200,
                                    height: 250
                                },
                                {
                                    id: 2,
                                    price: 5550,
                                    width: 100,
                                    height: 100
                                }
                            ],
                            label: 'Выберите размер',
                            optionValue: 'id',
                            error: $v.exampleModel.selectModel.$error
                        }"
                        v-model="exampleModel.selectModel"
                    >
                        <template #selected="{ price, width, height }">
                            {{ width }} x {{ height }} — {{ price }} р.
                        </template>
                        <template #default="{ price, width, height }">
                            {{ width }} x {{ height }} — {{ price }} р.
                        </template>
                    </CFormSelectCustom>
                </CFormPanel>

                <CFormPanel label="Default">
                    <CFormInput
                        label="Адрес доставки *"
                        placeholder="Ул.Пушкина д.Колотушкина"
                        v-model="exampleModel.inputModel"
                        :error="$v.exampleModel.inputModel.$error"
                    >
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

                <CFormPanel label="Textarea">
                    <CFormInput
                        label="Имя и фамилия *"
                        type="textarea"
                        placeholder="Вася Пупкин"
                        v-model="exampleModel.textareaModel"
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
                        value: 'checkbox1',
                        error: $v.exampleModel.checkboxModel.$error
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
                    v-bind="{
                        id: 'radio1',
                        label: 'radio1',
                        name: 'radio1',
                        value: 'radio1',
                        error: $v.exampleModel.radioModel.$error
                    }"
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
import { required, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
    name: 'FromExample',

    data() {
        return {
            exampleModel: {
                checkboxModel: false,
                checkboxGroupModel: [],
                radioModel: null,
                radioGroupModel: null,
                inputModel: null,
                inputNumberModel: 0,
                selectModel: null,
                textareaModel: null
            }
        };
    },

    validations: {
        exampleModel: {
            inputModel: {
                required,
                minLength: minLength(4)
            },

            selectModel: {
                required
            },

            checkboxModel: {
                sameAs: sameAs(() => true)
            },

            radioModel: {
                required
            }
        }
    },

    methods: {
        validate() {
            this.$v.$touch();
        }
    }
};
</script>
