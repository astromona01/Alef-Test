<template>
  <div class="header-container">
    <div class="logo">
      <img src="../assets/Logo.svg" alt="logo">
    </div>
    <nav class="nav">
      <ul>
        <router-link :to="{name: 'main'}">Форма</router-link>
        <router-link :to="{name: 'preview'}">Превью</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import '../styles/header/header.css';
export default {
  name: "Header"
}
</script>