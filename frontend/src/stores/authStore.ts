import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", () => {
    const user = ref<{ email: string; _id: string } | null>(null);

    function setUser(newUser: { email: string; _id: string }) {
        user.value = newUser;
    }

    function logout() {
        user.value = null;
    }

    return { user, setUser, logout };
});