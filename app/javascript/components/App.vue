<template>
  <a-layout id="app-layout" style="background: #fff; min-width: 900px;">
    <a-layout-header style="background: #fff">
      <h1>head</h1>
    </a-layout-header>
    <a-divider style="height: 1px; background-color: #F0F0F0; margin: 0"/>

    <a-layout-content style="padding: 50px;">
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>

<script>
</script>