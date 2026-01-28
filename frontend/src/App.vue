
<script setup lang="ts">

</script>

<template>
  <div id="app">
      <header>
          <nav>
              <router-link to="/">Home</router-link>
              <router-link to="/About">About</router-link>
              <router-link to="/Leaderboard">Leaderboard</router-link>
              <router-link to="/Contacts">Contacts</router-link>
          </nav>
      </header>
      <main>
          <router-view />
      </main>
  </div>
</template>

<style scoped>

</style>
