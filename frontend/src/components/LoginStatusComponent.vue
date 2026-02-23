<template>
    <p id="LoginStatus">Status: {{ authStore.user ? "LOGGED IN" : "LOGGED OUT" }}</p>
</template>

<script setup lang="ts">
    import { useAuthStore } from "../stores/authStore";
    const authStore = useAuthStore();
</script>

<style scoped>
    #LoginStatus{
        color: blue;
        background-color: red;
        font-size: 160%;
    }
</style>