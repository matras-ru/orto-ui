<template>
    <div>
        <CContainer>
            <CRow>
                <CCol :cols="12" :lg="4">
                    <CPicture
                        lazy
                        :src="require('@/assets/img/picture1.jpg')"
                        :lg="require('@/assets/img/picture2.jpg')"
                    >
                    </CPicture>
                </CCol>
                <CCol :cols="12" :lg="4">
                    <CPicture :src="require('@/assets/img/picture2.jpg')"></CPicture>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
export default {
    name: 'Picture',

    methods: {}
};
</script>
