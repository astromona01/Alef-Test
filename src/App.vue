<template>
  <component :is="layout">
    <router-view v-model:layout.sync="layout"></router-view>
  </component>
</template>

<script>
import './styles/global/global.css';
export default {
  name: 'App',
  data: () => ({
    layout: 'div'
  })
}
</script>

