<template>
  <header class="header">
    <h1 class="header-title">{{ pageName }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    pageName: String,
  },
}
</script>
