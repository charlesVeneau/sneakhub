<template>
  <div id="app">
    <Navbar />
    <header class="header">
      <h1 class="header-title">{{ $route.name }}</h1>
    </header>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>
