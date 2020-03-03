<template>
    <div>
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
                        <CRow gutters="none">
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
        </section>

        <section class="mb-1-5">
            <h2 class="mb-1-2">Offset</h2>

            <div class="mb-0-8 ">
                <div class="exmpl-panel">
                    <CContainer>
                        <CRow>
                            <CCol :offsetLg="3" :md="3">
                                <div class="bg-layout-col p-0-4">Col offset 3</div>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            </div>
        </section>

        <section class="mb-1-5">
            <h2 class="mb-1-2">Responsive</h2>

            <div class="mb-0-8">
                <h3 class="mb-1-2"></h3>
                <div class="exmpl-panel">
                    <CContainer>
                        <CRow class="mb-1-4">
                            <CCol :cols="6">
                                <div class="bg-layout-col p-0-4">6/12</div>
                            </CCol>
                            <CCol :cols="6">
                                <div class="bg-layout-col p-0-4">6/12</div>
                            </CCol>
                        </CRow>

                        <CRow class="mb-1-4">
                            <CCol :cols="3">
                                <div class="bg-layout-col p-0-4">3/12</div>
                            </CCol>
                            <CCol :cols="3">
                                <div class="bg-layout-col p-0-4">3/12</div>
                            </CCol>
                            <CCol :cols="3">
                                <div class="bg-layout-col p-0-4">3/12</div>
                            </CCol>
                            <CCol :cols="3">
                                <div class="bg-layout-col p-0-4">3/12</div>
                            </CCol>
                        </CRow>

                        <CRow :cols="2" :md="5">
                            <CCol class="mb-0-8" :cols="1" :md="1">
                                <div class="bg-layout-col p-0-4">1/2 md-1/5</div>
                            </CCol>
                            <CCol class="mb-0-8" :cols="1" :md="1">
                                <div class="bg-layout-col p-0-4">1/2 md-1/5</div>
                            </CCol>
                            <CCol class="mb-0-8" :cols="1" :md="1">
                                <div class="bg-layout-col p-0-4">1/2 md-1/5</div>
                            </CCol>
                            <CCol class="mb-0-8" :cols="1" :md="1">
                                <div class="bg-layout-col p-0-4">1/2 md-1/5</div>
                            </CCol>
                            <CCol class="mb-0-8" :cols="1" :md="1">
                                <div class="bg-layout-col p-0-4">1/2 md-1/5</div>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            </div>
        </section>
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
