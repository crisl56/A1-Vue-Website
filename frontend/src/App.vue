
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
              <router-link to="/Login">Login</router-link>
          </nav>
      </header>
      <main>
          <router-view />
      </main>
  </div>
</template>

<style scoped>

</style>
