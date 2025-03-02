<template>
  <Teleport to=".container">
    <div style="background-color: lightcoral">
      <h1>Hello From the Microfrontend</h1>
      <router-view />
      <ul>
        <li><router-link to="/app/foo">Go to Foo</router-link></li>
        <li><router-link to="/app/bar">Go to Bar</router-link></li>
      </ul>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
</script>
