<template>
    <div class="leaderboard">
        <h2>Full Leaderboard</h2>
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

    const leaderboardData = ref<LeaderBoardItem[]>([]);
    const errormessage = ref("");

    async function fetchLeaderBoardData() {
        const url = "http://localhost:3000/api/leaderboard-full";

        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new error(`Server error: ${response.status}`);
            }
            ;
            const data = await response.json() as LeaderboardItem[];
            leaderboardData.value = data;
        } catch (errorr: any) { errorMessage.value = error?.message ?? "Unknown"}
    }

    onMounted(() => {
        fetchLeaderBoardData();
    })
</script>

<style>
    .leaderboard-summary {
        margin-top: 10px;
        text-align: center;
    }

    table {
        margin: 0 auto;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #20b7cc;
    }

    .error {
        color: rebeccapurple;
    }
</style>