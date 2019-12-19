<template>
    <div>
        <!-- Layout -->
        <section class="mb-1-5">
            <h2 class="mb-1-2">Container</h2>
            <div class="exmpl-panel">
                <CContainer class="bg-layout-container">fix width</CContainer>
                <br />
                <CContainer class="bg-layout-container" fluid>fluid</CContainer>
            </div>
        </section>

        <section class="mb-1-5">
            <h2 class="mb-1-2">Gutters</h2>

            <div class="mb-0-8 ">
                <h3 class="mb-1-2">md (default)</h3>
                <div class="exmpl-panel">
                    <CContainer>
                        <CRow>
                            <CCol>
                                <div class="bg-layout-col p-0-4">Col</div>
                            </CCol>
                            <CCol>
                                <div class="bg-layout-col p-0-4">Col</div>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            </div>

            <div class="mb-0-8">
                <h3 class="mb-1-2">sm</h3>
                <div class="exmpl-panel">
                    <CContainer>
                        <CRow gutters="sm">
                            <CCol>
                                <div class="bg-layout-col p-0-4">Col</div>
                            </CCol>
                            <CCol>
                                <div class="bg-layout-col p-0-4">Col</div>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            </div>

            <div class="mb-0-8">
                <h3 class="mb-1-2">none</h3>
                <div class="exmpl-panel">
                    <CContainer>
                        <CRow
                            gutters="none"
                            gutters-sm="sm"
                            gutters-md="md"
                            gutters-lg="lg"
                            gutters-xl="xl"
                        >
                            <CCol>
                                <div class="bg-layout-col p-0-4">Colwww</div>
                            </CCol>
                            <CCol>
                                <div class="bg-layout-col p-0-4">Col</div>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            </div>
        </section>

        <!-- <section class="mb-1-5">
            <h2 class="mb-1-2">Responsive</h2>

            <div class="mb-0-8 ">
                <h3 class="mb-1-2">Test</h3>
                <div class="exmpl-panel">
                    <CContainer>
                        <CRow>
                            <CCol>
                                <div class="bg-layout-col p-0-4">Col</div>
                            </CCol>
                            <CCol>
                                <div class="bg-layout-col p-0-4">Col</div>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            </div>
        </section> -->

        <!-- Layout -->
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {};
    }
};
</script>
