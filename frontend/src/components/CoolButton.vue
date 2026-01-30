
<template>
    <div class="center-text">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>Woah this is a super secret button you found!</p>

        <button @click="redirct">Cool button</button>
    </div>
</template>

<script setup lang="ts">
    const redirct = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
</script>

<style scoped>
    .center-text{
        text-align: center;
    }
</style>