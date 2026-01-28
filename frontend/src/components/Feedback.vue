
<template>
    <div class="background">
        <h1>Feedback Form</h1>
        <section>
            <p>Have any feedback? feel free to send it!</p>
            <input type="text" v-model="feedback" placeholder="feedback">
            <button @click="submitFeedback">Send Feedback</button>
        </section>
    </div>

</template>

<script setup lang="ts">
    import { ref } from "vue";

    const feedback = ref('')

    const submitFeedback = () => {

        if (feedback.value == "") {
            console.log("no feedback");
            return;
        }

        //print out feedback
        console.log(feedback.value);

        // clear the feedback input
        feedback.value = "";


    }

</script>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
    }

    .background{
        text-align:center;
        background-color: aliceblue;
    }

</style>