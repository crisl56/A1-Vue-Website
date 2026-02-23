import { ref } from 'vue'
import { defineStore } from 'pinia'

type Feedback = {
    _id: string;
    userId: string;
    feedback: string;
    createdAt: string;
}

export const useFeedbackStore = defineStore("feedback", () => {
    const feedbacks = ref<Feedback[]>([]);
    const errorMessage = ref("");

    async function fetchFeedbacks() {
        try {
            const response = await fetch("/api/feedbacks");
            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            feedbacks.value = await response.json();
        } catch (err: any) {
            errorMessage.value = err?.message ?? "Unknown";
        }
    }

    function clearFeedbacks() {
        feedbacks.value = [];
    }

    return { feedbacks, errorMessage, fetchFeedbacks, clearFeedbacks };
});