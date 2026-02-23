<template>
    <div>
        <table>
            <tr v-for="(feedback, index) in feedbackStore.feedbacks" :key="index">
                <td>{{ feedback.feedback }}</td>
            </tr>
        </table>
    </div>
</template>
<script setup lang="ts">
    import { onMounted } from "vue";
    import { useFeedbackStore } from "../stores/feedbackStore";

    const feedbackStore = useFeedbackStore();

    onMounted( async () => {
        await feedbackStore.fetchFeedbacks();
        console.log(feedbackStore.feedbacks); // now logs after data arrives
    });

</script>
<style scoped>
</style>