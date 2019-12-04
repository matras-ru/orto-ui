<template>
    <div id="app">
        <main style="padding: 30px;">
            <div class="flex -mx-1-4 mb-1-5">
                <div class="px-1-4">
                    <CLink :to="{ name: 'index' }">Router link INDEX</CLink>
                </div>
                <div class="px-1-4">
                    <CLink :to="{ name: 'test' }">Router link TEST</CLink>
                </div>
                <div class="px-1-4">
                    <CLink href="//google.com" target="_blank">EXTERNAL LINK</CLink>
                </div>
                <div class="px-1-4">
                    <CLink href="//google.com" target="_blank" disabled>DISABLED LINK</CLink>
                </div>
            </div>
            <router-view> </router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {};
    }
};
</script>
