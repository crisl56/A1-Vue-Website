
<template>
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thead>
                <!--Note: t is table-->
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in leaderboardData" :key="index">
                    <td>{{ item.player }}</td>
                    <td>{{ item.score }}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>

</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";

    type LeaderboardItem = {
        player: string;
        score: number;
    }

    //                          type         original value
    // whenever something put in a ref value, it is stored in pinia
    // sorta like a pointer in c++, if the original place where the value is at is changed
    // it is changed everywhere


    const leaderboardData = ref<LeaderBoardItem[]>([])
    const errorMessage = ref("");

    async function fetchLeaderBoardData() {
        const url = "http://localhost:3000/api/leaderboard-summary"
        try {
            // This is getting the data 
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`)
            }
            const data = (await response.json()) as LeaderboardItem[];
            leaderboardData.value = data;
        } catch (error: any) {
            errorMessage.value = error?.message ?? "Unknown";
        }
    }

    onMounted(() => {
        fetchLeaderBoardData();
    });


</script>

<style scoped>
    .leaderboard-summary{
        margin-top: 10px;
        text-align: center;
    }

    table {
        margin: 0 auto;
        border-collapse: collapse;
    }

    th, td{
        border: 1px solid #20b7cc;
    }

    .error{
        color: rebeccapurple;
    }
</style>

