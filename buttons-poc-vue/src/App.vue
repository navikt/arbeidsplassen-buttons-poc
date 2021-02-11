<template>
  <div id="app">
    <button class="Button--primary">Primary</button>
    <br>
    <br>
    <button class="Button--secondary">Secondary</button>
    <br>
    <br>
    <button class="Button--tertiary">Tertiary</button>
    <br>
    <br>
    <button class="Button--disabled" disabled>Disabled</button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less">
@import "~@navikt/arbeidsplassen-buttons-poc/less/index";
</style>
