<template>
    <div class="background">
        <h1>Feedback Form</h1>
        <section>
            <p>Have any feedback? feel free to send it!</p>
            <input type="text" v-model="feedback" placeholder="feedback">
            <button @click="trySubmitFeedback">Send Feedback</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <p v-if="successMessage" class="success">{{ successMessage }}</p>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    import { useAuthStore } from "../stores/authStore";
    import { useFeedbackStore } from "../stores/feedbackStore";

    const authStore = useAuthStore();
    const feedback = ref("");
    const errorMessage = ref("");
    const successMessage = ref("");

    const feedbackStore = useFeedbackStore();


    async function trySubmitFeedback() {
        // check for valid user
        if (!authStore.user) {
            errorMessage.value = "You must be logged in to submit feedback.";
            return;
        }
        try {
            const response = await fetch("/api/feedbacks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: authStore.user._id,
                    feedback: feedback.value
                })
            });
            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            successMessage.value = "Feedback submitted!";

            await feedbackStore.fetchFeedbacks();

            feedback.value = ""; 
            errorMessage.value = "";

        } catch (err: any) {
            errorMessage.value = err?.message ?? "Unknown error";
        }
    }
</script>
<style scoped>
    section {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
    }

    .background {
        text-align: center;
        background-color: aliceblue;
    }

    .error {
        color: red;
    }

    .success {
        color: green;
    }
</style>