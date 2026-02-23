
<template>
    <h1>Contacts</h1>
    <address class="Contacts">
        Email: pg29Cris@vfs.com <br />
        Alternative Email: crislaurenceodonel@gmail.com <br />
        Phone: (+1) 431-337-1111
    </address>

    <LoginStatus/>
    <Feedback />
    <FeedbackViews />
</template>

<script setup lang="ts">
    import Feedback from "../components/Feedback.vue"; // .vue needs 
    import FeedbackViews from "../components/FeedbackViews.vue";
    import LoginStatus from "../components/LoginStatusComponent.vue";

</script>

<style>
    h1{
        text-align: center
    }

    .Contacts {
        text-align: center;
        font-size: 20px;
        color: aquamarine;
        background-color: darkgrey;
    }
</style>