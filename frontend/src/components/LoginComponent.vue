<template>
    <div class="background">
        <h1>Login Form</h1>
        <section>
            <input type="text" v-model="email" placeholder="email">
            <input type="password" v-model="password" placeholder="password">
        </section>
        <section>
            <button @click="tryLogin">Login</button>
            <button @click="tryRegister">Register</button>
            <button @click="tryLogout">Logout</button>
        </section>
        <p>Status: {{ authStore.user ? "LOGGED IN" : "LOGGED OUT" }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    import { useAuthStore } from "../stores/authStore";

    const authStore = useAuthStore(); 
    const email = ref("");            
    const password = ref("");          
    const errorMessage = ref("");      
    const successMessage = ref("");    

    async function tryLogin() {
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.value, password: password.value })
            });
            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            const user = await response.json();
            authStore.setUser(user);
            successMessage.value = "Logged in!";
            errorMessage.value = "";
        } catch (error: any) {
            errorMessage.value = error?.message ?? "Unknown";
        }
    }

    async function tryRegister() {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.value, password: password.value })
            });
            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            const user = await response.json();
            authStore.setUser(user);
            successMessage.value = "Registered and logged in!";
            errorMessage.value = "";
        } catch (error: any) {
            errorMessage.value = error?.message ?? "Unknown";
        }
    }

    function tryLogout() {
        authStore.logout();  
        successMessage.value = "";
        errorMessage.value = "";
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