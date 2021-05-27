<template>
    <div>
        <CContainer>
            <CRow>
                <CCol :cols="12" :lg="4">
                    <CPicture
                        class="border border-black-100"
                        lazy
                        :src="require('@/assets/img/600.jpg')"
                        :md="require('@/assets/img/1000.jpg')"
                        :lg="require('@/assets/img/1500.jpg')"
                    ></CPicture>
                </CCol>

                <CCol :cols="12" :lg="4">
                    <CPicture
                        class="border border-black-100"
                        :src="require('@/assets/img/600.jpg')"
                    />
                </CCol>

                <CCol :cols="12" :lg="4">
                    <CPicture
                        class="border border-black-100"
                        :src="require('@/assets/img/600.jpg')"
                        :md="require('@/assets/img/1000.jpg')"
                        :lg="require('@/assets/img/1500.jpg')"
                        v-bind="{
                            formats: [
                                {
                                    type: 'webp',
                                    sm: require('@/assets/img/600.webp'),
                                    md: require('@/assets/img/1000.webp'),
                                    lg: require('@/assets/img/1500.webp')
                                }
                            ]
                        }"
                    ></CPicture>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
export default {
    name: 'Picture'
};
</script>
