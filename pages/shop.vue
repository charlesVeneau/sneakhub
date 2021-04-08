<template>
  <div>
    <Header :page-name="shop" />
    <ProductCard />
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop: 'Shop',
    }
  },
}
</script>
