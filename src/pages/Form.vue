<template>
    <div>
        <CForm @submit.prevent="validate">
            <CButton type="submit">Submit</CButton>
            <br />
            <br />

            <div style="max-width: 300px">
                <div style="max-width: 100px">
                    <CFormPanel label="Number">
                        <CFormInput
                            type="number"
                            :min="0"
                            :max="1000"
                            v-model="exampleModel.inputNumberModel"
                        >
                            <template #up>♠</template>
                            <template #down>♥</template>
                        </CFormInput>
                    </CFormPanel>

                    <CFormPanel label="Number @input">
                        <CFormInput
                            type="number"
                            @input="
                                value => {
                                    exampleModel.inputNumberModel = value;
                                }
                            "
                            :modelValue="exampleModel.inputNumberModel"
                        >
                        </CFormInput>
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

                <CCheckboxGroup
                    label="Group"
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
                        },
                        {
                            id: 'checkbox5',
                            label: 'checkbox5',
                            name: 'checkbox5',
                            value: 'checkbox5'
                        }
                    ]"
                    v-model="exampleModel.checkboxGroupModel"
                />

                <CButton @click="() => (exampleModel.checkboxGroupModel = [])">Clear</CButton>

                <CFormPanel label="Default">
                    <CFormSelectCustom
                        data-aq-test
                        labelBgColor="dwwdwd"
                        v-bind="{
                            data: [
                                {
                                    id: 1,
                                    name: '100 x 100 — 5 550 р.'
                                },
                                {
                                    id: 2,
                                    name: '100 x 100 — 15 080 р.'
                                },
                                {
                                    id: 3,
                                    name: '100 x 100 — 5 550 р.'
                                },
                                {
                                    id: 4,
                                    name: '100 x 100 — 15 080 р.'
                                },
                                {
                                    id: 5,
                                    name: '100 x 100 — 5 550 р.'
                                },
                                {
                                    id: 6,
                                    name: '100 x 100 — 15 080 р.'
                                },
                                {
                                    id: 7,
                                    name: '100 x 100 — 5 550 р.'
                                },
                                {
                                    id: 8,
                                    name: '100 x 100 — 15 080 р.'
                                },
                                {
                                    id: 9,
                                    name: '100 x 100 — 5 550 р.'
                                },
                                {
                                    id: 10,
                                    name: '100 x 100 — 15 080 р.'
                                },
                                {
                                    id: 11,
                                    name: '100 x 100 — 5 550 р.'
                                },
                                {
                                    id: 12,
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
                <div style="max-width: 300px">
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
                </div>
                <CFormPanel label="size sm">
                    <div class="flex flex-wrap -mx-0-2">
                        <div class="px-0-2 w-1/3">
                            <CFormSelectCustom
                                v-bind="{
                                    data: widths,
                                    size: 'sm',
                                    placeholder: 'Ширина',
                                    optionValue: 'id'
                                }"
                                v-model="exampleModel.width"
                            >
                            </CFormSelectCustom>
                        </div>

                        <div class="px-0-2 w-1/3">
                            <CFormSelectCustom
                                v-bind="{
                                    data: [
                                        {
                                            id: 1,
                                            label: 200
                                        },
                                        {
                                            id: 2,
                                            label: 100
                                        }
                                    ],
                                    size: 'sm',
                                    placeholder: 'Длина',
                                    optionValue: 'id',
                                    error: $v.exampleModel.selectModel.$error
                                }"
                                v-model="exampleModel.selectModel"
                            >
                            </CFormSelectCustom>
                        </div>

                        <div class="px-0-2 w-1/3">
                            <CFormSelectCustom
                                v-bind="{
                                    data: [
                                        {
                                            id: 1,
                                            label: 18
                                        },
                                        {
                                            id: 2,
                                            label: 20
                                        }
                                    ],
                                    size: 'sm',
                                    placeholder: 'Высота',
                                    optionValue: 'id',
                                    error: $v.exampleModel.selectModel.$error
                                }"
                                v-model="exampleModel.selectModel"
                            >
                            </CFormSelectCustom>
                        </div>
                    </div>
                </CFormPanel>

                <div class="w-3/4">
                    <CFormPanel label="Размер">
                        <CFormField labelStick>
                            <template #label>
                                <span class="text-xs">Ширина, длина, высота</span>
                            </template>
                            <div class="flex justify-between">
                                <div class="px-0-4">
                                    <CDropdown>
                                        <template #holder="{ toggle }">
                                            <CLink variant="quinary" @click="toggle">
                                                {{ activeSort.label }}
                                            </CLink>
                                        </template>
                                        <template #dropdown="{ toggle }">
                                            <CList>
                                                <CListItem
                                                    v-for="({ id, label }, idx) in widths"
                                                    :key="idx"
                                                    @click="
                                                        () => {
                                                            setValue(id, 'width');
                                                            toggle();
                                                        }
                                                    "
                                                    class="cursor-pointer py-0-4 px-0-8 bg-white hover:bg-tertiary-100"
                                                    >{{ label }}</CListItem
                                                >
                                            </CList>
                                        </template>
                                    </CDropdown>
                                </div>
                                <div class="px-0-4 text-tertiary-300">x</div>
                                <div class="px-0-4">
                                    <CLink variant="quinary">200</CLink>
                                </div>
                                <div class="px-0-4 text-tertiary-300">x</div>
                                <div class="px-0-4">
                                    <CLink variant="quinary">18</CLink>
                                </div>
                            </div>
                        </CFormField>
                    </CFormPanel>
                </div>

                <CFormPanel label="Empty Form Field">
                    <CFormField label="Ш, Д, В" modelValue="22"> </CFormField>
                </CFormPanel>

                <div class="bg-secondary-100 p-1-6">
                    <CFormPanel label="labelBgColor">
                        <CFormSelectCustom
                            v-bind="{
                                data: [
                                    {
                                        id: 1,
                                        label: 18
                                    },
                                    {
                                        id: 2,
                                        label: 20
                                    }
                                ],
                                size: 'sm',
                                placeholder: 'Высота',
                                optionValue: 'id',
                                error: $v.exampleModel.selectModel.$error,
                                labelBgColor: 'bg-secondary-100'
                            }"
                            label="Адрес доставки *"
                            v-model="exampleModel.selectModel"
                        >
                        </CFormSelectCustom>

                        <CFormInput
                            label="Адрес доставки *"
                            placeholder="Ул.Пушкина д.Колотушкина"
                            v-model="exampleModel.inputModel"
                            labelBgColor="bg-secondary-100"
                        >
                        </CFormInput>
                        <CFormInput
                            label="Адрес доставки *"
                            placeholder="Ул.Пушкина д.Колотушкина"
                            v-model="exampleModel.inputModel"
                            labelBgColor="bg-secondary-100"
                        >
                        </CFormInput>
                        <CFormInput
                            label="Адрес доставки *"
                            placeholder="Ул.Пушкина д.Колотушкина"
                            v-model="exampleModel.inputModel"
                            labelBgColor="bg-secondary-100"
                            errorMessage="Поле обязательно"
                            hint="Нужны, чтобы заполнить гарантию"
                            :error="$v.exampleModel.inputModel.$error"
                        >
                        </CFormInput>
                        <CFormInput
                            label="Адрес доставки *"
                            placeholder="Ул.Пушкина д.Колотушкина"
                            v-model="exampleModel.inputModel"
                            labelBgColor="bg-secondary-100"
                            errorMessage="Поле обязательно"
                            hint="Нужны, чтобы заполнить гарантию"
                            :error="$v.exampleModel.inputModel.$error"
                        >
                        </CFormInput>
                    </CFormPanel>
                </div>

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

                <CFormPanel label="Error size sm">
                    <CFormInput
                        error
                        label="Имя и фамилия *"
                        placeholder="Вася Пупкин"
                        size="sm"
                        v-model="exampleModel.inputModel"
                    >
                    </CFormInput>
                </CFormPanel>

                <CFormPanel label="Empty label size sm">
                    <CFormInput
                        placeholder="Вася Пупкин"
                        size="sm"
                        v-model="exampleModel.inputModel"
                    />
                </CFormPanel>

                <CFormPanel label="Size sm prepend">
                    <div class="flex flex-wrap -mx-0-4">
                        <div class="w-1/2 px-0-4">
                            <CFormInput
                                size="sm"
                                inline
                                placeholder="1111"
                                v-model="exampleModel.inputModel"
                            >
                                <template #prepend>от</template>
                            </CFormInput>
                        </div>
                        <div class="w-1/2 px-0-4">
                            <CFormInput
                                size="sm"
                                inline
                                placeholder="2222"
                                v-model="exampleModel.inputModel"
                            >
                                <template #prepend>до</template>
                            </CFormInput>
                        </div>
                    </div>
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

            <div class="w-1/6">
                <CFormPanel label="Default">
                    <CCheckbox
                        v-bind="{
                            id: 'checkbox1',
                            label: 'checkbox1 checkbox1 checkbox1 checkbox1',
                            name: 'checkbox1',
                            value: 'checkbox1',
                            error: $v.exampleModel.checkboxModel.$error
                        }"
                        v-model="exampleModel.checkboxModel"
                    />
                </CFormPanel>
            </div>

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
            <CFormPanel>
                <CRating
                    id="test1"
                    :scale="[
                        { id: 1, label: 'Ужасно', value: 1 },
                        { id: 2, label: 'Плохо', value: 2 },
                        { id: 3, label: 'Нормально', value: 3 },
                        { id: 4, label: 'Хорошо', value: 4 },
                        { id: 5, label: 'Отлично', value: 5 }
                    ]"
                    v-model="exampleModel.ratingModel1"
                />
            </CFormPanel>
            <CFormPanel>
                <CRating id="test2" v-model="exampleModel.ratingModel2" />
            </CFormPanel>
            <CFormPanel>
                <CRating
                    id="test3"
                    :rating="exampleModel.ratingModel3"
                    :readOnly="true"
                    :increment="0.5"
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
            widths: [
                {
                    id: 1,
                    label: 120
                },
                {
                    id: 2,
                    label: 1140
                }
            ],
            exampleModel: {
                checkboxModel: false,
                checkboxGroupModel: [],
                radioModel: null,
                radioGroupModel: null,
                inputModel: null,
                inputNumberModel: 0,
                selectModel: null,
                textareaModel: null,
                width: 1,
                ratingModel1: null,
                ratingModel2: null,
                ratingModel3: '4.3'
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

    computed: {
        activeSort() {
            return this.widths.find(sort => sort.id === this.exampleModel.width);
        }
    },

    methods: {
        validate() {
            this.$v.$touch();
        },

        setValue(val, type) {
            if (type === 'width') {
                this.exampleModel.width = val;
            }
        }
    }
};
</script>
