<!-- NOTE: when making a vue, always have template, script, styles -->

<template>
    <div class="landing-page">
        <h1>Cooler game :D</h1>
        <p>Bestest game ever!</p>

        <!-- Widgets -->
        <CounterWidget />
        <LeaderboardSummary />
    </div>
</template>

<script setup lang="ts">
    import CounterWidget from "../components/CounterWidget.vue"; // .vue needs 
    import LeaderboardSummary from "../components/LeaderboardSummary.vue"; // .vue needs 
    // add more widgets here
</script>

<style scoped>
    .landing-page {
        text-align: center;
        margin-top: 10px;
    }
</style>